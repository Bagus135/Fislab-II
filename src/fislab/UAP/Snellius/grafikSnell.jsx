import { PlotGraph, datasets, errorBar } from "../../../component/chart";
import { DataSnellius } from "./dataSnell";
import { DataGrafik } from "./functionSnell";


 
const Data = DataGrafik(DataSnellius)

function GrafikKaca(){
    const grafikData = datasets('Data Pengukuran','scatter',Data['x'],Data['udaraKaca']['mean'],'blue','blue')
    const grafikRegresi = datasets(`Regresi Linear [ y = ${(Data['udaraKaca']['Regresi'].m).toFixed(7)}x ${(Data['udaraKaca']['Regresi'].b).toFixed(5)}]`,'line',Data['udaraKaca']['PlotRegresi']['x'], Data['udaraKaca']['PlotRegresi']['y'],'red','red')
    const ErrorBar = errorBar('y','Error Bar', Data['x'],Data['udaraKaca']['mean'],Data['udaraKaca']['std'])


    const PlotGrafik = <PlotGraph title='Grafik Hukum Snellius Pada Medium Udara-Kaca' titleX={`Sin${decodeURI('%CE%B8')}1`} titleY={`Sin${decodeURI('%CE%B8')}2`} datasets={[grafikData, grafikRegresi, ErrorBar]}/>
    return  PlotGrafik
  }

function GrafikAir(){
    const grafikData = datasets('Data Pengukuran','scatter',Data['x'],Data['udaraAir']['mean'],'blue','blue')
    const grafikRegresi = datasets(`Regresi Linear [ y = ${(Data['udaraAir']['Regresi'].m).toFixed(7)}x ${(Data['udaraAir']['Regresi'].b).toFixed(5)}]`,'line',Data['udaraAir']['PlotRegresi']['x'], Data['udaraAir']['PlotRegresi']['y'],'red','red')
    const ErrorBar = errorBar('y','Error Bar', Data['x'],Data['udaraAir']['mean'],Data['udaraAir']['std'])


    const PlotGrafik = <PlotGraph title='Grafik Hukum Snellius Pada Medium Udara-Air' titleX={`Sin${decodeURI('%CE%B8')}1`} titleY={`Sin${decodeURI('%CE%B8')}2`} datasets={[grafikData, grafikRegresi, ErrorBar]}/>
    return  PlotGrafik
  }

function GrafikGula1(){
    const grafikData = datasets('Data Pengukuran','scatter',Data['x'],Data['larutanGula1']['mean'],'blue','blue')
    const grafikRegresi = datasets(`Regresi Linear [ y = ${(Data['larutanGula1']['Regresi'].m).toFixed(7)}x ${(Data['larutanGula1']['Regresi'].b).toFixed(5)}]`,'line',Data['larutanGula1']['PlotRegresi']['x'], Data['larutanGula1']['PlotRegresi']['y'],'red','red')
    const ErrorBar = errorBar('y','Error Bar', Data['x'],Data['larutanGula1']['mean'],Data['larutanGula1']['std'])


    const PlotGrafik = <PlotGraph title='Grafik Hukum Snellius Pada Medium Udara-Larutan Gula dengan Konsentrasi 0,27gr/ml' titleX={`Sin${decodeURI('%CE%B8')}1`} titleY={`Sin${decodeURI('%CE%B8')}2`} datasets={[grafikData, grafikRegresi, ErrorBar]}/>
    return  PlotGrafik
  }

function GrafikGula2(){
    const grafikData = datasets('Data Pengukuran','scatter',Data['x'],Data['larutanGula2']['mean'],'blue','blue')
    const grafikRegresi = datasets(`Regresi Linear [ y = ${(Data['larutanGula2']['Regresi'].m).toFixed(7)}x ${(Data['larutanGula2']['Regresi'].b).toFixed(5)}]`,'line',Data['larutanGula2']['PlotRegresi']['x'], Data['larutanGula2']['PlotRegresi']['y'],'red','red')
    const ErrorBar = errorBar('y','Error Bar', Data['x'],Data['larutanGula2']['mean'],Data['larutanGula2']['std'])


    const PlotGrafik = <PlotGraph title='Grafik Hukum Snellius Pada Medium Udara-Larutan Gula dengan Konsentrasi 0,54gr/ml' titleX={`Sin${decodeURI('%CE%B8')}1`} titleY={`Sin${decodeURI('%CE%B8')}2`} datasets={[grafikData, grafikRegresi, ErrorBar]}/>
    return  PlotGrafik
  }

function GrafikGula3(){
    const grafikData = datasets('Data Pengukuran','scatter',Data['x'],Data['larutanGula3']['mean'],'blue','blue')
    const grafikRegresi = datasets(`Regresi Linear [ y = ${(Data['larutanGula3']['Regresi'].m).toFixed(7)}x ${(Data['larutanGula3']['Regresi'].b).toFixed(5)}]`,'line',Data['larutanGula3']['PlotRegresi']['x'], Data['larutanGula3']['PlotRegresi']['y'],'red','red')
    const ErrorBar = errorBar('y','Error Bar', Data['x'],Data['larutanGula3']['mean'],Data['larutanGula3']['std'])


    const PlotGrafik = <PlotGraph title='Grafik Hukum Snellius Pada Medium Udara-Larutan Gula dengan Konsentrasi 0,81gr/ml' titleX={`Sin${decodeURI('%CE%B8')}1`} titleY={`Sin${decodeURI('%CE%B8')}2`} datasets={[grafikData, grafikRegresi, ErrorBar]}/>
    return  PlotGrafik
  }
function GrafikGula4(){
    const grafikData = datasets('Data Pengukuran','scatter',Data['x'],Data['larutanGula4']['mean'],'blue','blue')
    const grafikRegresi = datasets(`Regresi Linear [ y = ${(Data['larutanGula4']['Regresi'].m).toFixed(7)}x ${(Data['larutanGula4']['Regresi'].b).toFixed(5)}]`,'line',Data['larutanGula4']['PlotRegresi']['x'], Data['larutanGula4']['PlotRegresi']['y'],'red','red')
    const ErrorBar = errorBar('y','Error Bar', Data['x'],Data['larutanGula4']['mean'],Data['larutanGula4']['std'])


    const PlotGrafik = <PlotGraph title='Grafik Hukum Snellius Pada Medium Udara-Larutan Gula dengan Konsentrasi 1,08gr/ml' titleX={`Sin${decodeURI('%CE%B8')}1`} titleY={`Sin${decodeURI('%CE%B8')}2`} datasets={[grafikData, grafikRegresi, ErrorBar]}/>
    return  PlotGrafik
  }
  
  export {GrafikAir,GrafikGula1, GrafikGula2, GrafikGula3, GrafikGula4, GrafikKaca}