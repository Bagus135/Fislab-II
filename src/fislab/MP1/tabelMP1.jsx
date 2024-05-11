import { Tabel } from "../../component/table";
import {qMinyak,qSturges} from "./dataMP1";

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

function TabelPerhitunganQ(){
    console.log(qSturges)
      return (
         <div className='TabelPerhitunganMP1'>
          <Tabel layout={Layout('Data Perhitungan',300)} header={['Pengulangan', 'q-Floating (10^-19 C)', 'q-FallRaise (10^-19 C)l' ]} data={[qMinyak.dataFloating.pengulangan,qMinyak.dataFloating.oilCharge, qMinyak.dataFallRaise]} />
         </div>
       )
}
export {TabelPerhitunganQ}