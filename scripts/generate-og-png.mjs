/**
 * Rasterizes public/og.svg to public/og.png (1200×630) for Open Graph / Twitter.
 * Run: npm run generate:og
 */
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const svgPath = join(root, 'public', 'og.svg')
const outPath = join(root, 'public', 'og.png')

const svg = readFileSync(svgPath)

await sharp(svg, { density: 240 })
  .resize(1200, 630)
  .png({ compressionLevel: 9 })
  .toFile(outPath)

console.log('Wrote', outPath)
