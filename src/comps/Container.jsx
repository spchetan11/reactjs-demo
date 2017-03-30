import React from 'react';
import { Link } from 'react-router-dom';


export default class Container extends React.Component{
	render(){
		return(
			<div>
				<div>
					<Link to="/">Home</Link>					 
					<Link to="/products">Products</Link>
				</div>
				{this.props.children}
			</div>
		);
	}
}