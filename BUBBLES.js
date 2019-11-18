
const bubbles =arr =>{ //Provides the alg of the bubble sort
    let swapped;
    do{
        swapped=false;
        for(let i=0; i<arr.length; i++){
            if (arr[i]> arr[i + 1]){//for if loop scans the array and sorts the numbers by checking each
                let tmp=arr[i]; //each one against the next one
                arr[i]=arr[i+1];// after it scans the list enough times and swaps the numbers
                arr[i+1]=tmp; // it ends the loop when each number is equal or smaller than the one to its left
                swapped=true;
            }
        }
    }while (swapped);
    return arr;
};

console.log(bubbles([3,5,10,12,4,3,100,6,9,4,1]))