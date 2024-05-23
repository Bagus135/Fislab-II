import { Tabel } from "../../../component/table";
import {qMinyak, DataMentah} from "./dataMilikan";
import {stanDevMilikan } from "./deviasiMilikan";


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
    layout={Layout('Data Pengukuran Milikan',2000)} 
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
          <Tabel layout={Layout('Data Perhitungan',2000)} header={['Pengulangan', 'q-Floating (10^-19 C)', 'q-FallRaise (10^-19 C)l' ]} data={[qMinyak.dataFloating.pengulangan,qMinyak.dataFloating.oilCharge, qMinyak.dataFallRaise]} />
       )
}


export {TabelPengukuran, TabelPerhitunganQ,}