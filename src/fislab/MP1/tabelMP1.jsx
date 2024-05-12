import { Tabel } from "../../component/table";
import {qMinyak,qSturges, DataMentah} from "./dataMP1";
import { DataMerge, DataTabelFrankHertz, DataFrankHertzSturges } from "./franckHertz";

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
    const Milikan = <Tabel layout={Layout('Data Pengukuran Milikan',500)} header={['Pengulangan', 'Voltage', 'Time Raise (s)', 'Time Fall (s)']} data={[qMinyak.dataFloating.pengulangan, DataMentah.Voltage, DataMentah.raiseTime,DataMentah.fallTime]}/>
    const FrankHertz = <Tabel layout={Layout('Data Pengukuran Frank Hertz',400)} header={['Pengulangan', 'Energy-1', 'Energy-2', 'Energy-3', 'Energy-4', 'Energy-5']} data={[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],DataTabelFrankHertz[0], DataTabelFrankHertz[1], DataTabelFrankHertz[2], DataTabelFrankHertz[3], DataTabelFrankHertz[4]]} />
    return (
      <>
      {Milikan}
      {FrankHertz}
      </>
    )
   }

   function TabelPerhitunganQ(){
    console.log(DataMerge)  
    return (
          <Tabel layout={Layout('Data Perhitungan',500)} header={['Pengulangan', 'q-Floating (10^-19 C)', 'q-FallRaise (10^-19 C)l' ]} data={[qMinyak.dataFloating.pengulangan,qMinyak.dataFloating.oilCharge, qMinyak.dataFallRaise]} />
       )
}



function TabelSturges(){
  function FloatingMethod(){
    return (
      <Tabel layout={Layout('Tabel Distribusi Sturges Floating Method',250)} header={['q-Range (10^-19)', 'Frekuensi']} data={[qSturges.dataFloating.rangeClass, qSturges.dataFloating.classFrec]} />
   )
  }
  function FallRaiseMethod(){
    return (
      <Tabel layout={Layout('Tabel Distribusi Sturges Fall-Raise Method',250)} header={['q-Range (10^-19)', 'Frekuensi']} data={[qSturges.dataFallRaise.rangeClass, qSturges.dataFallRaise.classFrec]} />
   )
  }
  function FrankHertz(){
    return (
      <Tabel layout={Layout('Tabel Distribusi Sturges Fank-Hertz',250)} header={['Energy', 'Frekuensi']} data={[DataFrankHertzSturges.rangeClass, DataFrankHertzSturges.classFrec]} />
   )
  }
  return(
    <>
    <FloatingMethod/>
    <FallRaiseMethod/>
    <FrankHertz/>
    </>
  )
}

export {TabelPengukuran, TabelPerhitunganQ, TabelSturges}