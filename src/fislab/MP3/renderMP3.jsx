import GrafikLED from "./grafikMP3";
import { TabelPengukuran, TabelPerhitungan } from "./tabelMP3";

function MP3(){
    return(
        <div className="m-6 flex flex-col justify-center self-center items-center">
        <h1 className="font-bold text-3xl text-center">EFEK FOTOLISTRIK</h1>
        <h1 className="font-serif text-l text-center"> Gunakan Situs Dekstop Untuk Pengalaman yang lebih Baik</h1>
        <br/> <br/>
        <TabelPengukuran/>
        <TabelPerhitungan/>
        <GrafikLED/>
        </div>
    )
}

export default MP3