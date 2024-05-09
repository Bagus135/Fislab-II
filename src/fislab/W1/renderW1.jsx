import { TabelDiameterSenar,TabelIndeksBias,TabelLambda } from "./tabelW1";
import GrafikSnell from "./grafikW1";

function W1(){
    return(
      <div className="W1">
      <p>Bagus Mustaqim/5001221060/14</p>
      <TabelIndeksBias/>
      <div className="h-full w-5/12">
      <GrafikSnell/>
      </div>
      <TabelLambda/>
      <TabelDiameterSenar/>
      </div>
    )
  }
  
  export default W1;