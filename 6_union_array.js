// find the union of the array

function getUnion(arr1, arr2){
    const distinctSet = new Set();
    arr1.forEach(ele => {
        distinctSet.add(ele)
    });
    arr2.forEach((ele) => {
        distinctSet.add(ele)
    });
    return [...distinctSet]
}



const arr1 = [7, 1, 5, 2, 3, 6]
const arr2 = [3, 8, 6, 20, 7]

console.log(getUnion(arr1, arr2))