//=================================EXO3===============================================================

var assert = require("assert");
/* describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
}); */

// La fonction somme() retourne la somme des nombres passés en paramètre.
// Tout paramètre manquant aura 0 comme valeur par défaut.
// Si un des paramètre n'est pas de type `number`, la fonction lèvera une
// exception avec le message d'erreur "paramètre invalide".
function somme(nombre1 = 0, nombre2 = 0) {
  // (implémentation de la fonction: non nécessaire pour cet exercice)
  return (z = nombre1 + nombre2);
}

describe("le programme devrait", function () {
  it("afficher la somme de deux chiffre sans la fonction somme()", function () {
    resultat = 5 + 5;
    assert.equal(resultat, 10);
  });
});

//console.log(somme(1, 2));
//test avec la fonction somme(param1,param2)
describe("le programme devrait", () => {
  it(`afficher la somme de deux chiffre`, async () => {
    assert.equal(somme(1, 2), 3);
  });
});

describe("le programme devrait", () => {
  it(`afficher la somme de deux chiffre`, async () => {
    assert.equal(somme(1, 2), 10);
  });
});

//====================================EXO4=====================================================================
describe("le programme devrait", () => {
  it(`afficher nom`, async () => {
    var MongoClient = require("mongodb").MongoClient;
    MongoClient.connect(
      "mongodb+srv://mangeonsensemble:projet_pim_estiam@cluster0.svlza.mongodb.net/test",

      (err, client) => {
        // Client returned

        var db = client.db("test");
      }
    );

    MongoClient.connect(
      "mongodb+srv://mangeonsensemble:projet_pim_estiam@cluster0.svlza.mongodb.net/test",

      async function (err, client) {
        if (err) throw err;

        var db = client.db("test");

        var db = client.db("test");

        var users = db.collection("test");

        const count = await users.countDocuments({});

        /* console.log(`Nombre de documents : ${count}`); */

        db.collection("test")

          .find({})

          .toArray(function (err, result) {
            if (err) throw err;

            /* console.log(result); */
            console.log(result[0].name);
            assert.equal(result[0].name, "Maxime");

            client.close();
          });
      }
    );
  });
});

//====================================EXO6=====================================================================
