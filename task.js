// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  let counter;
  min = 0;
  max = 0;
  sum = 0;
  
  min = Math.min.apply(null, arr);
  max = Math.max.apply(null, arr);
  for (counter = 0; counter < arr.length; counter++) {   
    sum += arr[counter];
  }
  avg = (sum / counter).toFixed(2);
  return { min: min, max: max, avg: parseFloat(avg) };
}

// Задание 2
function worker(arr) {
  let sum, counter;
  sum = 0;
  
  for (counter = 0; counter < arr.length; counter++) {   
    sum += arr[counter];
  }  
  return sum;
}

function makeWork(arrOfArr, func) {
  let max, numLines, temp;  
  numLines = arrOfArr.length;  
  max = 0;
  temp = 0;
  
  for(let countL = 0; countL < numLines; countL++){	  
	  temp = func(arrOfArr[countL]);
	  if(temp > max) max = temp;
  } 
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max; 
  
  min = Math.min.apply(null, arr);
  max = Math.max.apply(null, arr);
  return (Math.abs(max - min));
}


















