import letterCounter  from '../src/js/scripts2.js';
// import {createStringArray} from '../src/js/scripts.js'

describe('letterCounter', () =>{
  beforeEach(function() {
    
  });
  test('Should correctly match stringArray index values with keyArray index values', () => {
  let returnedArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  const keyArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let stringArray = ["i", " ", "d", "o", "n", "'", "t", " ", "k", "n", "o", "w", " ", "w", "h", "y", " ", "i", " ", "d", "e", "c", "i", "d", "e", "d", " ", "t", "o", " ", "s", "t", "a", "r", "t", " ", "c", "o", "d", "i", "n", "g", "?"]
    expect(letterCounter(stringArray[0])).toEqual(keyArray[8]);
    });
});

// test: ("increase the corresponding returnedArray index value by one for each matching letter")


