import GrafikLED from "./grafikMP3";
import { TabelPengukuran, TabelPerhitungan } from "./tabelMP3";

function MP3(){
    return(
        <div>
        <TabelPengukuran/>
        <TabelPerhitungan/>
        <GrafikLED/>
        </div>
    )
}

export default MP3