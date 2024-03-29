// Components
import { Card } from "./assets/components/Card";
import { Button } from "./assets/components/Button"
// Styles
import './sass/App.scss'
// Icons
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
// Hooks
import { useEffect, useState } from "react";

const App = () => {

    const [pokemonId, setPokemonId] = useState(1);
    const [pokemonEvolutions, setPokemonEvolutions] = useState([])

    useEffect(() => {
        getEvolutions(pokemonId);
        console.log('useEffect ejecutado')
    }, [pokemonId]) // para que no se repita dos veces

    async function getEvolutions(id){
        const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
        const data = await response.json();

        let pokemonEvolutionArray = []

        let pokemonLv1 = data.chain.species.name
        let pokemonLv1Img = await getPokemonImgs(pokemonLv1)
        pokemonEvolutionArray.push([pokemonLv1, pokemonLv1Img])

        if(data.chain.evolves_to.length !== 0){
            let pokemonLv2 = data.chain.evolves_to[0].species.name;
            let pokemonLv2Img = await getPokemonImgs(pokemonLv2)
            pokemonEvolutionArray.push([pokemonLv2, pokemonLv2Img])

            if(data.chain.evolves_to[0].evolves_to.length !== 0){
                let pokemonLv3 = data.chain.evolves_to[0].evolves_to[0].species.name;
                let pokemonLv3Img = await getPokemonImgs(pokemonLv3)
                pokemonEvolutionArray.push([pokemonLv3, pokemonLv3Img])
                console.log(pokemonEvolutionArray)
            }
        }
        setPokemonEvolutions(pokemonEvolutionArray)
    }

    async function getPokemonImgs(name){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        const data = await response.json()
            return (data.sprites.front_default)
            
        //3D (data.sprites.other.showdown.front_default)
        //PixelArt (data.sprites.front_default)
        //Dibujo (data.sprites.other['official-artwork'].front_default)
    }

    function prevClick(){
            (pokemonId === 1)?
            setPokemonId(1):
            setPokemonId(pokemonId - 1)
        }

    function nextClick(){
        setPokemonId(pokemonId + 1)
    }

    return(
        <div className="app">
            {/* Tarjetas del pokemon */}
        <div className={`cards-container card${pokemonEvolutions.length}`}>
            {pokemonEvolutions.map(pokemon => <Card 
            key = {pokemon[0]}
            name = {pokemon[0]}
            img = {pokemon[1]}
            />)}
        </div>

        {/* Botones */}
        <div className="buttons-container">
            <Button 
            icon={<TiArrowLeftOutline />}
            handleClick={prevClick}
            />
            <Button 
            icon={<TiArrowRightOutline />} 
            handleClick={nextClick}
            />
        </div>
        </div>
    )
}

export {App}