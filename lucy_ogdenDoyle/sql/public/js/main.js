let selectedAccessory = document.querySelector(".create_dino_accessory");

const creator = {

  accessories: {
    "hat_01": "/images/acc_hat_01.png",
    "hat_02": "/images/acc_hat_02.png",
    "hat_03": "/images/acc_hat_03.png",
    "scarf_01": "/images/acc_scarf_01.png",
    "scarf_02": "/images/acc_scarf_02.png"
  },

  species: {
    "chunk": "/images/chunk.jpg",
    "munch": "/images/munch.jpg",
    "steggo": "/images/steggo.jpg",
    "jig": "/images/jig.jpg"
  },

// automatically populate dropdown menu
  accessoryDropdown: () => {
    const dropdown = document.querySelector("#newAccessory");
    for (let a in creator.accessories) {
      const acc = document.createElement("option");
      acc.value = a;
      acc.innerHTML = a;
      dropdown.appendChild(acc)
    }
  },

  accessoryListUpdate: (create_li) => {
      create_li.addEventListener("click", (event) => {
        const input = event.target.parentElement.firstChild;
        const label = event.target;
        input.checked == true ? input.checked = false : input.checked = true;
        creator.accessorySelect(input.value);
      })
  },

  newAccessoryButtonInitialise: () => {
      const newButton = document.querySelector("#addAccessory");
      const newAccessoryDropdown = document.querySelector("#newAccessory");
      newButton.addEventListener("click", () => {
        const val = newAccessoryDropdown.options[newAccessoryDropdown.selectedIndex].value;
        creator.accessoryCreate(val, creator.accessories[val]);
      });
  },

  accessoryCreate: (type, imageURL) => {
    const dinoContainer = document.querySelector(".editDino");
    // TODO limit created accessories to one per type. Otherwise change selection method to id numbers not type string.
    // create the accessory image
    const accessoryImage = document.createElement("img");
    accessoryImage.src = imageURL;
    accessoryImage.classList.add("create_dino_accessory");
    accessoryImage.setAttribute("id", type);
    accessoryImage.setAttribute("style", "left: 0px; top: 0px;");
    dinoContainer.appendChild(accessoryImage);

    // create the accessory tab for selection
    const create_li = document.createElement("li");
    // capitalize type in label
    type_cap = type.charAt(0).toUpperCase() + type.slice(1);
    // create the label, making sure its checked to auto select this label
    create_li.innerHTML = `<input name ="accessory" type="radio" value=${ type } checked="true">
      <label for="accessory">${ type_cap }</label>`;
    document.querySelector("#accessory_list").appendChild(create_li);
    creator.accessoryListUpdate(create_li);
    // Automatically select most recently added accessory
    creator.accessorySelect(type);
  },

  accessorySelect: (type) => {
    selectedAccessory = document.querySelector(`#${ type }`);
  },

  speciesSelect: () => {
    const addBtn = document.querySelector("#addSpecies");
    const speciesDropdown = document.querySelector("#selectSpecies");
    addBtn.addEventListener("click", () => {
      const val = speciesDropdown.options[speciesDropdown.selectedIndex].value;
      const dinoPreview = document.querySelector(".create_dino_species");
      dinoPreview.setAttribute("src", creator.species[val]);
    });

  }
};


creator.accessoryDropdown();

creator.newAccessoryButtonInitialise();
creator.speciesSelect();

document.onkeydown = function(event) {
        switch (event.keyCode) {
           case 37:
                event.preventDefault();
                selectedAccessory.style.left = parseInt(selectedAccessory.style.left) - 10 + 'px'; //left
              break;
           case 38:
                event.preventDefault();
                selectedAccessory.style.top = parseInt(selectedAccessory.style.top) - 10 + 'px'; //up
              break;
           case 39:
                event.preventDefault();
                selectedAccessory.style.left = parseInt(selectedAccessory.style.left) + 10 + 'px'; //right
              break;
           case 40:
                event.preventDefault();
                selectedAccessory.style.top = parseInt(selectedAccessory.style.top) + 10 + 'px'; //down
              break;
        }
    };
