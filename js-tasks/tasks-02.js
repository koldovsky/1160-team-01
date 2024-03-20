//Convert a string to an array//

function stringToArray(string){
  return string.split(" ")
}

//DNA to RNA Conversion//

function DNAtoRNA(dna) {
  return dna.replaceAll("T", 'U');
}

//Find Maximum and Minimum Values of a List//

var min = function(list) {
  return Math.min(...list);
}

var max = function(list) {
  return Math.max(...list);
}

//Smallest value of an array//

function min(arr, toReturn) {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    if (toReturn === 'index') {
        return arr.indexOf(sortedArr[0]);
    } else {
        return sortedArr[0];
    }
}
