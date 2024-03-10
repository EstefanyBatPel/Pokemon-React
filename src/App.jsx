import { Button } from "./assets/components/Button"
import './sass/App.scss'
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import { useState } from "react";

const App = () => {

    const [pokemonId, setPokemonId] = useState(1)

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
        {/* tarjetas */}
        <div className="buttons-container">
            <Button 
            icon={<TiArrowLeftOutline />}
            handleClick={prevClick}
            />
            {pokemonId}
            <Button 
            icon={<TiArrowRightOutline />} 
            handleClick={nextClick}
            />
        </div>
        </>
    )
}

export {App}