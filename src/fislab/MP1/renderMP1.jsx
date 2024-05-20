import { FrankHertzHistobar, MilikanHistobar } from "./barMP1"
import { TabelPengukuran, TabelPerhitunganQ, TabelSturges} from "./tabelMP1"

function MP1(){
    return(
        <div className="m-6 flex flex-col justify-center self-center items-center">
        <h1 className="font-bold text-3xl text-center"> KUANTISASI ELEKTRON DAN ENERGI ORBITAL</h1>
        <h1 className="font-serif text-l text-center"> Gunakan Situs Dekstop Untuk Pengalaman yang lebih Baik</h1>
        <br/> <br/>
            <TabelPengukuran/>
            <br/>
            <br/>
            <TabelPerhitunganQ/>
            <br/>
            <br/>
            <TabelSturges/>
            <br/>
            <MilikanHistobar/>
            <br/>
            <br/>
            <FrankHertzHistobar/>
            <br/>
        </div>
    )
}

export default MP1