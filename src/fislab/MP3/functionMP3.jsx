import { mean, standardDeviation } from "simple-statistics";
function frecuencyFormula(x) {
    const l = 0.3; const n = 1; const d= 1/300/1000  // meter
    const lambda = d*x/(n*(l**2 + x**2)**0.5)
    const  frec = 3*(10**8)/ lambda
    return frec  
}

function stopVolt(data){
    const Mean = mean(data);
    const std = standardDeviation(data);
    return {Mean, std}
};

function energyMax(stopVolt){
    const Ek = stopVolt*1.6*(10**-19);
    return Ek
}

export{frecuencyFormula,stopVolt,energyMax}