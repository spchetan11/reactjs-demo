import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'; 


import Home from '/home/che2/react-demo/src/comps/Home.jsx';
import Products from '/home/che2/react-demo/src/comps/Products.jsx';
import Container from '/home/che2/react-demo/src/comps/Container.jsx';
import NoPage from '/home/che2/react-demo/src/comps/NoPage.jsx';

import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory();



export default class RoutingApp extends React.Component{
	render(){
		return(
			<div>
				<Router  history={history}>		
					<div>		
						<Container>    							
							     <Route exact path="/" component={Home}/>
							     <Route exact path="/products" component={Products}/>	     						  		 
					    </Container>
				    </div>	 
				</Router>
			</div>
		);
	}
}