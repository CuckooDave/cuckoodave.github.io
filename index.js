const appElement = document.querySelector('#app');
let points = 0;

console.log(appElement);

function createBox() {
    const boxElement = document.createElement("div");
    boxElement.classList.add("box");
    boxElement.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
    boxElement.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
    
    boxElement.addEventListener(`click`, function (event) {
        console.log(`click`, event);
        event.target.remove();
        points++;
        
        
    });
    
    return boxElement;
}

let numberOfBoxes = 0;

const intervalId = setInterval(function () {
    let boxElement = createBox();
    appElement.appendChild(boxElement);

    numberOfBoxes++;

    if (numberOfBoxes > 9) {
        clearInterval(intervalId);
        console.log(`${points}`);
    }
    
}, 500);


