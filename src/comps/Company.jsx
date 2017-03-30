import React from 'react';

export default class Company extends React.Component{

	/*
	ourOnClickFunction(){
		console.log('clicked on our onclick function')
	}
	*/

	ourOnClickFunction(){
		this.props.onCompanyClick();
	}

	render(){
		let myStyle={backgroundColor: 'red'}
		return(
			<section style={myStyle} onClick={this.ourOnClickFunction.bind(this)}>
				<h2>{this.props.name}</h2>
				<h3>{this.props.desc}</h3>
			</section>
		);
	}
}