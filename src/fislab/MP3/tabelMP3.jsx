import { dataBiru, dataMerah, dataHijau, dataKuning,dataEnergy,dataFrekuensi,dataStopVolt, dataLambda } from "./dataMP3";
import { Tabel } from "../../component/table";

function Layout(title, height){
    let layout = {
      margin: {
        autoexpand : false,
        b:0,
        t:35
       },
       height,
       title
     }
     return layout
   } 

function TabelPengukuran(){
    function TabelInformasi(){
        return (
          <Tabel layout={Layout('Data Informasi',200)} header={['Besaran', 'Nilai']} data={[['Jarak kisi ke layar', 'Konstanta Kisi', 'Kecepatan Cahaya', 'Nilai Muatan Elektron'], ['0,3 m', '1/300 mm', '3.10^8 m/s', '1,6.10^-19 C']]} />
       )
    }
    function TabelX(){
        return (
          <Tabel layout={Layout('Data Pengukuran Jarak Antar Orde Terang',200)} header={['Variasi','x (m)']} data={[['Merah', 'Kuning', 'Hijau', 'Biru'],[dataMerah.x, dataKuning.x, dataHijau.x, dataBiru.x]]} />
       )
    }
    function TabelStopVolt(){
        return (
          <Tabel layout={Layout('Data Stoping Voltage',300)} header={['Pengulangan','Merah', 'Kuning', 'Hijau', 'Biru' ]} data={[[1,2,3,4,5, 'Rata-Rata', 'Standart Deviasi'],
          [...dataMerah["stopping voltage"],dataStopVolt.Merah.mean,dataStopVolt.Merah.std.toFixed(5)],
          [...dataKuning["stopping voltage"],dataStopVolt.Kuning.mean,dataStopVolt.Kuning.std.toFixed(5)],
          [...dataHijau["stopping voltage"],dataStopVolt.Hijau.mean.toFixed(5),dataStopVolt.Hijau.std.toFixed(5) ], 
          [...dataBiru["stopping voltage"],dataStopVolt.Biru.mean,dataStopVolt.Biru.std.toFixed(5)]]}/>
       )
    }
    return(
        <>
        <TabelInformasi/>
        <TabelX/>
        <TabelStopVolt/>
        </>
    )
}

function TabelPerhitungan(){
    
        return (
            <Tabel layout={Layout('Data Perhitungan',200)} header={['Variasi',`${decodeURI('%CE%BB')} (nm)`,'Frekuensi(THz)', 'EK (Joule)' ]} data={[['Merah', 'Kuning', 'Hijau', 'Biru'],
            
            [(dataLambda.Merah*10**9).toFixed(5),(dataLambda.Kuning*10**9).toFixed(5),(dataLambda.Hijau*10**9).toFixed(5),(dataLambda.Biru*10**9).toFixed(5)],
            
            [(dataFrekuensi.Merah/10**12).toFixed(5),(dataFrekuensi.Kuning/10**12).toFixed(5),(dataFrekuensi.Hijau/10**12).toFixed(5),(dataFrekuensi.Biru/10**12).toFixed(5)],
            
            [dataEnergy.Merah,dataEnergy.Kuning, dataEnergy.Hijau,dataEnergy.Biru] ]} />
         )
    }


export {TabelPengukuran,TabelPerhitungan}