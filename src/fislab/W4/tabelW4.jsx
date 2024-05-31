import { Tabel } from "../../component/table";
import { dataW4, dataMentah} from "./dataW4";

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
function TabelBeban(){
       return (
         <Tabel layout={Layout('Data Pengukuran Beban',200)} header={['Variasi','Nilai (gr)']} data={[[`Beban 1`, 'Beban 2', 'Beban 3', 'Beban 4', ' Beban 5'], dataMentah.taliCoklat.beban]} />
      )
}

function TabelSegmen(){
    return (
    <>
    <Tabel layout={Layout('Data Pengukuran Segmen Tali Putih',150)} header={['Segmen',`Beban 1 (cm)`, 'Beban 2 (cm)', 'Beban 3 (cm)', 'Beban 4 (cm)', 'Beban 5 (cm)']} data={[[1,2,3],...dataMentah.taliPutih.panjangSegmen]} />   
    <Tabel layout={Layout('Data Pengukuran Segmen Tali Coklat',150)} header={['Segmen',`Beban 1 (cm)`, 'Beban 2 (cm)', 'Beban 3 (cm)', 'Beban 4 (cm)', 'Beban 5 (cm)']} data={[[1,2,3],...dataMentah.taliCoklat.panjangSegmen]} />   
    <Tabel layout={Layout('Data Pengukuran Segmen Tali Nilon',150)} header={['Segmen',`Beban 1 (cm)`, 'Beban 2 (cm)', 'Beban 3 (cm)', 'Beban 4 (cm)', 'Beban 5 (cm)']} data={[[1,2,3],...dataMentah.taliNilon.panjangSegmen]} />   
    </>
    )
}

function TabelPerhitungan(){
    return(
        <>
        <Tabel layout={Layout('Data Perhitungan Tali Putih',200)} header={['Variasi', `Gaya (N)`, `v (m/s)`, `v^2 (m^2/s^2)`, `Standar Deviasi v^2`]} data={[[`Beban 1`, 'Beban 2', 'Beban 3', 'Beban 4', ' Beban 5'], dataW4.taliPutih.F, dataW4.taliPutih.v.v, dataW4.taliPutih.v.vKuadrat, dataW4.taliPutih.v.stanDev]} />   
        <Tabel layout={Layout('Data Perhitungan Tali Coklat',200)} header={['Variasi', `Gaya (N)`, `v (m/s)`, `v^2 (m^2/s^2)`,`Standar Deviasi v^2`]} data={[[`Beban 1`, 'Beban 2', 'Beban 3', 'Beban 4', ' Beban 5'], dataW4.taliCoklat.F, dataW4.taliCoklat.v.v, dataW4.taliCoklat.v.vKuadrat,dataW4.taliCoklat.v.stanDev]} />   
        <Tabel layout={Layout('Data Perhitungan Tali Nilon',200)} header={['Variasi', `Gaya (N)`, `v (m/s)`, `v^2 (m^2/s^2)`,`Standar Deviasi v^2`]} data={[[`Beban 1`, 'Beban 2', 'Beban 3', 'Beban 4', ' Beban 5'], dataW4.taliNilon.F, dataW4.taliNilon.v.v, dataW4.taliNilon.v.vKuadrat,dataW4.taliNilon.v.stanDev]} />   
        </>
    )
}

function TabelMiu(){
    return(
        <>
        <Tabel layout={Layout('Data Perhitungan Rapat Massa Tali',200)} header={['Variasi Tali', `&#956; ukur (kg/m)`, `&#956; regresi (kg/m)`, `error`,]} 
        data={  [[`Tali Putih`, `Tali Coklat`, `Tali Nilon`],
                [dataW4.taliPutih.dataError.miuUkur,dataW4.taliCoklat.dataError.miuUkur,dataW4.taliNilon.dataError.miuUkur],
                [dataW4.taliPutih.dataError.miuRegresi,dataW4.taliCoklat.dataError.miuRegresi,dataW4.taliNilon.dataError.miuRegresi],
                [dataW4.taliPutih.dataError.nilaiError,dataW4.taliCoklat.dataError.nilaiError,dataW4.taliNilon.dataError.nilaiError]]} />   
        </>
    )
}

export {TabelBeban, TabelSegmen, TabelPerhitungan, TabelMiu}