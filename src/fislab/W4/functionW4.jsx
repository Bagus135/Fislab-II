import { mean, standardDeviation, linearRegression} from "simple-statistics";

function velocity(data){
    const v = [];
    const vKuadrat = [];
    const stanDev = [];
    let lambda = 0;
    const frecuency = 60 // Hz
    for(let h = 0; h < data.length; h++ ){
        const a = []
        for(let i = 0; i < data[h].length; i ++){
            lambda = data[h][i]*0.01/((i+1)*0.5)
            a.push(lambda*frecuency)
        };
        v.push(mean(a))
        vKuadrat.push(mean(a)**2)
        stanDev.push(standardDeviation(a)**2) 
    }
    
    return {v, stanDev, vKuadrat}
};

function force(data){
    const hasil = [];
    const gravity = 9.8
    for(let i = 0; i < data.length; i ++){
        hasil.push(data[i]*gravity/1000)
    }
    return hasil 
}

function Regression(dataX,dataY){
    const a = [];
    for(let i = 0; i < dataX.length ; i++){
        a.push([dataX[i], dataY[i]])
    }
    return linearRegression(a)
}

function plotRegresi(dataRegresi){
    const plotX = []; const plotY = [];
    for(let i = 0; i <2; i ++){
        plotX.push(i*4)
        plotY.push(i*4*dataRegresi.m + dataRegresi.b)
    }
    return{plotX, plotY}
}

function ExecutionW4(jenisTali){
    const v = velocity(jenisTali.panjangSegmen);
    const F = force(jenisTali.beban);
    const Regresi = Regression(F,v.vKuadrat);
    const Regresiplot = plotRegresi(Regresi)
    return {v,F, Regresi, Regresiplot}
}

export default ExecutionW4