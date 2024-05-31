import { PlotGraph, datasets,errorBar } from "../../component/chart";
import { dataW4, dataMentah} from "./dataW4";

function GrafikTaliPutih(){
    console.log(dataW4)
    console.log(dataMentah)
    const dataPengukuran = datasets("Data Pengukuran", "scatter", dataW4.taliPutih.F, dataW4.taliPutih.v.vKuadrat, 'red', 'red')
    const dataRegresi = datasets(`Garis Regresi [ y = ${dataW4.taliPutih.Regresi.m.toFixed(5)}x + ${dataW4.taliPutih.Regresi.b.toFixed(5)} ]`, 'line', dataW4.taliPutih.Regresiplot.plotX, dataW4.taliPutih.Regresiplot.plotY, 'blue', 'blue');
    const ErrorBar = errorBar('y','Error Bar',dataW4.taliPutih.F,dataW4.taliPutih.v.vKuadrat,dataW4.taliPutih.v.stanDev)
    const PlotGrafik = <PlotGraph title='Grafik Gelobang Stationer pada Tali Putih' titleY={`v^2 (m/s)^2`} titleX={'Gaya (N)'} datasets={[dataPengukuran,dataRegresi, ErrorBar]}/>
    return  PlotGrafik
}
function GrafikTaliCoklat(){
    const dataPengukuran = datasets("Data Pengukuran", "scatter", dataW4.taliCoklat.F, dataW4.taliCoklat.v.vKuadrat, 'red', 'red')
    const dataRegresi = datasets(`Garis Regresi [ y = ${dataW4.taliCoklat.Regresi.m.toFixed(5)}x + ${dataW4.taliCoklat.Regresi.b.toFixed(5)} ]`, 'line', dataW4.taliCoklat.Regresiplot.plotX, dataW4.taliCoklat.Regresiplot.plotY, 'blue', 'blue');
    const ErrorBar = errorBar('y','Error Bar',dataW4.taliCoklat.F,dataW4.taliCoklat.v.vKuadrat,dataW4.taliCoklat.v.stanDev)
    const PlotGrafik = <PlotGraph title='Grafik Gelobang Stationer pada Tali Coklat' titleY={`v^2 (m/s)^2`} titleX={'Gaya (N)'} datasets={[dataPengukuran,dataRegresi, ErrorBar]}/>
    return  PlotGrafik
}
function GrafikTaliNilon(){
    const dataPengukuran = datasets("Data Pengukuran", "scatter", dataW4.taliNilon.F, dataW4.taliNilon.v.vKuadrat, 'red', 'red')
    const dataRegresi = datasets(`Garis Regresi [ y = ${dataW4.taliNilon.Regresi.m.toFixed(5)}x + ${dataW4.taliNilon.Regresi.b.toFixed(5)} ]`, 'line', dataW4.taliNilon.Regresiplot.plotX, dataW4.taliNilon.Regresiplot.plotY, 'blue', 'blue');
    const ErrorBar = errorBar('y','Error Bar',dataW4.taliNilon.F,dataW4.taliNilon.v.vKuadrat,dataW4.taliNilon.v.stanDev)
    const PlotGrafik = <PlotGraph title='Grafik Gelobang Stationer pada Tali Nilon' titleY={`v^2 (m/s)^2`} titleX={'Gaya (N)'} datasets={[dataPengukuran,dataRegresi, ErrorBar]}/>
    return  PlotGrafik
}

export {GrafikTaliPutih, GrafikTaliNilon, GrafikTaliCoklat}
