import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
class DotForm extends Component {

	

	state = {

		// [ { name: '#fe2345', id: 1 }, { name: '#00ff70', id: 2 }, { name: '#ffff00', id: 3 }]
		enums:[1,2,3,4,5,6,7,8,9],
		defobj : { name: '#fe2345', id: 0 },
		colors: [ { name: '#fe2345', id: 1 }, { name: '#00ff70', id: 2 }, { name: '#ffff00', id: 3 }],
		tooltips: [ { name: '#fe2345', id: 4 }, { name: '#00ff70', id: 5 }, { name: '#ffff00', id: 6 } ],
		normRanges: [ { name: '#fe2345', id: 7 }, { name: '#00ff70', id: 8 }, { name: '#ffff00', id: 9 } ],
		tooltiptext: [ { name: '#fe2345', id: 10 }, { name: '#00ff70', id: 11 }, { name: '#ffff00', id: 12 } ],
		zoom: 0.8,
		json: null
		// defobj : { name: '#fe2345', id: 20 },
		// colors:  { name: '#fe2345', id: 1 },
		// tooltips: [ { name: '#fe2345', id: 4 }, { name: '#00ff70', id: 5 }, { name: '#ffff00', id: 6 } ],
		// normRanges: [ { name: '#fe2345', id: 7 }, { name: '#00ff70', id: 8 }, { name: '#ffff00', id: 9 } ],
		// tooltiptext: [ { name: '#fe2345', id: 10 }, { name: '#00ff70', id: 11 }, { name: '#ffff00', id: 12 } ],
		// zoom: 0.8,
		// json: null

	};


	Countof = (obj) =>{
		return Object.keys(obj[0]).length;

   }

	componentDidMount(){

		// this.setState({colors : null})
		// this.setState()
		this.setState({json : [{
			"date": "2012-07-28",
			"ahan": 11,
			"misa": 19,
			"feshar": 23
		  }, {
			"date": "2012-07-29",
			"value": 15,
			"misa": 26,
			"feshar": 15
		  }] },function(){

			console.log("s" + this.Countof(this.state.json));


			let x = this.Countof(this.state.json);			
			
			let {defobj} = this.state;
			let {colors} = this.state;
			let {enums}  = this.state;
			
			colors.pop();
			colors.pop();
			colors.pop();

			for (let index = 0; index < x-1 ; index++) {
				colors.push(defobj);
				colors[index].id = enums[index];
				console.log(colors[index].id);
				this.setState({colors});
			}
		
				
				// for (let index = 0; index < colors.length; index++) {
				// 	colors[index].id = enums[index];
					
				// 	this.setState({colors});
				// }

			// let {colors} = this.state;
				
			// colors.push(this.state.defobj);
			// this.setState({colors});
		
			// for (let index = 0; index < x; index++) {
			// 	const element = array[index];
			// }
		  });
	
		  
		//   console.log("count"+this.Countof(this.state.json))
		//   this.setState({colors : this.state.colors + this.state.defobj});
		  	// console.log("asdasdasda"+this.state.json)
		  
	}


	handleChanege = (e, id) => {
	
	
	
	
		console.log("b"+this.state.colors[0].id +this.state.colors[0].name);
		console.log("b"+this.state.colors[1].id + this.state.colors[1].name);
		console.log("b"+this.state.colors[2].id + this.state.colors[2].name);
		console.log("def"+this.state.defobj.id);
		

		console.log("inja"+e.currentTarget.value + 'kie' + id);
		if (id < 4) {
			let colors = [ ...this.state.colors ];
			colors[id - 1].name = e.currentTarget.value;
			this.setState({ colors });
		} else if (4 <= id && id < 7) {
			let tooltips = [ ...this.state.tooltips ];
			tooltips[id - 4].name = e.currentTarget.value;
			this.setState({ tooltips });
		} else if (7 <= id && id < 10) {
			let normRanges = [ ...this.state.normRanges ];
			normRanges[id - 7].name = e.currentTarget.value;
			this.setState({ normRanges });
		} else if (10 <= id && id < 13) {
			let tooltiptext = [ ...this.state.tooltiptext ];
			tooltiptext[id - 10].name = e.currentTarget.value;
			this.setState({ tooltiptext });
		}
    };
    
