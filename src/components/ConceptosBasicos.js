import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Usuario from "../pages/Usuario";
import MenuConceptos from "./MenuConceptos";
import ReactTopics from "../pages/ReactTopics";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import { HashRouter } from "react-router-dom";

const ConceptosBasicos = () => {
	return (
		<div>
			<h2>Hash Router</h2>
			<HashRouter>
				<MenuConceptos />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/acerca" component={Acerca} />
					<Route exact path="/contacto" component={Contacto} />
					<Route path="*" component={Error404} />
				</Switch>
			</HashRouter>
			<hr />
			<h2>Conceptos Basicos</h2>
			<Router>
				<MenuConceptos />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/acerca" component={Acerca} />
					<Route exact path="/contacto" component={Contacto} />
					<Route exact path="/usuario/:username" component={Usuario} />
					<Route exact path="/productos/" component={Productos} />
					<Route exact path="/about">
						<Redirect to="/acerca" />
						<h3>About</h3>
					</Route>
					<Route exact path="/contact">
						<Redirect to="/contacto" />
						<h3>Contact</h3>
					</Route>
					<Route path="/react" component={ReactTopics} />
					<Route exact path="/login" component={Login} />
					{/* <Route exact path="/dashboard" component={Dashboard} /> */}
					<PrivateRoute exact path="/dashboard" component={Dashboard} />
					<Route path="*" component={Error404} />
				</Switch>
			</Router>
		</div>
	);
};

export default ConceptosBasicos;
