import { Button } from "./assets/components/Button"
import './sass/App.scss'
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";

const App = () => {
    return(
        <>
        {/* tarjetas */}
        <div className="buttons-container">
            <Button icon={<TiArrowLeftOutline />} />
            <Button icon={<TiArrowRightOutline />} />
        </div>
        </>
    )
}

export {App}