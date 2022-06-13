// code your solution here
const record = [
    {year: "2020", result: "W"},
    {year: "2019", result: "L"},
    {year: "2021", result: "N/A"},
    {year: "2018", result: "W"}
]
function superbowlWin(record){
    let win = record.find(obj => obj.result === "W")

    if(win){
        return win.year
    }
}