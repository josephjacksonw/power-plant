// import changeState from './../src/age.js';
const {changeState} = require('../src/age.js');

describe('changeState', () => {
  const storeState = () => {
    let currentState = {};
    return (stateChangeFunction) => {
      const newState = stateChangeFunction(currentState);
      currentState = {...newState};
      return newState;
    }
  }
  const stateControl = storeState();

    test('should do something', () => {
      let plant = { soil: 0, light: 0, water: 0 };
      const feed = changeState("soil")(5);
      const fedPlant = stateControl(feed);
      expect(fedPlant.soil).toEqual(5);
    })


});