import { TabelDiameterSenar,TabelIndeksBias,TabelLambda } from "./tabelW1";
import GrafikSnell from "./grafikW1";

function W1(){
    return(
      <div className="W1">
      <p>Bagus Mustaqim/5001221060/14</p>
      <TabelIndeksBias/>
      <GrafikSnell/>
      <TabelLambda/>
      <TabelDiameterSenar/>
      </div>
    )
  }
  
  export default W1;