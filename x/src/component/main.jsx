import React, { Component } from 'react';
import DotForm from './forms/dotform';
import PieChart from './forms/piechart';
import Line from './forms/linechart'

import { DropdownButton, Dropdown } from 'react-bootstrap';
class Main extends Component {
	state = {
		chartName: [ 'Dot-chart', 'Pie-Chart', 'line-chart' ],
         isCalled:0
	};
	handleChart=(chartselct)=> {
		
		   if(chartselct.name==='Dot-chart'){
			this.setState({isCalled:1});
           }
        	if(chartselct.name==='Pie-Chart'){
				this.setState({isCalled:2});

			}
		    if(chartselct.name==='line-chart'){
				this.setState({isCalled:3});
			}
			console.log(this.state.isCalled)
	}

	render() {
		
		const { isCalled } = this.state;
		let  chart;
		if (isCalled===1) {
			chart = <DotForm  />;
		  } if(isCalled===2) {
			chart = <PieChart />;
		  } if(isCalled===3)
		    chart=<Line/>
	  
		return (
			<React.Fragment>
				<div className="m-5 direction">
					<DropdownButton id="dropdown-item-button" title="لطفا انتخاب کنید">
						{this.state.chartName.map((name) => (
							<Dropdown.Item key={name} as="button" onClick={() => this.handleChart({name})}>
								{name}
							</Dropdown.Item>
						))}
					</DropdownButton>
				</div>
				{chart}
		
				
			</React.Fragment>
		);
	}
}

export default Main;
