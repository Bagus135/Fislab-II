import { qMinyak } from "./dataMilikan"; 

function selisih(data){
    const dataHisto = [];
    for(let i = 0; i< data.length; i++){
      for(let j = i+1; j < data.length; j++){
        dataHisto.push(Number(Math.abs(data[i]-data[j]).toFixed(2)))
      }
    }
return dataHisto
}

const DataSelisih = {
    floating : selisih(qMinyak.dataFloating.oilCharge),
    fallRaise : selisih(qMinyak.dataFallRaise)

}

export{DataSelisih}