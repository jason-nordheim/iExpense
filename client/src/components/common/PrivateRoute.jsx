import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/***
 * renders a route component if the user is logged in, 
 * otherwise it redirects the user to the `/login` page 
 * with the return url that they were trying to access.
 */
function PrivateRoute({ component: Component, roles, ...rest }) {
    return (
        <Route {...rest} render={props => {
            if (!localStorage.getItem('user')) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
            }

            // logged in so return component
            return <Component {...props} />;
        }} />
    );
}

export { PrivateRoute };