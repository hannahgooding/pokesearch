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
            } else {
                outputPokemonTypeOne.textContent = pokemonTypesArray[0];
                outputPokemonTypeTwo.textContent = pokemonTypesArray[1];
                output.appendChild(outputPokemonTypeOne);
                output.appendChild(outputPokemonTypeTwo);
            }

            switch (outputPokemonTypeOne.textContent) {
                case "normal":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--normal");
                    break;
                case "fighting":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--fighting");
                    break;
                case "flying":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--flying");
                    break;
                case "poison":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--poison");
                    break;
                case "ground":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--ground");
                    break;
                case "rock":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--rock");
                    break;
                case "bug":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--bug");
                    break;
                case "ghost":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--ghost");
                    break;
                case "steel":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--steel");
                    break;
                case "fire":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--fire");
                    break;
                case "water":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--water");
                    break;
                case "grass":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--grass");
                    break;
                case "electric":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--electric");
                    break;
                case "psychic":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--pyschic");
                    break;
                case "water":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--water");
                    break;
                case "ice":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--ice");
                    break;  
                case "dragon":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--dragon");
                    break;  
                case "dark":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--dark");
                    break;
                case "fairy":
                    outputPokemonTypeOne.setAttribute("class", "output__pokemon-type output__pokemon-type--fairy");
                    break;       
            }

            switch (outputPokemonTypeTwo.textContent) {
                case "normal":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--normal");
                break;
                case "fighting":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--fighting");
                break;
                case "flying":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--flying");
                break;
                case "poison":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--poison");
                break;
                case "ground":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--ground");
                break;
                case "rock":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--rock");
                break;
                case "bug":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--bug");
                break;
                case "ghost":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--ghost");
                break;
                case "steel":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--steel");
                break;
                case "fire":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--fire");
                break;
                case "water":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--water");
                break;
                case "grass":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--grass");
                break;
                case "electric":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--electric");
                break;
                case "psychic":
                    outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--pyschic");
                    break;
                case "water":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--water");
                break;
                case "ice":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--ice");
                break; 
                case "dragon":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--dragon");
                break; 
                case "dark":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--dark");
                break;
                case "fairy":
                outputPokemonTypeTwo.setAttribute("class", "output__pokemon-type output__pokemon-type--fairy");
                break; 
                }

        })
        .catch(error => {
            console.log(error);
            outputPokemonName.textContent = "Pokemon not found :(";
            output.appendChild(outputPokemonName);
        });
});