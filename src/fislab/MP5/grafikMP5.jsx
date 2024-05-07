// Didapatkan Data Perhitungan rata-rata panjang gelombang dari masing-masing warna 
import { PlotGraph,datasets } from "../../component/chart"

const DataGrafikMP5 = {
    helium: {
        warna : ["Merah", "Kuning", "Biru", "Nila", "Ungu"],
        lambda : [335.569, 292.855, 248.747, 228.346, 218.957],
        indeksbias : [1.154, 1.17, 1.175, 1.196, 1.205]
    },
    neon:{
        warna : ['Merah', 'Jingga', 'Kuning', 'Hijau', 'Biru'],
        lambda : [431.828, 402.441, 374.341, 346.811, 314.805],
        indeksbias : [1.158, 1.16, 1.164, 1.174, 1.176]
    },
    hidrogen : {
        warna : ["Merah", "Biru"],
        lambda : [513.172, 423.341],
        indeksbias: [1.165, 1.195]
    },
}
function GrafikMP5(){
    
    function GrafikHelium(){
        const grafikData = datasets('Data Perhitungan','line',DataGrafikMP5.helium.lambda,DataGrafikMP5.helium.indeksbias,'blue','blue')
        const PlotGrafik = <PlotGraph title='Helium' titleX={'Panjang Gelombang (nm)'} titleY={'Indeks Bias'} datasets={[grafikData]}/>
        return  PlotGrafik
    }
    function GrafikNeon(){
        const grafikData = datasets('Data Perhitungan','line',DataGrafikMP5.neon.lambda,DataGrafikMP5.neon.indeksbias,'blue','blue')
        const PlotGrafik = <PlotGraph title='Neon' titleX={'Panjang Gelombang (nm)'} titleY={'Indeks Bias'} datasets={[grafikData]}/>
        return  PlotGrafik
    }
    function GrafikHidrogen(){
        const grafikData = datasets('Data Perhitungan','line',DataGrafikMP5.hidrogen.lambda,DataGrafikMP5.hidrogen.indeksbias,'blue','blue')
        const PlotGrafik = <PlotGraph title='Hidrogen' titleX={'Panjang Gelombang (nm)'} titleY={'Indeks Bias'} datasets={[grafikData]}/>
        return  PlotGrafik
    }
    return (
        <div className="h-full, w-1/2">
            <GrafikHelium/>
            <GrafikNeon/>
            <GrafikHidrogen/>
        </div>
    )

}

export default GrafikMP5