import { PlotGraph,datasets} from "../../component/chart";
import { qSturges } from "./dataMP1";
import { DataFrankHertzSturges } from "./franckHertz";

function MilikanHistobar(){
    function FloatingMethod(){
        const grafikData = datasets('Data','bar',qSturges.dataFloating.rangeClass,qSturges.dataFloating.classFrec,'blue','blue');
        const PlotGrafik = <PlotGraph title='Histobar Floating Method' titleX={'q-Range (10^-19 C)'} titleY={'Frekuensi'} datasets={[grafikData]} type={'none'}/>
        return  PlotGrafik
    }
    function FallRaiseMethod(){
        const grafikData = datasets('Data','bar',qSturges.dataFallRaise.rangeClass,qSturges.dataFallRaise.classFrec,'blue','blue');
        const PlotGrafik = <PlotGraph title='Histobar Fall-Raise Method' titleX={'q-Range (10^-19 C)'} titleY={'Frekuensi'} datasets={[grafikData]} type={'none'}/>
        return  PlotGrafik
    }
    return(
        <>
        <FloatingMethod/>
        <FallRaiseMethod/>
        </>
    )
  }

function FrankHertzHistobar(){
    const grafikData = datasets('Data','bar',DataFrankHertzSturges.rangeClass,DataFrankHertzSturges.classFrec, 'blue','blue');
        const PlotGrafik = <PlotGraph title='Histobar Franck-Hertz' titleX={'Energy'} titleY={'Frekuensi'} datasets={[grafikData]} type={'none'}/>
        return  PlotGrafik
}

export {MilikanHistobar, FrankHertzHistobar}