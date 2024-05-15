import GrafikLED from "./grafikMP3";
import { TabelPengukuran, TabelPerhitungan } from "./tabelMP3";

function MP3(){
    return(
        <div>
        <TabelPengukuran/>
        <TabelPerhitungan/>
        <div className="h-full w-1/2">

        <GrafikLED/>
        </div>
        </div>
    )
}

export default MP3