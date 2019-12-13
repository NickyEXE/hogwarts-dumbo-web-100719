import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css'
import './index.css';

console.hog = (arg1, arg2) => {
    console.log("🐷🐷🐷🐷🐷")
    console.log(arg1, arg2)
    console.log("🐷🐷🐷🐷🐷")
}

ReactDOM.render(<App />, document.getElementById('root'));


