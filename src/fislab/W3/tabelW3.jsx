import { Tabel } from "../../component/table";
import { DataOlahW3, DataW3 } from "./dataW3";

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
    function TabelPengukuran5gr(){
        return (
            <div className=''>
          <Tabel layout={Layout('Data Pengukuran Konsentrasi 0,05gr/ml',300)} header={['Pengulangan',`Sudut Rotasi(${decodeURI('%C2%B0')})`]} data={[[1,2,3,4,5,"Rata-Rata"],[...DataW3["5gr"],DataOlahW3.dataMeanW3.dataMean[0]]]} />
         </div>
       )
    } 
    function TabelPengukuran10gr(){
        return (
            <div className=''>
          <Tabel layout={Layout('Data Pengukuran Konsentrasi 0,1gr/ml',300)} header={['Pengulangan',`Sudut Rotasi(${decodeURI('%C2%B0')})`]} data={[[1,2,3,4,5,"Rata-Rata"],[...DataW3["10gr"],DataOlahW3.dataMeanW3.dataMean[1]]]} />
         </div>
       )
    } 
    function TabelPengukuran15gr(){
        return (
            <div className=''>
          <Tabel layout={Layout('Data Pengukuran Konsentrasi 0,15gr/ml',300)} header={['Pengulangan',`Sudut Rotasi(${decodeURI('%C2%B0')})`]} data={[[1,2,3,4,5,"Rata-Rata"],[...DataW3["15gr"],DataOlahW3.dataMeanW3.dataMean[2]]]}/>
         </div>
       )
    } 
    function TabelPengukuran20gr(){
        return (
            <div className=''>
          <Tabel layout={Layout('Data Pengukuran Konsentrasi 0,2gr/ml',300)} header={['Pengulangan',`Sudut Rotasi(${decodeURI('%C2%B0')})`]} data={[[1,2,3,4,5,"Rata-Rata"],[...DataW3["20gr"],DataOlahW3.dataMeanW3.dataMean[3]]]} />
         </div>
       )
    } 
    function TabelPengukuran25gr(){
        return (
            <div className=''>
          <Tabel layout={Layout('Data Pengukuran Konsentrasi 0,25gr/ml',300)} header={['Pengulangan',`Sudut Rotasi(${decodeURI('%C2%B0')})`]} data={[[1,2,3,4,5,"Rata-Rata"],[...DataW3["25gr"],DataOlahW3.dataMeanW3.dataMean[4]]]} />
         </div>
       )
    } 
    function TabelPengukuran30gr(){
        return (
            <div className=''>
          <Tabel layout={Layout('Data Pengukuran Konsentrasi 0,3gr/ml',300)} header={['Pengulangan',`Sudut Rotasi(${decodeURI('%C2%B0')})`]} data={[[1,2,3,4,5,"Rata-Rata"],[...DataW3["30gr"],DataOlahW3.dataMeanW3.dataMean[5]]]} />
         </div>
       )
    } 
    return(
        <div>
        <TabelPengukuran5gr/>
        <TabelPengukuran10gr/>
        <TabelPengukuran15gr/>
        <TabelPengukuran20gr/>
        <TabelPengukuran25gr/>
        <TabelPengukuran30gr/>
        </div>
    )
  }

function TabelPerbandinganC(){

    return(
        <Tabel layout={Layout('Data Perbandingan Konsentrasi Gula',300)} header={['Konsentrasi Eksperimental (gr/ml)',`Rata-Rata Konsentrasi Teoritis (gr/ml)`]} data={[[0.05,0.1,0.15,0.2,0.25,0.3],DataOlahW3.c_hitung]} />
     )
}

export{TabelPengukuran, TabelPerbandinganC}