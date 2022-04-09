/* import React from "react";
import { Route, Redirect } from "react-router-dom";
leth auth;
auth = true;
auth = null;

const PrivateRoute = ({component:Component, ...rest}) => {
	return (
    <Route {...rest} >{auth? <Component/>: <Redirect to="/login"/>}<Route/>
    );
};

export default PrivateRoute; */
import { Redirect, Route } from "react-router";

/* const PrivateRoute = (props) => {
  return (
    <Route exact={props.exact} path={props.path} component={props.component} />
  );
}; */

/* const PrivateRoute = (props) => {
  return <Route {...props} />;
}; */

//Simular Autenticación
let auth;
auth = null;
auth = true;

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route {...rest}>{auth ? <Component /> : <Redirect to="/login" />}</Route>
	);
};

export default PrivateRoute;
