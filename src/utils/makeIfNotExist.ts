import { promises as fsPromises, existsSync } from 'fs';

export default async function makeIfNotExist (folder: string) : Promise<void> {
  if (!existsSync(folder)) {
    await fsPromises.mkdir(folder);
  }
}