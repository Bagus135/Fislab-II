import { PlotGraph,datasets } from "../../component/chart"
import {MuonFlux} from "./dataMP2"
import { linearRegression } from "simple-statistics"

function RegresiLinear(data){
  // gabungkan data mean dan tinggi lantai menjadi array multidimensional -> [[mean1,tinggi1]]
  const arrayMulti = []
  for (let i = 0; i< data.mean.length; i++){
    arrayMulti.push([data.tinggi_lt[i], data.mean[i]])
  }
  // masukkan arrayMulti kedalam parameter linear Regresi
  const Regresi = linearRegression(arrayMulti);
  // buat plot data regresi\
  const y = []; const x = []
  for(let i = 0; i < arrayMulti.length; i++){
    x.push(arrayMulti[i][0]) // arrayMulti [i][0] adalah ketinggian
    y.push(Regresi.m*arrayMulti[i][0]+ Regresi.b)
  }
  return{x,y, Regresi}
};

const dataRegresi = RegresiLinear(MuonFlux)

function GrafikFlux(){
    const grafikData = datasets('Data Pengukuran','scatter',MuonFlux.tinggi_lt,MuonFlux.mean,'red','red');
    const grafikRegresi = datasets(`Garis Regresi [y = ${dataRegresi.Regresi.m.toFixed(5)} x + ${dataRegresi.Regresi.b}]`, 'line',dataRegresi.x, dataRegresi.y , 'blue', 'blue');
    const PlotGrafik = <PlotGraph title='Grafik Flux Muon terhadap Ketinggian' titleX={'Ketinggian (m)'} titleY={'Muon Flux (cps)'} datasets={[grafikData, grafikRegresi]}/>
    return  PlotGrafik
  }
  
  export default GrafikFlux