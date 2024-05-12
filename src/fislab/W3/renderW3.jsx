import GrafikW3 from "./grafikW3";
import RotasiSpesifikScript from "./rotasiSpesifikMP3";
import { TabelPengukuran, TabelPerbandinganC } from "./tabelW3";

function W3(){
    return(
        <div className="m-6 flex flex-col justify-center self-center items-center">
        <h1 className="font-bold text-3xl text-center"> POLARISASI CAHAYA </h1>
        <h1 className="font-serif text-l text-center"> Gunakan Situs Dekstop Untuk Pengalaman yang lebih Baik</h1>
        <br/> <br/>
            <TabelPengukuran/>
            <TabelPerbandinganC/>
            <GrafikW3/>
            <RotasiSpesifikScript/>
        </div>
    )
}

export default W3