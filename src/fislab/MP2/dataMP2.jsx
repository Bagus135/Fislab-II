import { mean } from "simple-statistics"

let MuonFlux = {
    lt1 :[0.45, 0.46, 0.46],
    lt2 : [0.46, 0.53, 0.49],
    lt3 : [0.48, 0.48, 0.48],
    lt4 : [0.47, 0.48, 0.52],
    tinggi_lt : [0, 10, 20, 30], // 1 lantai dianggap 10 meter
    pengulangan : [1,2,3],
    mean :[],
}

const fizeauFocaultData = {
    Length : [5000,8633],
    n : [500,720],
    V_angular : [190,75]
}

// Cari Rata2 nya
const rata2lt1 = Number(mean(MuonFlux.lt1).toFixed(3))
const rata2lt2 = Number(mean(MuonFlux.lt2).toFixed(3))
const rata2lt3 = Number(mean(MuonFlux.lt3).toFixed(3))
const rata2lt4 = Number(mean(MuonFlux.lt4).toFixed(3))

MuonFlux.lt1.push(rata2lt1); // lantai 1
MuonFlux.lt2.push(rata2lt2); // lantai 2
MuonFlux.lt3.push(rata2lt3); // lantai 3
MuonFlux.lt4.push(rata2lt4); // lantai 4
MuonFlux.pengulangan.push("Rata - Rata");

// Tambah array mean pada objek MuonFlux
const Mean = [rata2lt1,rata2lt2,rata2lt3,rata2lt4];
MuonFlux.mean.push(...Mean)
export {MuonFlux, fizeauFocaultData}