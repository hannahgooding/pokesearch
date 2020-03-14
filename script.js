const form = document.querySelector("form");
const output = document.querySelector(".output");
const outputPokemonName = document.createElement("p");
const outputPokemonImage = document.createElement("img");
const outputPokemonType = document.createElement("p");

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

            const pokemonTypes = res.types;
            let pokemonTypesArray = [];
            Object.keys(pokemonTypes).forEach(key => {
                pokemonTypesArray.push(pokemonTypes[key].type.name);
            });
            outputPokemonType.textContent = pokemonTypesArray.join(" ").toUpperCase();

            output.appendChild(outputPokemonName);
            output.appendChild(outputPokemonImage);
            output.appendChild(outputPokemonType);

            outputPokemonName.setAttribute("class", "output__pokemon-name");
            outputPokemonImage.setAttribute("class", "output__pokemon-image");
            outputPokemonType.setAttribute("class", "output__pokemon-type");
        })
        .catch(error => {
            console.log(error);
            outputPokemonName.textContent = "Pokemon not found :(";
            output.appendChild(outputPokemonName);
        });
});