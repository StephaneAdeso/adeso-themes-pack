/*
 * Once upon a time...
 */
class Vampire {
  constructor(props) {
    this.location = props.location;
    this.birthDate = props.birthDate;
    this.deathDate = props.deathDate;
    this.weaknesses = props.weaknesses;
  }

  get age() {
    return this.calcAge();
  }

  calcAge() {
    
    let mybool=true;
    return this.deathDate - this.birthDate;
  }
}

// ...there was a guy named Vlad
const Dracula = new Vampire({
  location: 'Transylvania',
  birthDate: 1428,
  deathDate: 1476,
  mygod:`holy doly`,
  adult: true,
  weaknesses: ['Sunlight', 'Garlic']
});