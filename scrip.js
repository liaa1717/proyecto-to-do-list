let inputPrincipal = document.querySelector(".input");
let botonAgregar = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");

class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea);
    }

    crearDiv(nuevaTarea) {
        let inputItem = document.createElement("input");
        inputItem.type = "text";
        inputItem.disabled = true;
        inputItem.classList.add("item-input");
        inputItem.value = nuevaTarea;

        let nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("item");

        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        botonEditar.classList.add("boton-editar");

        let botonRemover = document.createElement("button");
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
        botonRemover.classList.add("boton-remover");

        nuevoDiv.appendChild(inputItem);
        nuevoDiv.appendChild(botonEditar);
        nuevoDiv.appendChild(botonRemover);
        container.appendChild(nuevoDiv);

        botonEditar.addEventListener("click", function () {
            inputItem.disabled = !inputItem.disabled;
            if (inputItem.disabled) {
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
            } else {
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
            }
        });

        botonRemover.addEventListener("click", function () {
            nuevoDiv.remove();
        });
    }
}

function chequearInput() {
    if (inputPrincipal.value.trim() !== "") {
        new Item(inputPrincipal.value);
        inputPrincipal.value = "";
    }
}

botonAgregar.addEventListener("click", chequearInput);