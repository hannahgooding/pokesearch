const form = document.querySelector("form");
const output = document.querySelector(".output");
const outputPokemonName = document.createElement("p");
const outputPokemonImage = document.createElement("img");
const outputPokemonTypeOne = document.createElement("p");
const outputPokemonTypeTwo = document.createElement("p");

form.addEventListener("submit", e => {
    e.preventDefault();
    // prevent a default submission that reloads the page
    output.innerHTML = "";
    // clear previous output
    const pokemonName = document.querySelector("#pokemon-name").value.toLowerCase();
    // allow user to input names with capital letters
    fetch("https://pokeapi.co/api/v2/pokemon/" + `${pokemonName}`)
        .then(res => {
            if (!res.ok) throw new Error(res.status);
            return res.json();
        })
        .then(res => {
            outputPokemonName.textContent = res.name[0].toUpperCase() + res.name.slice(1);
            // capitalise pokemon name
            outputPokemonImage.src = res.sprites.front_default;
            output.appendChild(outputPokemonName);
            output.appendChild(outputPokemonImage);

            const pokemonTypes = res.types;
            let pokemonTypesArray = [];
            Object.keys(pokemonTypes).forEach(key => {
                pokemonTypesArray.push(pokemonTypes[key].type.name);
            });            

            if (pokemonTypesArray.length === 1) {
                outputPokemonTypeOne.textContent = pokemonTypesArray[0];
                output.appendChild(outputPokemonTypeOne);
                let typeOne = outputPokemonTypeOne.textContent;
                outputPokemonTypeOne.setAttribute("class", `output__pokemon-type output__pokemon-type--${typeOne}`);
            } else {
                outputPokemonTypeOne.textContent = pokemonTypesArray[0];
                outputPokemonTypeTwo.textContent = pokemonTypesArray[1];
                output.appendChild(outputPokemonTypeOne);
                output.appendChild(outputPokemonTypeTwo);
                let typeOne = outputPokemonTypeOne.textContent;
                let typeTwo = outputPokemonTypeTwo.textContent;
                outputPokemonTypeOne.setAttribute("class", `output__pokemon-type output__pokemon-type--${typeOne}`);
                outputPokemonTypeTwo.setAttribute("class", `output__pokemon-type output__pokemon-type--${typeTwo}`);
            }

        })
        .catch(error => {
            console.log(error);
            outputPokemonName.textContent = "Pokemon not found :(";
            output.appendChild(outputPokemonName);
        });
});