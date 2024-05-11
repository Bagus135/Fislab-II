import { TabelData,TabelPengukuran } from "./tabelW2";
import GrafikVariasi from "./grafikW2";

function W2(){
    return(
        <div className="m-6 flex flex-col justify-center self-center items-center">
        <h1 className="font-bold text-3xl text-center"> DAMPED OSCILATION</h1>
        <h1 className="font-serif text-l text-center"> Gunakan Situs Dekstop Untuk Pengalaman yang lebih Baik</h1>
        <br/> <br/>
        <TabelPengukuran/>    
        <TabelData/>
        <GrafikVariasi/>
    </div>
    ) 
}

export default W2