    handezoom = (e) => {
        let zoom = this.state.zoom;
        zoom = e.currentTarget.value;
        this.setState({zoom});
	};
	
	DrawDot= () =>{

		 var chart = am4core.create("chartdiv", am4charts.XYChart);

  // Add data
  chart.data = [{
    "date": "2012-07-28",
    "ahan": 11,
    "misa": 19,
    "feshar": 23
  }, {
    "date": "2012-07-29",
    "value": 15,
    "misa": 26,
    "feshar": 15
  }, {
    "date": "2012-07-30",
    "value": 16,
    "misa": 53,
    "feshar": 43
  }, {
    "date": "2012-07-31",
    "value": 18,
    "misa": 34,
    "feshar": 6
  }, {
    "date": "2012-08-01",
    "value": 13,
    "misa": 25,
    "feshar": 17
  }, {
    "date": "2012-08-02",
    "value": 22,
    "misa": 25,
    "feshar": 32
  }, {
    "date": "2012-08-03",
    "value": 23,
    "misa": 33,
    "feshar": 42
  }, {
    "date": "2012-08-04",
    "value": 20,
    "misa": 36,
    "feshar": 22
  }, {
    "date": "2012-08-05",
    "value": 17,
    "misa": 36,
    "feshar": 23
  }, {
    "date": "2012-08-06",
    "value": 16,
    "misa": 56,
    "feshar": 23
  }, {
    "date": "2012-08-07",
    "value": 18,
    "misa": "10",
    "feshar": 23
  }, {
    "date": "2012-08-08",
    "value": 21,
    "misa": 14,
    "feshar": 23
  }];

  // for (let key in chart.data) {
  //   if (chart.data[key].misa == "5 10") {
  //     console.log(chart.data[key].misa);
  //     var asdasd = chart.data[key].misa.split(' ');
  //     console.log(asdasd[1]);
  //   }
  // }
  console.log("*****")


  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());


  var series1 = chart.series.push(new am4charts.LineSeries());
  DrawLineSeries(series1, "date", "value", "Ahan", "[bold]{name}: [bold]{valueY}[/]", this.state.colors[0].name);
  SetToolTip(series1, "#42cbf5")
  SetBullet(series1);

  ///////////////////////////////////////////////////////////////////////////////////////////////
  var series2 = chart.series.push(new am4charts.LineSeries());
  DrawLineSeries(series2, "date", "misa", "Ghand", "[bold]{name}: [bold]{valueY}[/]",  this.state.colors[1].name);
  SetBullet(series2)
  SetToolTip(series2, "#9c42f5");


  ///////////////////////////////////////////////////////////////////////////////////////////////
  // var series3 = chart.series.push(new am4charts.LineSeries());
  // DrawLineSeries(series3,"date","feshar","Feshar","[bold]{name}: [bold]{valueY}[/]","green");
  // SetBullet(series3)
  // SetToolTip(series3,"#42f57b");


  SetChartCursor(chart, series1);
  let range = valueAxis.axisRanges.create();
  range.value = 12;
  range.endValue = 25;
  range.axisFill.fill = am4core.color("#f54242");
  range.axisFill.fillOpacity = 0.2;
  range.grid.strokeOpacity = 0;

  let range1 = valueAxis.axisRanges.create();
  range1.value = 20;
  range1.endValue = 35;
  range1.axisFill.fill = am4core.color("blue");
  range1.axisFill.fillOpacity = 0.2;
  range1.grid.strokeOpacity = 0;
  chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

