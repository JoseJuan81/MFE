import React from 'react';
import { NavLink } from 'react-router-dom';

export const Landing = () => {
    return (
        <div>
            <h1>Pagina Landing para Marketing</h1>
            <NavLink
                to="/pricing"
            >
                ir a Precios
            </NavLink>
        </div>
    )
}
