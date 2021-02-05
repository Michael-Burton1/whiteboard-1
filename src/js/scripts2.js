
export default function letterCounter(stringArray, keyArray, returnedArray) {
  for(let i = 0; i < stringArray.length; i ++){
    if (stringArray[i] === keyArray[0]) {
    (returnedArray[0] +=1)
    }
    else if (stringArray[i] === keyArray[1]) {
        (returnedArray[1] +=1)
    }
    else if (stringArray[i] === keyArray[2]) {
        (returnedArray[2] +=1)
    }   
    else if (stringArray[i] === keyArray[3]) {
        (returnedArray[3] +=1);
    }
    else {
    }
  };
  return returnedArray;
};
