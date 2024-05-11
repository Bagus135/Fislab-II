import { PlotGraph, datasets,errorBar } from "../../component/chart";
import { DataOlahW3 } from "./dataW3";

function GrafikW3(){
    const dataPengukuran = datasets("Data Pengukuran", "scatter", DataOlahW3.dataMeanW3.dataPlot.x, DataOlahW3.dataMeanW3.dataPlot.y, 'red', 'red')
    const dataRegresi = datasets(`Garis Regresi [ y = ${DataOlahW3.plotRegresi.Regresi.m.toFixed(5)}x + ${DataOlahW3.plotRegresi.Regresi.b.toFixed(5)} ]`, 'line', DataOlahW3.plotRegresi.x, DataOlahW3.plotRegresi.y, 'blue', 'blue');
    const ErrorBar = errorBar('y','Error Bar',DataOlahW3.dataMeanW3.dataPlot.x,DataOlahW3.dataMeanW3.dataPlot.y, DataOlahW3.dataMeanW3.Deviasi)
    console.log(ErrorBar)
    const PlotGrafik = <PlotGraph title='Grafik Rotasi Optik pada Glukosa' titleY={`Sudut (${decodeURI('%C2%B0')})`} titleX={'Konsentrasi (gr/ml)'} datasets={[dataPengukuran,dataRegresi, ErrorBar]}/>
    return  PlotGrafik
}

export default GrafikW3