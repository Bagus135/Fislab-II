import { GrafikTaliNilon, GrafikTaliCoklat, GrafikTaliPutih } from "./grafikW4"

function W4(){
    return(
        <div className="m-6 flex flex-col justify-center self-center items-center">
        <h1 className="font-bold text-3xl text-center"> POLARISASI CAHAYA </h1>
        <h1 className="font-serif text-l text-center"> Gunakan Situs Dekstop Untuk Pengalaman yang lebih Baik</h1>
        <br/> <br/>
           <GrafikTaliPutih/>
           <GrafikTaliCoklat/>
           <GrafikTaliNilon/>
        </div>
    )
}

export default W4