// This function stores our state.
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();
let counter = 0;

// This is a function factory. 
// We can easily create more specific functions that 
// alter a plant's soil, water, and light to varying degrees.
const changeState = (prop) => {
return (value) => {
  return (state) => ({
    ...state,
    [prop] : (state[prop] || 0) + value
  })
}
}

function newPlant(e) { // this function will run after a user hits a button
  // it will create a new plant that will have access to the feed and hydrate stuff, as well as the ability to have new inputs (see below)
  // we will also need to actually create the buttons to feed and hydrate them
  e.preventDefault();
  const plantName = document.querySelector("#name").value;
  const temp = storeState();
  counter ++;
  //const plantTrait = document.querySelector('trait').value;
  let h = document.createElement("h2");
  h.innerText = plantName;
  let b1 = document.createElement("button");
  b1.innerText = "Add soil";
  b1.setAttribute("id", "feed");
  let b2 = document.createElement("button");
  b2.innerText = "Add water";
  b2.setAttribute("id", "hydrate");
  let hs = document.createElement("h3");
  hs.innerText = "0";
  hs.setAttribute("id", "soil-value");
  hs.setAttribute("id", counter);
  let hw = document.createElement("h3");
  hw.innerText = "0";
  hw.setAttribute("id", "water-value");


  document.getElementById("plants").appendChild(h);
  document.getElementById("plants").appendChild(hs);
  document.getElementById("plants").appendChild(hw);
  document.getElementById("plants").appendChild(b1);
  document.getElementById("plants").appendChild(b2);

  document.getElementById('feed').onclick = function() {
    const newState = temp(blueFood);
    document.getElementById(counter).innerText = `Soil: ${newState.soil}`;
  };
  
  document.getElementById('hydrate').onclick = function() {
    const newState = temp(superWater);
    document.getElementById('water-value').innerText = `Water: ${newState.water}`;
  };
  
}


function newStat() { // this function, based on a user text input, will add a new variable to a specific plant to be tracked
  // we will also need something for editing this value, even if its just a button that makes a number go up

}



// We create four functions using our function factory. 
// We could easily create many more.
const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

window.onload = function() {
  document.querySelector("form#createPlant").addEventListener("submit", newPlant);

// This function has side effects because we are manipulating the DOM.
// Manipulating the DOM will always be a side effect. 
// Note that we only use one of our functions to alter soil. 
// You can easily add more.


// This function doesn't actually do anything useful in this application 
// — it just demonstrates how we can "look" at the current state 
// (which the DOM is holding anyway). 
// However, students often do need the ability to see the current state 
// without changing it so it's included here for reference.
document.getElementById('show-state').onclick = function() {
  // We just need to call stateControl() without arguments 
  // to see our current state.
  const currentState = stateControl();
  document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
};
};


// button on html that starts everything (creates a plant)
// plants have individual buttons to add water or soil or anything else we wanna add
// add functionality so that plants can have different abilities
// each plant has an input box for the user to create more things to track