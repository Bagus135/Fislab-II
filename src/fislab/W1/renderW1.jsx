import { TabelDiameterSenar,TabelIndeksBias,TabelLambda } from "./tabelW1";
import GrafikSnell from "./grafikW1";

function W1(){
    return(
      <div className="w-full flex flex-col justify-center self-center items-center">
      <TabelIndeksBias/>
      <GrafikSnell/>
      <TabelLambda/>
      <TabelDiameterSenar/>
      </div>
    )
  }
  
  export default W1;