import { linearRegression, mean , standardDeviation} from "simple-statistics";

function SnelliusLaw(tetha1, tetha2){
    const rad1 = tetha1*Math.PI/180; // convert ke radian
    const rad2 = tetha2*Math.PI/180;
    const n = Math.sin(rad1)/Math.sin(rad2);
    return n
}

function RefractionIndex(tethas1, tethas2){
    const n2 = []
    const pengulangan = []
    let a = 0;
    for(let i = 0; i < tethas1.length; i++){
        pengulangan.push(i+1)
        a = SnelliusLaw(tethas1[i], tethas2[i])
        a = parseFloat(a.toFixed(2)) // bulatkan menjadi 2 angka dibelakang koma
        n2.push(a);
    };

    //Cari Rata-Rata
    pengulangan.push('Rata - Rata')
    let rata2 =mean(n2)
    rata2 = parseFloat(rata2.toFixed(2))
    n2.push(rata2);
    return {n2, pengulangan}

}; 


function DataGrafik(data){
    const DataGrafik= {}
    const x = []
    for(let i = 5; i <= 50; i += 5){
        x.push(Math.sin(i*Math.PI/180))
    }
    DataGrafik['x'] = x
    for( const Variasi in data ){
        let A = []; let B = [];
        let Mean = []; let std = [];
        let Regresi ;
          for(let i = 0 ; i <10; i++ ){
            A = [data[Variasi].pengulangan1.theta2[i], data[Variasi].pengulangan2.theta2[i]]

            B.push([ x[i], Math.sin(mean(A)*Math.PI/180)])

            Mean.push(Math.sin(mean(A)*Math.PI/180));
            std.push(Math.sin(standardDeviation(A)*Math.PI/180)); 
          }
          Regresi = linearRegression(B)

          DataGrafik[Variasi] = {};
          DataGrafik[Variasi]['mean'] = Mean;
          DataGrafik[Variasi]['std'] = std;
          DataGrafik[Variasi]['Regresi'] = Regresi;

          DataGrafik[Variasi]['PlotRegresi'] = {}
          DataGrafik[Variasi]['PlotRegresi']['x'] = [0, Math.sin(60*Math.PI/180)]
          DataGrafik[Variasi]['PlotRegresi']['y'] = [Regresi.m*0 + Regresi.b, Regresi.m*Math.sin(60*Math.PI/180)+Regresi.b]
        }
    return DataGrafik
}

export {RefractionIndex, DataGrafik}
