import { stopVolt, energyMax,frecuencyFormula } from "./functionMP3"

// Data Mentah
const dataMerah = {
    'x':6/100,
    'l' :0.3,
    'kisi' : 300,
    'stopping voltage':[1.570, 1.570, 1.580, 1.574, 1.576]
}

const dataKuning = {
    'x':5.3/100,
    'l' :0.3,
    'kisi' : 300,
    'stopping voltage':[1.824, 1.824, 1.824, 1.824, 1.82]
}
const dataHijau = {
    'x':5/100,
    'l' :0.3,
    'kisi' : 300,
    'stopping voltage':[1.984, 1.990, 1.960,1.965, 1.967]
}

const dataBiru = {
    'x':4.3/100,
    'l' :0.3,
    'kisi' : 300,
    'stopping voltage':[2.290, 2.293, 2.284, 2.294, 2.290]
}

// Data Pengolahan
const dataLambda = {
    'Merah' : frecuencyFormula(dataMerah.x).lambda,
    'Kuning' : frecuencyFormula(dataKuning.x).lambda,
    'Hijau' : frecuencyFormula(dataHijau.x).lambda,
    'Biru' : frecuencyFormula(dataBiru.x).lambda,
};
const dataFrekuensi = {
    'Merah' : frecuencyFormula(dataMerah.x).frec,
    'Kuning' : frecuencyFormula(dataKuning.x).frec,
    'Hijau' : frecuencyFormula(dataHijau.x).frec,
    'Biru' : frecuencyFormula(dataBiru.x).frec,
};

const dataStopVolt = {
    'Merah' : {
        mean : stopVolt(dataMerah["stopping voltage"]).Mean,
        std : stopVolt(dataMerah["stopping voltage"]).std,
    },
    'Kuning' : {
        mean : stopVolt(dataKuning["stopping voltage"]).Mean,
        std : stopVolt(dataKuning["stopping voltage"]).std,
    },
    'Hijau' : {
        mean : stopVolt(dataHijau["stopping voltage"]).Mean,
        std : stopVolt(dataHijau["stopping voltage"]).std,
    },
    'Biru' : {
        mean : stopVolt(dataBiru["stopping voltage"]).Mean,
        std : stopVolt(dataBiru["stopping voltage"]).std,
    },
}

const dataEnergy = {
    'Merah' : energyMax(dataStopVolt.Merah.mean),
    'Kuning' : energyMax(dataStopVolt.Kuning.mean),
    'Hijau' : energyMax(dataStopVolt.Hijau.mean),
    'Biru' : energyMax(dataStopVolt.Biru.mean),
}

export {dataMerah, dataKuning, dataHijau, dataBiru, dataFrekuensi,dataStopVolt,dataEnergy, dataLambda}