import React from 'react';
import ReacDOM from 'react-dom';

import App from './App';

const mount = ( el ) => {

    ReacDOM.render( <App/>, el );

}

if ( process.env.NODE_ENV === 'development' ) {
    const devRoot = document.querySelector( '#marketing__dev-root--isolation');

    if ( devRoot ) {
        mount( devRoot );
    }
}

export { mount };