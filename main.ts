import { copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

function main() {
    try {
        const __dirname = dirname(fileURLToPath(import.meta.url));
        const inputPath = resolve(__dirname, 'entry.png');
        const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
        
        if (!existsSync(inputPath)) {
            console.error(`Error: input image not found at ${inputPath}`);
            process.exit(1);
        }

        mkdirSync(outputDir, { recursive: true });
        const outputPath = join(outputDir, 'entry.png');
        
        copyFileSync(inputPath, outputPath);
        console.log(`[news-image-20261124] Successfully copied entry.png to ${outputPath}`);
    } catch (err) {
        console.error('Failed to copy entry.png:', err);
        process.exit(1);
    }
}

main();
