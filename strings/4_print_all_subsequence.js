// notes num - 6
function printAllSubsequnce(input, output){
    if(input.length === 0){
        console.log(output);
        return;
    }

    printAllSubsequnce(input.substring(1), output+input[0])
    printAllSubsequnce(input.substring(1), output)

}


var str = 'abc';
console.log(printAllSubsequnce(str, ''))