import { FloatingMethod, FallRaiseMethod } from "./functionMP1"
import MetodeSturges from "./metodeSturges"

//Data Mentah
const DataMentah = {
    Voltage : [588,589,588,585,584,585,584,552,586,588,568,585,583,588,438,574,585,586,585,568],
    raiseTime : [8.933,6.747,3.616,12.27,8.953,8.662,8.798,10.786,11.937,9.152,14.616,13.849,18.816,8.779,14.109,10.012,11.15,11.849,7.52,6.178],
    fallTime : [9.831,7.665,9.64,12.534,3.592,7.636,6.786,6.718,8.823,6.918,9.77,9.593,11.022,12.965,15.436,12.737,7.687,11.905,7.133,6.927],
 }

 const DataFranckHertz ={
    "1":[9.45, 9.45, 17.22],
    "2":[8.86, 10.81 ],
    "3":[7.92, 13.95, 3.84, 0.6],
    "4":[6.4, 6.92, 13.14, 4.11],
    "5":[15.1, 5.43, 4.9],
    "6":[9.9, 5.15, 5.15, 6.42, 3.35],
    "7":[2.07, 3.4, 3.1, 2.25, 4.17],
    "8":[5.46, 14.5],
    "9":[0.54, 9.56, 9.87, 6.16],
    "10":[3.0, 13.7, 5.41, 5.4, 3.91],
    "11":[11.27, 2.33, 7.95],
    "12":[4.1, 9.45, 8.8, 9.4],
    "13":[12.55, 8.73],
    "14":[5.65, 4.65, 6.96, 2.07, 2.05],
    "15":[8.54, 1.27, 5.2, 4.1, 2.1]
}

// data q minyak
const qMinyak = {
    dataFloating : FloatingMethod(DataMentah),
    dataFallRaise : FallRaiseMethod(DataMentah), 
}

// DiKelompokkan menggunakan metode sturges

const qSturges = {
    dataFloating : MetodeSturges(qMinyak.dataFloating.oilCharge),
    dataFallRaise : MetodeSturges(qMinyak.dataFallRaise),
}



export {qMinyak, qSturges, DataFranckHertz, DataMentah,}