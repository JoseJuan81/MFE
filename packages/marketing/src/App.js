import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter,
    Redirect
} from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import { Pricing } from './components/Pricing';
import { Landing } from './components/Landing';

export default () => {
    return (
        <div>
            <StylesProvider>

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/pricing" component={ Pricing }/>
                        <Route path="/" component={ Landing } />

                        <Redirect to="/" />
                    </Switch>
                </BrowserRouter>

            </StylesProvider>
        </div>
    )
}