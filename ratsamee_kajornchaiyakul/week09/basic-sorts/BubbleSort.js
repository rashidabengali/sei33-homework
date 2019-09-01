function bubbleSort(array) {
    // Make some sort of loop that keeps happening if there were any swaps
    // that happened this turn
    for (let i = 0; i < array.length; i++) {
        // reset swapHappened to false each time so we can detect if a swap
        // happened in this specific iteration.
        let swapHappened = false;
        // Make another loop (inside the first one) to go through one 
        // round of swapping from the start of the list to the end
        for (let j = 0; j < array.length; j++) {
            if (j+1 >= array.length){
                break;
            }
            const element = array[j];
            const nextElement = array[j+1];
            // Inside inner loop:
            // compare each pair of elements near each other
            if (element > nextElement){
                // swap them if the bigger one was at a lower index.
                const tempElement = element;
                array[j] = nextElement;
                array[j+1] = tempElement;
                // Make sure to keep track of whether a swap happened!
                swapHappened = true;
            }
            console.log(`round ${i}, ${j}: ${array}`);
        }

        if (!swapHappened){
            break;
        }
    }
    
    // After both loops have exited, remember to return the array
    return array;
}

module.exports = bubbleSort;