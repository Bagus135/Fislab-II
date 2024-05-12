import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, Legend,  CategoryScale} from 'chart.js/auto';
import {ScatterWithErrorBarsChart,ScatterWithErrorBarsController,PointWithErrorBar} from 'chartjs-chart-error-bars';

ChartJS.register(ScatterWithErrorBarsChart,ScatterWithErrorBarsController,PointWithErrorBar, LineController, LineElement, PointElement, LinearScale, Title, Legend, CategoryScale);

function errorBar(axes,label,dataX,dataY, deviation){
const dataArray = [];
let x = 0; let y = 0;
let yMin = 0; let yMax = 0;
let xMin = 0; let xMax = 0;
  if(axes==='y'){
    for(let i = 0; i<dataY.length; i++){
      y = dataY[i];
      yMin = dataY[i] - deviation[i];
      yMax = dataY[i] + deviation[i];
      xMax = null;
      xMin = null;
      x = dataX[i]
      dataArray.push({y, yMax, yMin, x, xMax, xMin})
    }
  }
  if(axes==='x'){
    for(let i = 0; i<dataX.length; i++){
      x = dataX[i];
      xMin = dataX[i] - deviation[i];
      xMax = dataX[i] + deviation[i];
      y= dataY[i];
      yMax = null; yMin = null;
      dataArray.push({x, xMax, xMin, y, yMax, yMin})
    }
  }
  const datasetsObj = {
    label,
    type :ScatterWithErrorBarsChart.id,
    data : dataArray,
    borderColor : 'black',
    backgroundColor : 'black',
  }
  return datasetsObj

}

 function datasets(label,type,dataX,dataY,borderColor,backgroundColor,tension){
  const dataArray = [];
  let x = 0; let y = 0;

  for(let i = 0; i<dataX.length; i++){
    x = dataX[i];
    y = dataY[i];
    dataArray.push({x ,y})
  }

  const datasetsObj = {
    label,
    type,
    data : dataArray,
    borderColor,
    backgroundColor,
    tension,
  }
  return datasetsObj
}; 

 function PlotGraph({title, titleX, titleY, datasets, type}) {
  const options = {
    responsive: true,
    scales: {
      x: {
        type : 'linear',
        title: {
          display: true,
          text: titleX
        }
      },
      y: {
        title: {
          display: true,
          text: titleY
        }
      }
    },
    plugins: {
      legend: {
        display : true,
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  }

  const data = {
   datasets
  }

  return <Chart options={options} data={data} />
}
export {datasets,PlotGraph, errorBar}