import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateFavicon() {
  const inputPath = path.join(__dirname, '../public/favicon.svg');
  const sizes = [16, 32, 48, 64, 128, 192, 512];
  
  for (const size of sizes) {
    await sharp(inputPath)
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, `../public/favicon-${size}.png`));
  }

  await sharp(inputPath)
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, '../public/favicon.png'));

  console.log('Favicons generated');
}

generateFavicon().catch(console.error);
