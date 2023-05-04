migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9mc5j1z5l2oo2uy")

  // remove
  collection.schema.removeField("vzo3q2ft")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gl2lob7r",
    "name": "prix",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9mc5j1z5l2oo2uy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vzo3q2ft",
    "name": "prix",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("gl2lob7r")

  return dao.saveCollection(collection)
})
