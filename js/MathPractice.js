function mathSetup() {
    createIntList();
    retRandomInt();
}

function createIntList() {
    //creates a random list of 2 large (25, 50, 75, 100) numbers and 4 small (1 - 9)
    var intArr = new Array(6);;
    for (var i = 0; i < 4; i++) {
        intArr[i] = getRandomSmallNum();
    }
    intArr[4] = getRandomLargeNum();
    intArr[5] = getRandomLargeNum();

    console.log(intArr.toString())
    document.getElementById("IntList").innerHTML = intArr.toString();
    
}

function retRandomInt() {
    // returns a random int between 101-999
    document.getElementById("RandNumber").innerHTML = Math.floor((Math.random() * 899) + 101);
}

function gradeAnswer() {
    // compares user input against the randomInt from function above
    // scoring criteria: exact -> 10 pts, +/- 5 -> 7 pts
}

function getRandomLargeNum() {
    return Math.floor((Math.random() * 4 ) + 1) * 25;
}

function getRandomSmallNum() {
    return Math.floor((Math.random() * 10) + 1);
}