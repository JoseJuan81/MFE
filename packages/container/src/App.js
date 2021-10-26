import React from 'react';

import { MarketingApp } from '../components/MarketingApp';


export const App = () => {
    return (
        <div>
            <h1>Hola desde el contenedor principal de la aplicacion</h1>
            <hr/>
            <MarketingApp />
        </div>
    )
}
