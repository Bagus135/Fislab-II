import { PlotGraph, datasets } from '../../component/chart.jsx';
import { DataMentahW2, DataW2} from './dataW2.jsx';

function GrafikVariasi(){
  function GrafikRegresi1(){
    const dataPengukuranUdara = datasets('Pengukuran','scatter',DataMentahW2.beban1.udara.t,DataW2.beban1.udara.Amplitudo,'orange','orange',);
    const dataRegresiUdara = datasets('Regresi','line', DataW2.beban1.udara.regPlot.t,DataW2.beban1.udara.regPlot.A, 'red', 'red',)
    const dataPengukuranAir = datasets('Pengukuran','scatter',DataMentahW2.beban1.air.t,DataW2.beban1.air.Amplitudo,'green','green',)
    const dataRegresiAir = datasets('Regresi','line', DataW2.beban1.air.regPlot.t,DataW2.beban1.air.regPlot.A, 'blue', 'blue',)
  
    const PlotGrafik = <PlotGraph title='Grafik Regresi pada Beban 1' titleX={'Waktu (s)'} titleY={'Amplitude (m)'} datasets={[dataPengukuranAir,dataRegresiAir, dataPengukuranUdara, dataRegresiUdara]}/>
    return  PlotGrafik
  }

  function GrafikPerbandingan1(){
    const dataRegresiUdara = datasets('Regresi Udara','line', DataW2.beban1.udara.regPlot.t,DataW2.beban1.udara.regPlot.A, 'red', 'red',)
    const DataOsilasiUdara = datasets(' Osilasi Udara', 'line', DataW2.beban1.udara.wavePlot.t, DataW2.beban1.udara.wavePlot.y,'blue', 'blue', )
    const dataRegresiAir = datasets('Regresi Air','line', DataW2.beban1.air.regPlot.t,DataW2.beban1.air.regPlot.A, 'orange', 'orange',)
    const DataOsilasiAir = datasets('Osilasi Air', 'line', DataW2.beban1.air.wavePlot.t, DataW2.beban1.air.wavePlot.y,'green', 'green', );

    const PlotGrafik = <PlotGraph title='Grafik Osilasi pada Beban 1' titleX={'Waktu (s)'} titleY={'Amplitude (m)'} datasets={[dataRegresiAir, DataOsilasiAir, dataRegresiUdara,DataOsilasiUdara, ]}/>
    return  PlotGrafik
  }

  function GrafikRegresi2(){
    const dataPengukuranUdara = datasets('Pengukuran','scatter',DataMentahW2.beban2.udara.t,DataW2.beban2.udara.Amplitudo,'orange','orange',)
    const dataRegresiUdara = datasets('Regresi','line', DataW2.beban2.udara.regPlot.t,DataW2.beban2.udara.regPlot.A, 'red', 'red',)
    const dataPengukuranAir = datasets('Pengukuran','scatter',DataMentahW2.beban2.air.t,DataW2.beban2.air.Amplitudo,'green','green',)
    const dataRegresiAir = datasets('Regresi','line', DataW2.beban2.air.regPlot.t, DataW2.beban2.air.regPlot.A, 'blue', 'blue',)

    const PlotGrafik = <PlotGraph title='Grafik Osilasi Pegas pada Air  dengan 2 Beban' titleX={'Waktu (s)'} titleY={'Amplitude (m)'} datasets={[dataPengukuranAir,dataRegresiAir,dataPengukuranUdara,dataPengukuranAir]}/>
    return  PlotGrafik
  }

  function GrafikPerbandingan2(){
    const dataRegresiUdara = datasets('Regresi Udara','line', DataW2.beban2.udara.regPlot.t,DataW2.beban2.udara.regPlot.A, 'red', 'red',)
    const DataOsilasiUdara = datasets('Osilasi Udara', 'line', DataW2.beban2.udara.wavePlot.t, DataW2.beban2.udara.wavePlot.y,'blue', 'blue', )
    const dataRegresiAir = datasets('Regresi Air','line', DataW2.beban2.air.regPlot.t, DataW2.beban2.air.regPlot.A, 'orange', 'orange',)
    const DataOsilasiAir = datasets('Osilasi Air', 'line', DataW2.beban2.air.wavePlot.t, DataW2.beban2.air.wavePlot.y,'green', 'green', )
  
    const PlotGrafik = <PlotGraph title='Grafik Osilasi Pegas pada Beban 2' titleX={'Waktu (s)'} titleY={'Amplitude (m)'} datasets={[dataRegresiUdara,DataOsilasiUdara,dataRegresiAir,DataOsilasiAir]}/>
    return  PlotGrafik
  }

  return (
    <div className='GrafikVariasiW2'>
      <GrafikRegresi1/>
      <GrafikRegresi2/>
      <GrafikPerbandingan1/>
      <GrafikPerbandingan2/>
    </div>
  )
} 
  
export default GrafikVariasi