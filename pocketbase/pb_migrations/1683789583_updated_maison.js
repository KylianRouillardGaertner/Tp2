migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9mc5j1z5l2oo2uy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pvxtivuo",
    "name": "agent",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "z1bwxlag1gq0t4e",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9mc5j1z5l2oo2uy")

  // remove
  collection.schema.removeField("pvxtivuo")

  return dao.saveCollection(collection)
})
