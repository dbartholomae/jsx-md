import fs from 'fs'

const { writeFile } = fs.promises

export async function createFile(filename: string, content: any): Promise<void> {
  await writeFile(filename, 'test')
}
