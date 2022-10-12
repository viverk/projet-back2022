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
    assert.strictEqual(resultat, 10);
  });
});

//console.log(somme(1, 2));
//test avec la fonction somme(param1,param2)
describe("le programme devrait", () => {
  it(`afficher la somme de deux chiffre`, async () => {
    assert.strictEqual(somme(1, 2), 3);
  });
});

//====================================EXO4=====================================================================

//====================================EXO5=====================================================================

//====================================EXO6=====================================================================

//====================================EXO7=====================================================================
