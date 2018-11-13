// Every pokemon has a name and a type. Certain types are effective against others, e.g. water is effective against fire.
// You have a Pokemon class with a method called isEffectiveAgainst().
// Ash has a few pokemon. Help Ash decide which Pokemon to use against the wild one. 

export class Pokemon {
  name: string;
  type: string;
  effectiveAgainst: string;

  constructor(name: string, type: string, effectiveAgainst: string) {
      this.name = name;
      this.type = type;
      this.effectiveAgainst = effectiveAgainst;
  }

  isEffectiveAgainst(pokemon: Pokemon): boolean {
      return this.effectiveAgainst === pokemon.type;
  }
}

