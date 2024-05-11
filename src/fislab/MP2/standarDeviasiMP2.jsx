import { standardDeviation } from "simple-statistics";
import { MuonFlux } from "./dataMP2";

const Deviasi = [];
Deviasi.push(
    parseFloat(standardDeviation(MuonFlux.lt1)
    .toFixed(5))
)
Deviasi.push(
    parseFloat(standardDeviation(MuonFlux.lt2)
    .toFixed(5)))
Deviasi.push(
    parseFloat(standardDeviation(MuonFlux.lt3)
    .toFixed(5)))
Deviasi.push(
    parseFloat(standardDeviation(MuonFlux.lt4)
    .toFixed(5)))

export default Deviasi