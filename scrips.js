const string = "I don't know why I decided to start coding?"


function createStringArray() {
  stringArray = []
  let lowerCaseString = string.toLowerCase();
  stringArray.push(lowerCaseString.split(''));
  return stringArray;
};

let returnedArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const loopArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const keyArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

stringArray = ["i", " ", "d", "o", "n", "'", "t", " ", "k", "n", "o", "w", " ", "w", "h", "y", " ", "i", " ", "d", "e", "c", "i", "d", "e", "d", " ", "t", "o", " ", "s", "t", "a", "r", "t", " ", "c", "o", "d", "i", "n", "g", "?"]

for(i = 0; i < loopArray.length; i ++){
  for(i = 0; i < stringArray.length; i ++){
    switch (stringArray[i]) {
      case (keyArray[(loopArray[i])]):
        (returnedArray[loopArray[i]] += 1);
        break;
    default:
    }
  }
};


//   switch (stringArray[i]) {
//     case (keyArray[0]):
//       (returnedArray[0] += 1);
//       break;
//     case (keyArray[1]):
//       (returnedArray[1] +=1);
//       break;
//     case (keyArray[2]):
//       (returnedArray[2].push +=1);
//       break;
//     default:


//   }
// };





  /*case (keyArray[0]):
    (returnArray[0] += 1);
    break;
  case (keyArray[0]):
    (returnArray[0] += 1);
    break;
  case (keyArray[0]):
    (returnArray[0] += 1);
    break;
  case (keyArray[0]):
    (returnArray[0] += 1);
    break;
  case (keyArray[0]):
    (returnArray[0] += 1);
    break;
  case (keyArray[0]):
    (returnArray[0] += 1);
    break;
  case (keyArray[0]):
    (returnArray[0] += 1);
    break;
  case (keyArray[0]):
    (returnArray[0] += 1);
    break;
  case (keyArray[0]):
    (returnArray[0] += 1);
    break;
  case (keyArray[0]):
    (returnArray[0] += 1);
    break;
  case (keyArray[0]):
    (returnArray[0] += 1);
    break;
  case (keyArray[0]):
    (returnArray[0] += 1);
    break;
  case (keyArray[0]):
    (returnArray[0] += 1);
    break;
  case (keyArray[0]):
    (returnArray[0] += 1);
  break;case (keyArray[0]):
    (returnArray[0] += 1);
  break;case (keyArray[0]):
    (returnArray[0] += 1);
  break;case (keyArray[0]):
    (returnArray[0] += 1);
  break;case (keyArray[0]):
    (returnArray[0] += 1);
  break;case (keyArray[0]):
    (returnArray[0] += 1);
  break;case (keyArray[0]):
    (returnArray[0] += 1);
  break;case (keyArray[0]):
    (returnArray[0] += 1);
    break;case (keyArray[0]):
    (returnArray[0] += 1);
    break;case (keyArray[0]):
    (returnArray[0] += 1);
    break;case (keyArray[0]):
    (returnArray[0] += 1);
    break;case (keyArray[0]):
    (returnArray[0] += 1);
    break;case (keyArray[0]):
    (returnArray[0] += 1);
    break;case (keyArray[0]):
    (returnArray[0] += 1);
    break;