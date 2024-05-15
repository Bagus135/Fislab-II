import ExecutionW3 from "./functionW3";

// data mentah
const DataW3 = {
    "5gr" :  [5.2, 5.95, 5.5, 6.2, 6],
    "10gr" : [12.85, 12.95, 12.20, 12.80, 13.05],
    "15gr" : [18.15, 17.75, 18.20, 17.90, 17.80],
    "20gr" : [24.10, 24.15, 24.20, 24.25, 24.20],
    "25gr" : [28.5, 28.8, 28.75, 28.85, 28.7],
    "30gr" : [35.45, 35.3, 35.35, 35.5, 35.45],
};

// data pengolahan 
const DataOlahW3 = ExecutionW3(DataW3) 

export {DataW3, DataOlahW3}
