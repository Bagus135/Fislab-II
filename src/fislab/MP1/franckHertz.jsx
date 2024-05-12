import { DataFranckHertz } from "./dataMP1";
import MetodeSturges from "./metodeSturges";

function GroupingEnergy(data){
    let Energy = []
    let E = [];
    for(let i = 0; i<5; i++){
        E = []
        for(let j =1; j <= 15; j++){
            if(data[`${j}`][i]===undefined){
                E.push(`-`)
            } else{
                E.push(data[`${j}`][i])
            }
        }
        console.log(E)   
    Energy.push(E)    
    }
    return Energy
}

function MergeData(data){
    let Merge = []
    for(let j =1; j <= 15; j++){
        Merge = Merge.concat(data[`${j}`])
    }
    return Merge
}

const DataTabelFrankHertz = GroupingEnergy(DataFranckHertz);

const DataMerge = MergeData(DataFranckHertz);

const DataFrankHertzSturges = MetodeSturges(DataMerge) 

export {DataTabelFrankHertz, DataMerge, DataFrankHertzSturges}

