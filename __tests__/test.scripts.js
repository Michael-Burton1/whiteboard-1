import letterCounter  from '../src/js/scripts2.js';
// import {createStringArray} from '../src/js/scripts.js'

describe('letterCounter', () =>{
  let returnedArray = [];
  let keyArray = [];
  let stringArray = [];
  beforeEach(() => {
    returnedArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    keyArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    stringArray = ["i", " ", "d", "o", "n", "'", "t", " ", "k", "n", "o", "w", " ", "w", "h", "y", " ", "i", " ", "d", "e", "c", "i", "d", "e", "d", " ", "t", "o", " ", "s", "t", "a", "r", "t", " ", "c", "o", "d", "i", "n", "g", "?"];
  });
  test('Should correctly identify if stringArray contains letter from keyArray', () => {
    expect(letterCounter(stringArray, keyArray, returnedArray)).toEqual(true);
  });
  test("increase the corresponding returnedArray index value by one for letter a in stringArray", () =>{
  expect(returnedArray[0]).toEqual(1);
  });
});



