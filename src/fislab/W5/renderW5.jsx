import GrafikW5 from "./grafikW5";
import {TabelPengukuran, TabelLambda, TabelIndeksBias} from "./tabelW5";
import {LambdaScript} from "./lambdaW5";
import { IndeksBiasScript } from "./indeksBiasW5";

function W5(){
    return(
      < div className=" m-6 flex flex-col justify-center self-center items-center">
        <h1 className="font-bold text-3xl text-center">NEWTON RINGS</h1>
        <br/> <br/>
      <TabelPengukuran/>
      <br/>
      <br/>
      <GrafikW5/>
      <LambdaScript/>
      <TabelLambda/>
      <IndeksBiasScript/>
      <TabelIndeksBias/>
      </div>
    )
  }
  
  export default W5;