import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const Topic = () => {
	let { topic } = useParams();
	return (
		<div>
			<h4>{topic}</h4>
			<p>
				Aprende como hacer un atractivo formulario estilo Material Design con
				HTML, CSS y Javascript
			</p>
		</div>
	);
};

const ReactTopics = () => {
	//let match = useRouteMatch();
	//console.log(match);
	let { path, url } = useRouteMatch();

	return (
		<div>
			<h3>Temas de React</h3>
			<ul>
				<li>
					<Link to={`${url}/jsx`}>JSX</Link>
				</li>
				<li>
					<Link to={`${url}/props`}>Props</Link>
				</li>
				<li>
					<Link to={`${url}/estado`}>Estado</Link>
				</li>
				<li>
					<Link to={`${url}/componentes`}>Components</Link>
				</li>
			</ul>
			<Switch>
				<Route exact path={path}>
					<h4>Elige un tema de React</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Accusantium alias excepturi eos assumenda doloribus aperiam aliquid
						minima maiores, aut labore. Enim, nulla. Amet incidunt fugiat,
						blanditiis fugit maxime ullam officia!
					</p>
				</Route>
				<Route path={`${path}/:topic`} component={Topic} />
			</Switch>
		</div>
	);
};

export default ReactTopics;
