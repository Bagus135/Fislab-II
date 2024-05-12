import { FrankHertzHistobar, MilikanHistobar } from "./barMP1"
import { TabelPengukuran, TabelPerhitunganQ, TabelSturges} from "./tabelMP1"

function MP1(){
    return(
        <div className="MP1">
            <p>Bagus Mustaqim / 5001221060 / 14</p>
            <TabelPengukuran/>
            <TabelPerhitunganQ/>
            <TabelSturges/>
            <MilikanHistobar/>
            <FrankHertzHistobar/>
        </div>
    )
}

export default MP1