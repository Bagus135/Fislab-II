import { Tabel } from "../../component/table";
import {MuonFlux} from "./dataMP2";
import Deviasi from "./standarDeviasiMP2";

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


function TabelFlux(){
    return (
       <div className='TabelFlux'>
        <Tabel layout={Layout('Data Muon Flux',200)} header={['Pengulangan', 'Lantai 1', 'Lantai 2','Lantai 3', 'Lantai 4' ]} data={[[...MuonFlux.pengulangan, "Standar Deviasi"], [...MuonFlux.lt1, (Deviasi[0])], [...MuonFlux.lt2, Deviasi[1]],[...MuonFlux.lt3, Deviasi[2]], [...MuonFlux.lt4, Deviasi[3]]]} />
       </div>
     )
}


export default TabelFlux