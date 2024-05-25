import { qMinyak } from "./dataMilikan"; 
import { max,min, mean} from "simple-statistics";

function selisih(data){
    const dataHisto = [];
    for(let i = 0; i< data.length; i++){
      for(let j = i+1; j < data.length; j++){
        dataHisto.push(Number(Math.abs(data[i]-data[j]).toFixed(2)))
      }
    }
return dataHisto
}

function Modus(data,modus){
  const array = [];
  console.log(data)
  for(let i = 0; i < data.length; i++){
    if(modus-1 <= data[i] &&  data[i] < modus){
      array.push(data[i])
    }
  }
  return array
}

const DataSelisih = {
    floating : selisih(qMinyak.dataFloating.oilCharge),
    fallRaise : selisih(qMinyak.dataFallRaise)

  }



const InfoHisto = {
  floating : {
    'max' : max(DataSelisih.floating),
    'min' : min(DataSelisih.floating),
    'length' : DataSelisih.floating.length,
    'mean' : mean(Modus(DataSelisih.floating, 1))
  },
  fallRaise : {
    'max' : max(DataSelisih.fallRaise),
    'min' : min(DataSelisih.fallRaise),
    'length' : DataSelisih.fallRaise.length,
    'mean' : mean(Modus(DataSelisih.fallRaise,2))
  },
}


export{DataSelisih, InfoHisto}