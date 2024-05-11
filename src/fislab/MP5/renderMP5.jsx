import GrafikMP5 from "./grafikMP5";
import { TabelPengkuran, TabelSpectrometer } from "./tabelMP5";

function MP5(){
    return(
      <div className="m-6 flex flex-col justify-center self-center items-center">
        <h1 className="font-bold text-3xl text-center"> SPECTROMETRI GAS</h1>
        <br/> <br/>
        <TabelPengkuran/>
        <TabelSpectrometer/>
        <GrafikMP5/>
      </div>
    )
  }
  
  export default MP5;