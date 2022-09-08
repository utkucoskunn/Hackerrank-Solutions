/*
There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads
and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the 
number of the current cloud plus 1 or 2. The player must avoid the thunderheads. Determine the minimum number of
jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.
*/

Solution:

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
    let result=0;
    // Write your code here
    for(let i=0; i<c.length; i++){
        
        if(c[i]==0 && c[i+1]==0 && c[i+2]==0 ){
            console.log("step 1")
            result=result+1;
             i=i+1;
        }
        else if(c[i]==0 && c[i+1]==0){
            console.log("step 2")
            result=result+1;
        }
        else if(c[i]==0 && c[i+1]==1){
            console.log("step 3")
            result=result+1;
             i=i+1;
           
        }
        
    }
return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const c = readLine().replace(/\s+$/g, '').split(' ').map(cTemp => parseInt(cTemp, 10));

    const result = jumpingOnClouds(c);

    ws.write(result + '\n');

    ws.end();
}
