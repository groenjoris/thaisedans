import fs from 'fs';
import path from 'path';

export function getFilesFromDir(
  publicPath: string,
  extensions: string[] = ['.jpg', '.jpeg', '.png', '.webp']
): string[] {
  const dir = path.join(process.cwd(), 'public', publicPath);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => {
        const ext = path.extname(f).toLowerCase();
        return extensions.includes(ext);
      })
      .sort()
      .map((f) => `/${publicPath}/${f}`);
  } catch {
    return [];
  }
}

export function getGalleryPhotos(): string[] {
  return getFilesFromDir('images/gallery/new');
}

export function getLegacyPhotos(): {
  thaiDance: string[];
  thaisedans: string[];
} {
  const all = getFilesFromDir('images/gallery/legacy');
  return {
    thaiDance: all.filter((f) => f.includes('ThaiDance')),
    thaisedans: all.filter((f) => f.includes('Thaisedans')),
  };
}