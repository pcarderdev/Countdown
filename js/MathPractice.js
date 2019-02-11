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

    document.getElementById("IntList").innerHTML = intArr.toString();
    
}

function retRandomInt() {
    // returns a random int between 101-999
    document.getElementById("RandNumber").innerHTML = Math.floor((Math.random() * 899) + 101);
}

function gradeAnswer() {
    // compares user input against the randomInt from function above
    // scoring criteria: exact -> 10 pts, +/- 5 -> 7 pts

    var userWork = eval(document.getElementById("userInput").value);
    var answer = document.getElementById("RandNumber").innerHTML;

    if (userWork == answer) {
        document.getElementById("Results").innerHTML = "CORRECT";
    } else {
        document.getElementById("Results").innerHTML = "INCORRECT";
    }

    getScore(userWork, answer);
}

function getScore(userAnswer, rightAnswer) {
    var score;
    var absDiff = Math.abs(userAnswer - rightAnswer);


    if (absDiff >= 10) {
        score = 0;
    } else if (absDiff >= 2) {
        score = 5;
    } else if (absDiff >= 1) {
        score = 7;
    } else if (absDiff == 0) {
        score = 10;
    }
    document.getElementById("Score").innerHTML = ("Your score for this round is:" + score);
    return score;
}

function getRandomLargeNum() {
    return Math.floor((Math.random() * 4 ) + 1) * 25;
}

function getRandomSmallNum() {
    return Math.floor((Math.random() * 10) + 1);
}