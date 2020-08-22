import { promises } from 'fs'
import mockFs from 'mock-fs'
import { createFile } from './create-file'

const { readFile } = promises

describe('createFile', () => {
  beforeEach(() => {
    mockFs({})
  })

  afterEach(() => {
    mockFs.restore()
  })

  it('creates a file with the given name', async () => {
    const filename = 'test-file.md'
    await createFile(filename, null)
    const fileContent = await readFile(filename, { encoding: 'utf8' })
    expect(fileContent).toEqual('test')
  })
})
