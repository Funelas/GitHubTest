// let completedlaps = 0

function incrementLaps(){
    const current_value = Number(document.getElementById("lap"));

    current_value = current_value + 1;
    document.getElementById("lap").innerHTML = current_value;
    document.getElementById("incrementlap").addEventListener("click", incrementLaps)
}
// incrementLaps();
// incrementLaps();
// incrementLaps();

// console.log(completedlaps)