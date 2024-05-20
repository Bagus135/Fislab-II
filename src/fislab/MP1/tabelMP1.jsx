import { Tabel } from "../../component/table";
import {qMinyak,qSturges, DataMentah} from "./dataMP1";
import {DataTabelFrankHertz, DataFrankHertzSturges } from "./franckHertz";
import { stanDevFranckHertz, stanDevMilikan } from "./deviasiMP1";

function Layout(title, height){
    let layout = {
      margin: {
        autoexpand : false,
        b:0,
        t:35
       },
       height,
       title
     }
     return layout
   } 
   
   function TabelPengukuran(){
    const Milikan = <Tabel 
    layout={Layout('Data Pengukuran Milikan',500)} 
    header={['Pengulangan', 'Voltage', 'Time Raise (s)', 'Time Fall (s)']} 
    data={[[...qMinyak.dataFloating.pengulangan, "Standart Deviasi"], 
          [...DataMentah.Voltage, stanDevMilikan.Voltage],
          [...DataMentah.raiseTime, stanDevMilikan.raiseTime], 
          [...DataMentah.fallTime, stanDevMilikan.fallTime]]}/>


    const FrankHertz = <Tabel 
    layout={Layout('Data Pengukuran Frank Hertz',420)} 
    header={['Pengulangan', 'Energy-1', 'Energy-2', 'Energy-3', 'Energy-4', 'Energy-5']}
    data={[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, 'Standart Deviasi'],
          [...DataTabelFrankHertz[0], stanDevFranckHertz.energy1],
          [...DataTabelFrankHertz[1], stanDevFranckHertz.energy2],
          [...DataTabelFrankHertz[2], stanDevFranckHertz.energy3],
          [...DataTabelFrankHertz[3], stanDevFranckHertz.energy4],
          [...DataTabelFrankHertz[4], stanDevFranckHertz.energy5]]} />

    return (
      <>
      {Milikan}
      <br/>
      <br/>
      {FrankHertz}
      </>
    )
   }
   

   function TabelPerhitunganQ(){

    return (
          <Tabel layout={Layout('Data Perhitungan',500)} header={['Pengulangan', 'q-Floating (10^-19 C)', 'q-FallRaise (10^-19 C)l' ]} data={[qMinyak.dataFloating.pengulangan,qMinyak.dataFloating.oilCharge, qMinyak.dataFallRaise]} />
       )
}



function TabelSturges(){
  function FloatingMethod(){
    return (
      <Tabel layout={Layout('Tabel Distribusi Sturges Floating Method',200)} header={['q-Range (10^-19)', 'Frekuensi']} data={[qSturges.dataFloating.rangeClass, qSturges.dataFloating.classFrec]} />
   )
  }
  function FallRaiseMethod(){
    return (
      <Tabel layout={Layout('Tabel Distribusi Sturges Fall-Raise Method',200)} header={['q-Range (10^-19)', 'Frekuensi']} data={[qSturges.dataFallRaise.rangeClass, qSturges.dataFallRaise.classFrec]} />
   )
  }
  function FrankHertz(){
    return (
      <Tabel layout={Layout('Tabel Distribusi Sturges Franck-Hertz',250)} header={['Energy', 'Frekuensi']} data={[DataFrankHertzSturges.rangeClass, DataFrankHertzSturges.classFrec]} />
   )
  }
  return(
    <>
    <FloatingMethod/>
    <br/>
    <br/>
    <FallRaiseMethod/>
    <br/>
    <br/>
    <FrankHertz/>
    </>
  )
}

export {TabelPengukuran, TabelPerhitunganQ, TabelSturges}