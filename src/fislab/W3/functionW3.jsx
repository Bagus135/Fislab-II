import { mean, linearRegression,standardDeviation } from "simple-statistics"

function Mean(data){
    const dataMean = [];
    const dataRegresi = [];
    const dataPlot = {
        x : [],
        y : [],
    }
    const Deviasi = [];
    let average = 0;
    for(let i = 5; i <= 30; i +=5 ){
       average = mean(data[`${i}gr`])
       dataMean.push(average)
       dataRegresi.push([i/100, average]) // [konsentrasi, sudut]
       dataPlot.y.push(average)
       dataPlot.x.push(i/100)

        Deviasi.push(standardDeviation(data[`${i}gr`]))
    }
   return {dataMean, dataRegresi, dataPlot, Deviasi} 
}


function C_hitung(meanAngle){
    function Equation(Sudut, Sudut_Spesifik, panjang_tabung){
        const equation = Sudut/(Sudut_Spesifik*panjang_tabung)
        return equation
    };

    const c_hitung = []
    for(let i = 0; i < meanAngle.length; i++){
        c_hitung.push(Equation(meanAngle[i], 66.67, 2))
    }
    
    return c_hitung
};

function RegresiSudut(dataRegresi){
    const Regresi = linearRegression(dataRegresi)
    const x = []; const y = [];
    let xPoint = 0;
    for(let i = 0; i< 2; i++){
        xPoint = i*0.35
        x.push(xPoint)
        y.push(Regresi.m*xPoint + Regresi.b)
    }
    return {y,x, Regresi}
}

function ExecutionW3(dataW3){
    const dataMeanW3 = Mean(dataW3);
    const c_hitung = C_hitung(dataMeanW3.dataMean);
    const plotRegresi = RegresiSudut(dataMeanW3.dataRegresi);
    return {dataMeanW3, c_hitung, plotRegresi}
}

export default ExecutionW3