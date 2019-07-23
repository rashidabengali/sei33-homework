const player = document.querySelector("#player");
player.setAttribute("style", "left: 0px; bottom: 0px;");
document.onkeydown = function(event) {
        switch (event.keyCode) {
           case 37:
                event.preventDefault();
                console.log(player);
                player.style.left = parseInt(player.style.left) - 15 + 'px'; //left
              break;
           case 38:
                event.preventDefault();
                //selectedAccessory.style.top = parseInt(selectedAccessory.style.top) - 10 + 'px'; //up
              break;
           case 39:
                event.preventDefault();
                player.style.left = parseInt(player.style.left) + 15 + 'px'; //right
              break;
           case 40:
                event.preventDefault();
                //selectedAccessory.style.top = parseInt(selectedAccessory.style.top) + 10 + 'px'; //down
              break;
        }
    };


const spawnFruit = {
  fruit : "/images/game_fruit_01.jpg",

  randomNum: (max, min=0) => {
    const num = Math.floor(Math.random() * ((max + 1) - min) + min);
    return num;
  },

  spawn: () => {
    const f = document.createElement("img");
    f.setAttribute("src", spawnFruit.fruit);
    f.setAttribute("class", "game_fruit");
    document.querySelector("#gameSpawnPoint").appendChild(f);
    const screenWidth = window.innerWidth;
    const imageWidth = f.width;
    const width = screenWidth - imageWidth;
    f.setAttribute("style", `top: 0px; left: ${ spawnFruit.randomNum(width) }px;`);
  },

  collect: () => {

  }

};

spawnFruit.randomNum(10);
