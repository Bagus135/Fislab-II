// Didapatkan Data Perhitungan rata-rata panjang gelombang dari masing-masing warna 
import { PlotGraph,datasets } from "../../component/chart"
import { linearRegression, max, min } from "simple-statistics"

const DataGrafikMP5 = {
    helium: {
        warna : ["Merah", "Kuning", "Biru", "Nila", "Ungu"],
        lambda : [1/335.569, 1/292.855, 1/248.747, 1/228.346, 1/218.957],
        indeksbias : [1.154, 1.17, 1.175, 1.196, 1.205],
        dataRegresi : [[1/335.569,1.154],[1/292.855,1.17],[1/248.747, 1.175], [1/228.346, 1.196],[1/218.957, 1.205]]
    },
    neon:{
        warna : ['Merah', 'Jingga', 'Kuning', 'Hijau', 'Biru'],
        lambda : [1/431.828, 1/402.441, 1/374.341, 1/346.811, 1/314.805],
        indeksbias : [1.158, 1.16, 1.164, 1.174, 1.176],
        dataRegresi : [[1/431.828,1.158],[1/402.441, 1.16], [1/374.341, 1.164], [1/346.811, 1.174],[1/314.805, 1.176]]
    },
    hidrogen : {
        warna : ["Merah", "Biru"],
        lambda : [1/513.172, 1/423.341],
        indeksbias: [1.165, 1.195],
        dataRegresi : [[1/513.172, 1.165],[1/423.341, 1.195]]
    },
}

const regresiHelium = linearRegression(DataGrafikMP5.helium.dataRegresi)
const regresiNeon = linearRegression(DataGrafikMP5.neon.dataRegresi);
const regresiHidrogen = linearRegression(DataGrafikMP5.hidrogen.dataRegresi);

console.log(regresiHelium)

function dataRegresi(Data, Dataregresi){
    
    // a adalah titik awal, dan b adalah titik akhir garis regresi
    const a = min(Data)-0.0002
    const b = max(Data)+0.0002
    
    const x = [a, b]
    const y = [Dataregresi.m*a+Dataregresi.b, Dataregresi.m*b+Dataregresi.b];

    return {x,y}
}


function GrafikMP5(){
    const plotRegresiHelium = dataRegresi(DataGrafikMP5.helium.lambda, regresiHelium)
    const plotRegresiNeon = dataRegresi(DataGrafikMP5.neon.lambda, regresiNeon);
    const plotRegresiHidrogen = dataRegresi(DataGrafikMP5.hidrogen.lambda, regresiHidrogen);

    function GrafikHelium(){
        const grafikData = datasets('Data Perhitungan','scatter',DataGrafikMP5.helium.lambda,DataGrafikMP5.helium.indeksbias,'blue','blue')
        const grafikRegresi = datasets(`Garis Regresi [y = ${regresiHelium.m.toFixed(5)}x + ${regresiHelium.b.toFixed(3)}]`,'line',plotRegresiHelium.x,plotRegresiHelium.y,'red','red')
        const PlotGrafik = <PlotGraph title='Helium' titleX={`1 / ${decodeURI('%CE%BB')}  (nm^-1)`} titleY={'Indeks Bias'} datasets={[grafikData,grafikRegresi]}/>
        return  PlotGrafik
    }
    function GrafikNeon(){
        const grafikData = datasets('Data Perhitungan','scatter',DataGrafikMP5.neon.lambda,DataGrafikMP5.neon.indeksbias,'blue','blue')
        const grafikRegresi = datasets(`Garis Regresi [y = ${regresiNeon.m.toFixed(5)}x + ${regresiNeon.b.toFixed(3)}]`,'line',plotRegresiNeon.x, plotRegresiNeon.y,'red','red')
        const PlotGrafik = <PlotGraph title='Neon' titleX={`1/${decodeURI('%CE%BB')}  (nm^-1)`} titleY={'Indeks Bias'} datasets={[grafikData,grafikRegresi]}/>
        return  PlotGrafik
    }
    function GrafikHidrogen(){
        const grafikData = datasets('Data Perhitungan','scatter',DataGrafikMP5.hidrogen.lambda,DataGrafikMP5.hidrogen.indeksbias,'blue','blue');
        const grafikRegresi = datasets(`Garis Regresi [y = ${regresiHidrogen.m.toFixed(5)}x + ${regresiHidrogen.b.toFixed(3)}]`, 'line', plotRegresiHidrogen.x, plotRegresiHidrogen.y,'red','red')
        const PlotGrafik = <PlotGraph title='Hidrogen' titleX={`1 / ${decodeURI('%CE%BB')}  (nm^-1)`} titleY={'Indeks Bias'} datasets={[grafikData, grafikRegresi]}/>
        return  PlotGrafik
    }
    return (
        <div className='w-full'>
            <GrafikHelium/>
            <br/>
            <GrafikNeon/>
            <br/>
            <GrafikHidrogen/>
        </div>
    )

}

export default GrafikMP5