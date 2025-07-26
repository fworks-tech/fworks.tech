import fs from 'fs';
import path from 'path';

const pagesDir = path.resolve(__dirname, '../src/pages');
const target = 'getI18nProps';

function walk(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);

    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filepath));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(filepath);
    }
  });

  return results;
}

function checkFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');

  const usesGetStaticProps = content.includes('getStaticProps');
  const usesI18n = content.includes(target);

  if (usesGetStaticProps && !usesI18n) {
    console.warn(`⚠️  ${filePath} has getStaticProps but does NOT call ${target}().`);
  } else if (usesI18n) {
    const match = content.match(/getI18nProps\s*\(\s*locale\s*,\s*\[(.*?)\]/);
    if (!match) {
      console.warn(
        `⚠️  ${filePath} uses getI18nProps(locale), but no namespace passed explicitly.`,
      );
    }
  }
}

const files = walk(pagesDir);
console.log(`🔍 Checking ${files.length} page files for i18n setup...\n`);

files.forEach(checkFile);

console.log('\n✅ Done!');
