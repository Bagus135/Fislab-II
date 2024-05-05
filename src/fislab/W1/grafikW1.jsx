import { PlotGraph,datasets } from "../../component/chart"
import { DataSnellius } from "./dataW1"
import { linearRegression } from "simple-statistics";

function DataPlotW1(Data){
    function Sinus1(tetha1){
        const rad1 = tetha1*Math.PI/180; // convert ke radian
        const sin1 = Math.sin(rad1);
        return sin1
    }
    function Sinus2(tetha2){
        const rad2 = tetha2*Math.PI/180; // convert ke radian
        const sin2 = Math.sin(rad2);
        return sin2
    }
    const sinus1 = []; const sinus2 = [];
    const Regresi = [];

    for(let i = 0 ; i < Data.theta1.length; i++){
        sinus1.push(Sinus1(Data.theta1[i]))
        sinus2.push(Sinus2(Data.theta2[i]))
        Regresi.push([Sinus1(Data.theta2[i]), Sinus2(Data.theta1[i])])
    }
    return {sinus1, sinus2 ,Regresi}
}

const DataPlot = DataPlotW1(DataSnellius)

function plotRegresi(Data){
    const regresi = linearRegression(Data.Regresi);    
    const y = [] ; const x = []
    for(let i = 0; i<Data.Regresi.length; i++){
        x.push(Data.sinus2[i]);
        y.push(regresi.m*Data.sinus2[i] + regresi.b)
    }
    return {y,x}
}
 
const DataRegresi = plotRegresi(DataPlot)

function GrafikSnell(){
    const grafikData = datasets('Data Pengukuran','scatter',DataPlot.sinus2,DataPlot.sinus1,'blue','blue')
    const grafikRegresi = datasets('Plot Regresi Linear (y = 1,621x + 0,027)','line',DataRegresi.x,DataRegresi.y,'red','red')
    const PlotGrafik = <PlotGraph title='Grafik Hukum Snellius' titleX={`Sin${decodeURI('%CE%B8')}2`} titleY={`Sin${decodeURI('%CE%B8')}1`} datasets={[grafikData, grafikRegresi]}/>
    return  PlotGrafik
  }
  
  export default GrafikSnell