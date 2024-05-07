import { Tabel } from "../../component/table";
import {MuonFlux} from "./dataMP2";

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
        <Tabel layout={Layout('Data Muon Flux',300)} header={['Pengulangan', 'Lantai 1', 'Lantai 2','Lantai 3', 'Lantai 4' ]} data={[MuonFlux.pengulangan, MuonFlux.lt1, MuonFlux.lt2, MuonFlux.lt3, MuonFlux.lt4]} />
       </div>
     )
}


export default TabelFlux