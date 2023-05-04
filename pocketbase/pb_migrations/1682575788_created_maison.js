migrate((db) => {
  const collection = new Collection({
    "id": "9mc5j1z5l2oo2uy",
    "created": "2023-04-27 06:09:48.536Z",
    "updated": "2023-04-27 06:09:48.536Z",
    "name": "maison",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "uprllnqb",
        "name": "images",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 5,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "kfezy0ce",
        "name": "nb_chambre",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "cmpphkka",
        "name": "nb_salle_de_bain",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "4nkbwzhs",
        "name": "adress",
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
        "id": "fvkptiqp",
        "name": "superficie",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("9mc5j1z5l2oo2uy");

  return dao.deleteCollection(collection);
})
