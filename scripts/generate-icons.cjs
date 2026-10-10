const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// CRC32 implementation
function makeCrcTable() {
  let c;
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    crcTable[n] = c;
  }
  return crcTable;
}

const crcTable = makeCrcTable();

function crc32(buf) {
  let crc = 0 ^ -1;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}

function createChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(4 + 4 + len + 4);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const typeAndData = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = crc32(typeAndData);
  chunk.writeUInt32BE(crc, 8 + len);
  return chunk;
}

function createPNG(width, height, isMaskable = false) {
  const rows = [];
  const cx = width / 2;
  const cy = height / 2;
  const radius = width * (isMaskable ? 0.38 : 0.42);

  for (let y = 0; y < height; y++) {
    const row = Buffer.alloc(1 + width * 4);
    row[0] = 0; // Filter type: None

    for (let x = 0; x < width; x++) {
      const idx = 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Default background: Emerald green (#064e3b)
      let r = 6, g = 78, b = 59, a = 255;

      if (!isMaskable) {
        // Rounded corner container for normal app icon
        const cornerRadius = width * 0.22;
        const qx = Math.abs(x - cx) - (cx - cornerRadius);
        const qy = Math.abs(y - cy) - (cy - cornerRadius);
        if (qx > 0 && qy > 0) {
          const cornerDist = Math.sqrt(qx * qx + qy * qy);
          if (cornerDist > cornerRadius) {
            a = 0; // Transparent outside rounded corner
          }
        }
      }

      if (a > 0) {
        // Decorative ring
        if (Math.abs(dist - radius * 0.95) < width * 0.02) {
          r = 16; g = 185; b = 129; a = 180; // #10b981
        }
        
        // Golden sun in upper quadrant
        const sunDx = x - cx;
        const sunDy = y - (cy - radius * 0.35);
        const sunDist = Math.sqrt(sunDx * sunDx + sunDy * sunDy);
        if (sunDist < radius * 0.24) {
          r = 245; g = 158; b = 11; // #f59e0b
        }

        // Mountain silhouette
        const mtnY = cy + radius * 0.45 - Math.abs(dx) * 0.6;
        if (y > mtnY && y < cy + radius * 0.5) {
          r = 4; g = 120; b = 87; // #047857
        }

        // Central Sprout Left Leaf
        const leaf1X = cx - radius * 0.32;
        const leaf1Y = cy + radius * 0.05;
        const leaf1Dist = Math.hypot(x - leaf1X, y - leaf1Y);
        if (leaf1Dist < radius * 0.35 && x <= cx && y < cy + radius * 0.4) {
          r = 52; g = 211; b = 153; // #34d399
        }

        // Central Sprout Right Leaf
        const leaf2X = cx + radius * 0.32;
        const leaf2Y = cy - radius * 0.05;
        const leaf2Dist = Math.hypot(x - leaf2X, y - leaf2Y);
        if (leaf2Dist < radius * 0.38 && x >= cx && y < cy + radius * 0.4) {
          r = 16; g = 185; b = 129; // #10b981
        }

        // Stem
        if (Math.abs(x - cx) < width * 0.02 && y > cy - radius * 0.1 && y < cy + radius * 0.45) {
          r = 240; g = 253; b = 244; // #f0fdf4
        }

        // Base furrow
        if (Math.abs(y - (cy + radius * 0.52)) < width * 0.025 && Math.abs(dx) < radius * 0.75) {
          r = 217; g = 119; b = 6; // #d97706
        }
      }

      row[idx] = r;
      row[idx + 1] = g;
      row[idx + 2] = b;
      row[idx + 3] = a;
    }
    rows.push(row);
  }

  const rawData = Buffer.concat(rows);
  const compressedData = zlib.deflateSync(rawData);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8-bit depth
  ihdrData[9] = 6; // Color type: RGBA
  ihdrData[10] = 0; // Compression
  ihdrData[11] = 0; // Filter
  ihdrData[12] = 0; // Interlace

  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdrChunk = createChunk('IHDR', ihdrData);
  const idatChunk = createChunk('IDAT', compressedData);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), createPNG(192, 192, false));
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), createPNG(512, 512, false));
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), createPNG(512, 512, true));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), createPNG(180, 180, false));

console.log('Successfully generated all PWA icons: 192x192, 512x512, maskable 512x512, and apple-touch-icon.png');
