import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateOGImage() {
const inputPath = path.join(__dirname, '../src/assets/hero-bg.png');
const outputPath = path.join(__dirname, '../public/og-image.png');

  await sharp(inputPath)
    .resize(1200, 630, {
      fit: 'cover',
      position: 'center'
    })
    .png()
    .toFile(outputPath);

  console.log('OG image generated at public/og-image.png');
}

generateOGImage().catch(console.error);
