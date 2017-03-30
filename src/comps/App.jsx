import React from 'react';

import Company from '/home/che2/react-demo/src/comps/Company.jsx';

export default class App extends React.Component {
	constructor(){
			super();
			this.state = {
				companies:[
					{name: 'Google', desc: 'Web Search'},
					{name: 'Infosys', desc: 'IT services'}
				]
			};
		}

		handleCompanyClick(companyItem){
			console.log('on handle Company Click');
			console.log(companyItem.name + ' - ' + companyItem.desc);
		}

		onButtonClick(){
			console.log(this.refs.myTextInput.value);
		}

		componentWillMount(){
			console.log("Component is about to get mounted");
		}

		componentDidMount(){
			console.log("Component got added");
		}

		componentWillUpdate(){

		}

		componentDidUpdate(){

		}

		componentWillUnmount(){
		
		}
	render(){
		return(
			<div>
				<input ref="myTextInput" type="text"/>
				<button onClick={this.onButtonClick.bind(this)}> Get the input value </button>
			{
				this.state.companies.map(function(companyItem,i){
					return <Company key={i} name={companyItem.name} desc={companyItem.desc} onCompanyClick={this.handleCompanyClick.bind(this, companyItem)}/>
				}, this)
			}
			</div>
		);
	}
}