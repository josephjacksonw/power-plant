// import changeState from './../src/age.js';
const {changeState} = require('../src/age.js');

describe('changeState', () => {
  const storeState = () => {
    let currentState = {};
    return (stateChangeFunction = state => state) => {
      const newState = stateChangeFunction(currentState);
      currentState = {...newState};
      return newState;
    }
  }
  // const stateControl = storeState();
  // const newPlant = storeState();

    test('should do something', () => {
      let plant = { soil: 8 };
      const feed = changeState("soil")(5);
      
      const thirdPlant = storeState(plant);
      const final = thirdPlant(feed);
      // const goodfeed = changeState("soil")(99990);
      // const fedPlant = stateControl(feed);
      // const fedPlantAgain = stateControl(goodfeed);
      // const fedPlantAgain1 = newPlant(goodfeed);
      // const fedPlantAgain2 = newPlant(goodfeed);
      
      expect(final.soil).toEqual(5);
      // expect(fedPlant.soil).toEqual(5);
      // expect(fedPlantAgain2.soil).toEqual(199980);
      // expect(fedPlantAgain.soil).toEqual(99995);
    })


});