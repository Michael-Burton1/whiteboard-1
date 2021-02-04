import expectationResultFactory from 'jest-jasmine2/build/expectationResultFactory';
import {letterCounter}  from '../src/js/scripts.js'
import {createStringArray} from '../src/js/scripts.js'

describe: ("letterCounter", () =>{
const reusableString;
let returnedArray;
const keyArray;
beforeEach(() => {
string = "I don't know why I decided to start coding?"
returnedArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
keyArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
});
test('Should correctly match stringArray index values with keyArray index values', () => {
  expect(stringArray[0]).toEqual(keyArray[8]);
  });
});

// test: ("increase the corresponding returnedArray index value by one for each matching letter")


