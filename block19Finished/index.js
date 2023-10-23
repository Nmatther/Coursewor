const freeLancers = [{ name: "Dr. Slice", price: 25, occupation: "gardener" }, { name: "Dr. Pressure", price: 51, occupation: "programmer" }]
const occupation = ["Writer","Teacher","Programmer","Driver", "Janitor"];
const price = [30,50,70,90,110,130,150];
const names=["Matt", "Andy", "Kevin","Karen"];
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
  const lancerName = document.querySelector("#tentries");
  const nameElements = freeLancers.map((freelancer) => {
    const element = document.createElement("tr");
    const tdname = document.createElement("td");
    tdname.innerText = freelancer.name;
    const tdoccname = document.createElement("td");
    tdoccname.innerText = freelancer.occupation;
    const tdpay = document.createElement("td");
    tdpay.innerText = freelancer.price
   // element.classList.add(freelancer.name);

    element.appendChild(tdname);
    element.appendChild(tdoccname);
    element.appendChild(tdpay);

    return element;
  });
  lancerName.replaceChildren(...nameElements);


  // TODO: Render the Freelancer's Occupation
  

  // TODO: Render the Freelancer's Starting Price

  console.log(freeLancers);
 
}

/**
 * Add a random name to the `names` array
 */
function addEntry() {

    //Randomize Name Entry
    const name = names[Math.floor(Math.random() * names.length)];
    
    

    //Randomize Occupation Entry

    const job = occupation[Math.floor(Math.random() * occupation.length)];

    

    //Randomize Price Entry

    const money = price[Math.floor(Math.random() * price.length)];

    freeLancers.push({name, occupation: job, price: money});
  
    render();
  
    // TODO: Stop adding entries if we've reached the maximum number of entries
    if (freeLancers.length >= maxEntries) {
      clearInterval(addNameIntervalId);
    }
  }