import _ from 'lodash';
import './style.css';
import './config.css';
import Icon from './icon.svg';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');

    //// Lodash, currently included via script, is required for this line to work
    // Lodash Now imported by this script
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component());