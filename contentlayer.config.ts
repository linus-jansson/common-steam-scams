// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Scam = defineDocumentType(() => ({
  name: 'Scam',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    reference: { type: 'string', required: false },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/Scams/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'scams', documentTypes: [Scam] })