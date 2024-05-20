import { standardDeviation } from "simple-statistics";
import { DataMentah, DataFranckHertz } from "./dataMP1";

const stanDevMilikan = {
    Voltage : standardDeviation(DataMentah.Voltage).toFixed(5),
    fallTime : standardDeviation(DataMentah.fallTime).toFixed(5),
    raiseTime : standardDeviation(DataMentah.raiseTime).toFixed(5),
};


function GroupEnergy(data){
    let Energy = []
    let E = [];
    for(let i = 0; i<5; i++){
        E = []
        for(let j =1; j <= 15; j++){
            if(data[`${j}`][i]===undefined){
            } else{
                E.push(data[`${j}`][i])
            }
        }
    Energy.push(E)    
    }
    return Energy
}

const DataEnergyFranckHertz =  GroupEnergy(DataFranckHertz);

const stanDevFranckHertz = {
    energy1 : standardDeviation(DataEnergyFranckHertz[0]).toFixed(5),
    energy2 : standardDeviation(DataEnergyFranckHertz[1]).toFixed(5),
    energy3 : standardDeviation(DataEnergyFranckHertz[2]).toFixed(5),
    energy4 : standardDeviation(DataEnergyFranckHertz[3]).toFixed(5),
    energy5 : standardDeviation(DataEnergyFranckHertz[4]).toFixed(5),
};

export{ stanDevMilikan, stanDevFranckHertz};