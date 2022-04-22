import React from 'react'; //Invocar React a este documento
import ReactDOM from 'react-dom';
import App from './components/App'; //Importar el componente creado
import './styles/global.scss';

//Crear recurso para saber hacia donde se va a importar
ReactDOM.render(<App />,document.getElementById('app'));