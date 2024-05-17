import {TabelAir, TabelKaca, TabelLarutanGula1, TabelLarutanGula2,TabelLarutanGula3,TabelLarutanGula4, TabelMinyak} from "./tabelSnell";
import {GrafikKaca, GrafikAir, GrafikGula1, GrafikGula2, GrafikGula3, GrafikGula4, GrafikMinyak } from "./grafikSnell";

function Snell(){
    return(
      <div className="w-full flex flex-col justify-center self-center items-center">
        <h1 className="font-bold text-3xl text-center"> HUKUM SNELLIUS : PEMBIASAN CAHAYA </h1>
        <h1 className="font-serif text-l text-center"> Gunakan Situs Dekstop Untuk Pengalaman yang lebih Baik</h1>
      <br/><br/><br/>

      <TabelKaca/>
      <br/>
      <GrafikKaca/>
      <br/><br/><br/>

      <TabelAir/>
      <br/>
      <GrafikAir/>
      <br/><br/><br/>

      <TabelLarutanGula1/>
      <br/>
      <GrafikGula1/>
      <br/><br/><br/>

      <TabelLarutanGula2/>
      <br/>
      <GrafikGula2/>
      <br/><br/><br/>
      
      <TabelLarutanGula3/>
      <br/>
      <GrafikGula3/>
      <br/><br/><br/>
      
      <TabelLarutanGula4/>
      <br/>
      <GrafikGula4/>
      <br/><br/><br/>

      <TabelMinyak/>
      <br/>
      <GrafikMinyak/>
      <br/><br/><br/>
      </div>
    )
  }
  
  export default Snell;