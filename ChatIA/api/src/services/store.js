(async () => {
  const fs = require('fs/promises')
  const { chromaclient } = require('chromadb')

  const client = new ChromaClient()

  const collection = await client.getOrCreateCollection({
    name: "my-collection"
  })

  const jsonfile = await fs.readFile('./precios_uco_2026.json', 'utf8')
  const data = JSON.parse(jsonFile)

  data.reduce(access, element => {

  },

  await collection.add({
    ids: ["id1", "id2", "id3"],
    embeddings: [[1.1, 2.3, 3.2], [4.5, 6.9, 4.4], [1.1, 2.3, 3.2]],
    documents: ["doc1", "doc2", "doc3"],
    metadatas: [{"chapter": 3, "verse": 16}, {"chapter": 3, "verse": 5}, {"chapter": 29, "verse": 11}],
})
})()