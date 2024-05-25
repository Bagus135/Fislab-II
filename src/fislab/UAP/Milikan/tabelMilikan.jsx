import { Tabel } from "../../../component/table";
import {qMinyak, DataMentah} from "./dataMilikan";
import {stanDevMilikan } from "./deviasiMilikan";
import { InfoHisto } from "./selisihMilikan";


function Layout(title, height){
    let layout = {
      margin: {
        autoexpand : false,
        b:0,
        t:35
       },
       title,
       height,
       
     }
     return layout
   } 
   
   function TabelPengukuran(){
    const Milikan = <Tabel 
    layout={Layout('Data Pengukuran Milikan',1600)} 
    header={['Pengulangan', 'Voltage Float (V)','Voltage Raise (V)', 'Time Raise (s)', 'Time Fall (s)']} 
    data={[[...qMinyak.dataFloating.pengulangan, "Standart Deviasi"], 
          [...DataMentah.VoltageFloat, stanDevMilikan.VoltageFloat],
          [...DataMentah.VoltageRaise, stanDevMilikan.VoltageRaise],
          [...DataMentah.raiseTime, stanDevMilikan.raiseTime], 
          [...DataMentah.fallTime, stanDevMilikan.fallTime]]}/>


    return (
      <>
      {Milikan}
      </>
    )
   }
   

function TabelPerhitunganQ(){
    return (
          <Tabel layout={Layout('Data Perhitungan',1600)} header={['Pengulangan', 'q-Floating (10^-19 C)', 'q-FallRaise (10^-19 C)l' ]} data={[qMinyak.dataFloating.pengulangan,qMinyak.dataFloating.oilCharge, qMinyak.dataFallRaise]} />
       )
}

function TabelHisto(){
    return (
          <Tabel layout={Layout('Data Informasi Histogram',150)} header={['Variabel', 'Floating Methods', 'Fall-Raise Methods' ]} data={[['Data Terkecil', 'Data Terbesar', 'Banyak Data', 'Mean Modus'], [`${InfoHisto.floating.min} .10^-19`, `${InfoHisto.floating.max} .10^-19`, InfoHisto.floating.length,`${InfoHisto.floating.mean} .10^-19`], [`${InfoHisto.fallRaise.min} .10^-19`, `${InfoHisto.fallRaise.max} .10^-19`, InfoHisto.fallRaise.length, `${InfoHisto.fallRaise.mean} .10^-19`]]} />
       )
}


export {TabelPengukuran, TabelPerhitunganQ, TabelHisto,}