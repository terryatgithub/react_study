function endangeredSpecies(continent, species) {
  // Your code goes here
  let parent = `[data-continent="${continent}"]`;
  parent = document.querySelector(parent);
  let condition = `[data-species="${species}"]`;
  let child = parent.querySelector(condition);
  return child.innerHTML;
}

// Example case
document.body.innerHTML = `<div>
    <ul data-continent="North America">
      <li data-species="California condor">Critically Endangered</li>
      <li data-species="American bison">Near Threatened</li>
    </ul>
    <ul data-continent="Europe">
      <li data-species="Cave bear">Extinct</li>
    </ul>
  </div>`;

console.log(endangeredSpecies("North America", "American bison")); // should print 'Near Threatened'
