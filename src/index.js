import _ from 'lodash';

function component() {
    var element = document.createElement('div');

    // Lodash Now imported by this script
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    
    return element;
}

document.body.appendChild(component());