import { GrafikTaliNilon, GrafikTaliCoklat, GrafikTaliPutih } from "./grafikW4"
import { TabelBeban, TabelMiu, TabelPerhitungan, TabelSegmen } from "./tabelW4"

function W4(){
    return(
        <div className="m-6 flex flex-col justify-center self-center items-center">
        <h1 className="font-bold text-3xl text-center"> GELOMBANG STATIONER </h1>
        <h1 className="font-serif text-l text-center"> Gunakan Situs Dekstop Untuk Pengalaman yang lebih Baik</h1>
        <br/> <br/>
            <TabelBeban/>
        <br/> <br/>
           <TabelSegmen/>
        <br/> <br/>
           <TabelPerhitungan/>
        <br/> <br/>
           <GrafikTaliPutih/>
        <br/> <br/>
           <GrafikTaliCoklat/>
        <br/> <br/>
           <GrafikTaliNilon/>
        <br/> <br/>
           <TabelMiu/>
        <br/> <br/>
        </div>
    )
}

export default W4