import GrafikMP5 from "./grafikMP5";
import { TabelPengkuran, TabelSpectrometer } from "./tabelMP5";

function MP5(){
    return(
      <div className="MP5">
        <TabelPengkuran/>
        <TabelSpectrometer/>
        <GrafikMP5/>
      </div>
    )
  }
  
  export default MP5;