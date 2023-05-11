migrate((db) => {
  const collection = new Collection({
    "id": "z1bwxlag1gq0t4e",
    "created": "2023-05-11 07:17:12.628Z",
    "updated": "2023-05-11 07:17:12.628Z",
    "name": "agent",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zndw5gir",
        "name": "nom",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gpnszvcx",
        "name": "prenom",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xjza4dv3",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("z1bwxlag1gq0t4e");

  return dao.deleteCollection(collection);
})
