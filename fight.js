class Personnage {
    constructor(pseudo, classe, sante, attaque, niveau = 1){
        this.pseudo  = pseudo;
        this.classe  = classe[magicien, guerrier];
        this.sante   = sante;
        this.attaque = attaque;
        this.niveau  = niveau;
    }

    get informations() {
        return this.pseudo + this.classe + " a " + this.sante + " points de vie et est au niveau " + this.niveau + "."; 
    }

    evoluer() {
        this.niveau++ + pseudo + niveau + " !";
    }
    verifierSante() {
        if (sante <= 0) {
            sante = 0 (pseudo + " a perdu !")
        }
    }
}

class Magicien extends Personnage {
    constructor(pseudo, classe, sante, attaque) {
        super(pseudo, classe[0], sante, attaque)
    }


    attaquer(guerrier) {
        guerrier.sante -= this.attaque = this.sante;
        console.log(this.pseudo + " attaque" + [guerrier.pseudo] + " en lançant un sort " + (this.attaque + "dégâts") + ".");

        this.evoluer();
        this.verifierSante();
    }

    coupSpecial(guerrier){
    guerrier.sante -= this.attaque *5;
    console.log(this.pseudo + " attaque avec son coup spécial : Puissance des arcanes" + [guerrier.pseudo] (this.attaque * 5), "dégâts");

    this.evoluer();
    this.verifierSante();
   }
 }

class Guerrier extends Personnage {
    constructor(pseudo, classe, sante, attaque) {
        super(pseudo, classe[1], sante, attaque)
    }

    attaquer(magicien) {
        console.log (magicien.sante -= this.attaque);
    }
    coupSpecial(magicien){
    console.log(magicien.sante -= this.attaque *5);
  }
}

var magicien = new Personnage(this.pseudo, "magicien", 170, 90);
var guerrier = new Personnage(this.pseudo, "guerrier", 350, 50);

var gandalf  = new Magicien('Gandalf');
var conan    = new Guerrier('Conan');

console.log(conan.informations);
console.log(gandalf.informations);
gandalf.attaquer(conan);
console.log(conan.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(conan);