import React from 'react';
import Main from './component/main'
import './App.css';
import LoginControl from './component/te';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function App() {
  return (
    <main className="container-fluid">
       <Main></Main>
       {/* <LoginControl></LoginControl>  */}
    </main>
  );
}

export default App;
