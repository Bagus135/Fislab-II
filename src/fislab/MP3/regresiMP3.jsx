import { linearRegression } from "simple-statistics";
import { dataEnergy, dataStopVolt, dataFrekuensi } from "./dataMP3";

const dataRegresi = [[dataFrekuensi.Merah,dataEnergy.Merah],[dataFrekuensi.Kuning,dataEnergy.Kuning], [dataFrekuensi.Hijau, dataEnergy.Hijau],[dataFrekuensi.Biru,dataEnergy.Biru]]

const Regresi = linearRegression(dataRegresi);

const Gradient = Regresi.m;
const Interceps = Regresi.b;

const dataRegresiX = [(dataFrekuensi.Merah-15000000000000), (dataFrekuensi.Biru + 10000000000000)]
const dataRegresiY = [(Gradient*dataRegresiX[0]+ Interceps)/1.6*(10**19), (Gradient*dataRegresiX[1] +Interceps)/1.6*(10**19)]

export{Gradient,Interceps, dataRegresiX, dataRegresiY}