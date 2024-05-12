import { PlotGraph,datasets,errorBar} from "../../component/chart";
import { dataFrekuensi,dataStopVolt } from "./dataMP3";
import { dataRegresiX,dataRegresiY, Gradient, Interceps } from "./regresiMP3";

const dataX = [dataFrekuensi.Merah,dataFrekuensi.Kuning,dataFrekuensi.Hijau,dataFrekuensi.Biru];
const dataY = [dataStopVolt.Merah.mean, dataStopVolt.Kuning.mean,dataStopVolt.Hijau.mean, dataStopVolt.Biru.mean];
const dataDeviasi = [dataStopVolt.Merah.std,dataStopVolt.Kuning.std,dataStopVolt.Hijau.std, dataStopVolt.Biru.std];

function GrafikLED(){
    const grafikData = datasets('Data Pengukuran','scatter',dataX, dataY, 'red','red');
    const grafikRegresi = datasets(`Garis Regresi [y = ${(Gradient*10**34).toFixed(5)}*10^-34x ${(Interceps*10**20).toFixed(5)}*10^-20]`, 'line',dataRegresiX, dataRegresiY , 'blue', 'blue');
    const ErrorBar = errorBar('y','Error Bar',dataX, dataY,dataDeviasi)
   
    const PlotGrafik = <PlotGraph title='Grafik Energi Fotolistrik LED' titleX={'frekuensi (Hz)'} titleY={'eV (Joule)'} datasets={[grafikData, grafikRegresi, ErrorBar]}/>
    return  PlotGrafik
  }

  export default GrafikLED