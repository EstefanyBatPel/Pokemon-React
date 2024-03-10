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
    const [pokemonName, setPokemonName] = useState('');

    useEffect(() => {
        getEvolutions(pokemonId);
        console.log('useEffect ejecutado')
    }, [pokemonId])

    async function getEvolutions(id){
        const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
        const data = await response.json();
        setPokemonName(data.chain.species.name)
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
        <>
        {/* Tarjetas del pokemon */}
        <div className="card-container">
            <Card />
        </div>

        {/* Botones */}
        <div className="buttons-container">
            <Button 
            icon={<TiArrowLeftOutline />}
            handleClick={prevClick}
            />
            {pokemonName}
            <Button 
            icon={<TiArrowRightOutline />} 
            handleClick={nextClick}
            />
        </div>
        </>
    )
}

export {App}