const freeLancers = ["Matt", "Andy", "Shannon", "Karen"];
const occupation = ["Writer","Teacher","Programmer","Driver", "Janitor"];
const price = [30,50,70,90,110,130,150];
const names=[];
const occupations=[];
const startPrice= [];
const maxEntries = 10;

// `setInterval` will call `addOccupation` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addNameIntervalId = setInterval(addEntry, 1000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the FreeLancer Name
  const lancerName = document.querySelector("#nameList");
  const nameElements = names.map((entry) => {
    const element = document.createElement("li");
    element.classList.add(entry);
    return element;
  });
  lancerName.replaceChildren(...nameElements);

  // TODO: Render the Freelancer's Occupation
  const lancerOcc = document.querySelector("#OccList");
  const occupationElements = occupations.map((entry) => {
    const element = document.createElement("li");
    element.classList.add(entry);
    return element;
  });
  lancerOcc.replaceChildren(...occupationElements);

  // TODO: Render the Freelancer's Starting Price

  const lancerPrice = document.querySelector("#PriceList");
  const priceElements = startPrice.map((entry) => {
    const element = document.createElement("li");
    element.classList.add(entry);
    return element;
  });
  lancerPrice.replaceChildren(...priceElements);
 
}

/**
 * Add a random name to the `names` array
 */
function addEntry() {

    //Randomize Name Entry
    const name = freeLancers[Math.floor(Math.random() * freeLancers.length)];
    
    names.push(name);

    //Randomize Occupation Entry

    const job = occupation[Math.floor(Math.random() * occupation.length)];

    occupations.push(job);

    //Randomize Price Entry

    const money = price[Math.floor(Math.random() * price.length)];

    startPrice.push(money);
  
    render();
  
    // TODO: Stop adding entries if we've reached the maximum number of entries
    if (names.length >= maxEntries) {
      clearInterval(addNameIntervalId);
    }
  }