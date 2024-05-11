import { max, min } from "simple-statistics";
import DataMP1 from "./dataMP1";

function metodeSturges(Data){
    // jumlah data
    const n = Data.length;
    const Range = max(Data) - min(Data)
    const nClass = 1 + Math.ceil(Math.log2(n)) 
    const h = Range/nClass;

    
}