	  console.log("hoiw"+this.state.zoom)
	  var x =this.state.zoom;
  chart.events.on("ready", function () {
    dateAxis.zoom({
      start: x,
      end: 1
	});
});	

	}
	handleSubmit = (e) => {
        e.preventDefault();
		this.DrawDot();
        console.log('submitted',this.state);
	};
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<h1>Dot-Chart</h1>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group controlId="formBasicNormalSection">
							<Form.Label>NormalSection Color</Form.Label>
							<div className="row">
								{this.state.normRanges.map((norm) => (
									<div className="col-2" key={norm.id}>
										<input
											className="form-control"
											type="color"
											value={norm.name}
											onChange={(e) => this.handleChanege(e, norm.id)}
										/>
									</div>
								))}
							</div>
						</Form.Group>

						<Form.Group controlId="formBasicSerie">
							<Form.Label>Series Color:</Form.Label>
							<div className="row">
								{this.state.colors.map((color) => (
									<div className="col-2" key={color.id}>
										<input
											className="form-control"
											type="color"
											value={color.name}
											onChange={(e) => this.handleChanege(e, color.id)}
										/>
									</div>
								))}
							</div>
						</Form.Group>

						<Form.Group controlId="formBasicToolTip">
							<Form.Label>Tooltip Color</Form.Label>
							<div className="row">
								{this.state.tooltips.map((tooltip) => (
									<div className="col-2" key={tooltip.id}>
										<input
											className="form-control"
											type="color"
											value={tooltip.name}
											onChange={(e) => this.handleChanege(e, tooltip.id)}
										/>
									</div>
								))}
							</div>
						</Form.Group>

						<Form.Group controlId="formBasicToolTipText">
							<Form.Label>Tooltiptext Color:</Form.Label>
							<div className="row">
								{this.state.tooltiptext.map((t) => (
									<div className="col-2" key={t.id}>
										<input
											className="form-control"
											type="color"
											value={t.name}
											onChange={(e) => this.handleChanege(e, t.id)}
										/>
									</div>
								))}
							</div>
						</Form.Group>
						<Form.Group controlId="formBasicZoom">
							<Form.Label>Zoom:</Form.Label>
							<div className="row">
								<div className="col-2">
									<input className="form-control" type="number" value={this.state.zoom} onChange={(e) => this.handezoom(e)}/>
								</div>
							</div>
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</div>

				<div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
			</React.Fragment>
		);
	}
}
  function SetChartCursor(chart, series) {

	chart.cursor = new am4charts.XYCursor();
	// Create vertical scrollbar and place it before the value axis
	chart.scrollbarY = new am4core.Scrollbar();
	chart.scrollbarY.parent = chart.leftAxesContainer;
	chart.scrollbarY.toBack();
  
	// Create a horizontal scrollbar with previe and place it underneath the date axis
	chart.scrollbarX = new am4charts.XYChartScrollbar();
	chart.scrollbarX.series.push(series);
	chart.scrollbarX.parent = chart.bottomAxesContainer;
  
	chart.legend = new am4charts.Legend();
  }
  
  function SetToolTip(series, color) {
  
	series.tooltip.background.cornerRadius = 20;
	series.tooltip.background.strokeOpacity = 0;
	series.tooltip.pointerOrientation = "horizontal";
	series.tooltip.getFillFromObject = false;
	series.tooltip.background.fill = am4core.color(color);
  
	series.tooltip.autoTextColor = false;
	series.tooltip.label.fill = am4core.color("black");
  
	series.tooltip.label.minWidth = 100;
	series.tooltip.label.minHeight = 100;
	series.tooltip.label.textAlign = "middle";
	series.tooltip.label.textValign = "middle";
  
  
  }
  
  function SetBullet(series) {
	var bullet2 = series.bullets.push(new am4charts.CircleBullet());
	bullet2.circle.strokeWidth = 2;
	bullet2.circle.radius = 4;
	bullet2.circle.fill = am4core.color("#fff");
  
	var bullethover2 = bullet2.states.create("hover");
	bullethover2.properties.scale = 1.3;
  }
  
  function DrawLineSeries(series, x, y, name, text, color) {
	series.dataFields.valueY = y;
	series.dataFields.dateX = x;
	series.stroke = am4core.color(color);
	series.name = name;
	series.tooltipText = text;
	series.strokeWidth = 2;
	series.minBulletDistance = 5;
  
  }



export default DotForm;
