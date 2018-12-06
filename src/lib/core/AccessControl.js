import React from "react";
import PropTypes from "prop-types";
import { LoginComponent } from "../components";
import { Route, Redirect } from "react-router-dom";

const AccessControl = ({ authenticated, children }) => {
    return authenticated ? (
        <>{children}</>
    ) : (
            <>
                <Redirect to="/login" />
                <Route exact path="/login" component={LoginComponent} />
            </>
        );
};

AccessControl.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    authenticated: PropTypes.bool.isRequired
};

export default AccessControl;
