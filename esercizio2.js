const form = document.querySelector("form");
const ul = document.querySelector("ul");
const pets = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const namePet = document.getElementById("petName").value;
  const nameOwner = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;
  addNewPet(namePet, nameOwner, species, breed);
  form.reset();
});

function addNewPet(pet, owner, species, breed) {
  const newPet = new Pet(pet, owner, species, breed);
  console.log(newPet);
}
