import HistogramMiikan from "./histogramMilikan"
import {TabelHisto, TabelPengukuran, TabelPerhitunganQ, } from "./tabelMilikan"

function Milikan(){
    return(
        <div className="m-6 flex flex-col justify-center self-center items-center">
        <h1 className="font-bold text-3xl text-center"> TETES MINYAK MILIKAN : KUANTISASI ELEKTRON</h1>
        <h1 className="font-serif text-l text-center"> Gunakan Situs Dekstop Untuk Pengalaman yang lebih Baik</h1>
        <br/> <br/>
        <TabelPengukuran/>
        <br/>  <br/>
       <TabelPerhitunganQ/>
        <br/>  <br/>
        <TabelHisto/>
        <br/>  <br/>
        <HistogramMiikan/>
        <br />  <br/>
        </div>
    )
}

export default Milikan