

function filterBy(array, typeOfData){

    let finale= array.filter(infoData=>{


        return typeof infoData!==typeOfData;
    })

    return finale;

}

console.log(filterBy([1989, null, 0, undefined, "Cyberpunk", "", "2077"], 'Number'))