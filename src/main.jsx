import ReactDOM from "react-dom/client";
import { App } from "./App";
import '../src/sass/index.scss'

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />) //<App /> es una etiqueta personalizada que no es HTML sino XML