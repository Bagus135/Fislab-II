import { mean, standardDeviation, linearRegression} from "simple-statistics";

function velocity(data){
    const v = [];
    const vKuadrat = [];
    const stanDev = [];
    let lambda = 0;
    const frecuency = 50 // Hz
    for(let h = 0; h < data.length; h++ ){
        const a = []
        for(let i = 0; i < data[h].length; i ++){
            lambda = data[h][i]*0.01/((i+1)*0.5)
            a.push(lambda*frecuency)
        };
        v.push(Number((mean(a)).toFixed(5)))
        vKuadrat.push(Number((mean(a)**2).toFixed(5)))
        stanDev.push(Number((standardDeviation(a)**2).toFixed(5))) 
    }
    
    return {v, stanDev, vKuadrat}
};

function force(data){
    const hasil = [];
    const gravity = 9.8
    for(let i = 0; i < data.length; i ++){
        hasil.push(Number((data[i]*gravity/1000).toFixed(5)))
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

function ErrorData(miuUkur, regresi){
    miuUkur = Number(miuUkur.toFixed(5))
    const miuRegresi = Number((1/regresi).toFixed(5))
    const nilaiError = `${Number((Math.abs(miuRegresi- miuUkur)*100/miuUkur).toFixed(5))}%`
    return{miuUkur, miuRegresi, nilaiError}
}

function ExecutionW4(jenisTali){
    const v = velocity(jenisTali.panjangSegmen);
    const F = force(jenisTali.beban);
    const Regresi = Regression(F,v.vKuadrat);
    const Regresiplot = plotRegresi(Regresi);
    const dataError = ErrorData(jenisTali.rapatMassa, Regresi.m)
    return {v,F, Regresi, Regresiplot, dataError}
}

export default ExecutionW4