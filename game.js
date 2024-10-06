let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let turnO = true;
let newGameBtn = document.querySelector("#new-btn");
let mesContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
/*
let name1=prompt("enter 1st gamer name");
let name2=prompt("enter 2nd gamer name");
*/


const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.backgroundColor = "blue";
            box.style.color= "red";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.backgroundColor = "tomato"; 
            box.style.color= "white";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations! The winner is ${winner}`;
    mesContainer.classList.remove("hide");
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner:", pos1Val);
                showWinner(pos1Val);
                disableAllBoxes();
                break;
            }
        }
    }
};

const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
});

newGameBtn.addEventListener("click", () => {
    mesContainer.classList.add("hide");
    resetBtn.click();
});
