import { Tabel } from "../../../component/table";
import { DataIndeksBias, DataSnellius } from "./dataSnell";

function Layout(title, height){
    let layout = {
      margin: {
        autoexpand : false,
        b:0,
        t:35
       },
       height,
       title
     }
     return layout
   } 

function TabelKaca(){
  return (
    <>
    <Tabel layout={Layout('Data Indeks Bias Udara-Kaca ke 1',300)} header={['Orde', decodeURI('%CE%B8') + '1  (' +decodeURI('%C2%B0') + ')', decodeURI('%CE%B8') + '2  (' + decodeURI('%C2%B0') +')', 'n_kaca' ]} data={[DataIndeksBias.udaraKaca.pengulangan1.pengulangan, DataSnellius.udaraKaca.pengulangan1.theta1, DataSnellius.udaraKaca.pengulangan1.theta2, DataIndeksBias.udaraKaca.pengulangan1.n2]}/>
    <Tabel layout={Layout('Data Indeks Bias Udara-Kaca ke 2',300)} header={['Orde', decodeURI('%CE%B8') + '1  (' +decodeURI('%C2%B0') + ')', decodeURI('%CE%B8') + '2  (' + decodeURI('%C2%B0') +')', 'n_kaca' ]} data={[DataIndeksBias.udaraKaca.pengulangan2.pengulangan, DataSnellius.udaraKaca.pengulangan2.theta1, DataSnellius.udaraKaca.pengulangan2.theta2, DataIndeksBias.udaraKaca.pengulangan2.n2]}/>
          
   </>
  )
}

function TabelAir(){
  return (
    <>
    <Tabel layout={Layout('Data Indeks Bias Udara-Air ke 1',300)} header={['Orde', decodeURI('%CE%B8') + '1  (' +decodeURI('%C2%B0') + ')', decodeURI('%CE%B8') + '2  (' + decodeURI('%C2%B0') +')', 'n_kaca' ]} data={[DataIndeksBias.udaraAir.pengulangan1.pengulangan, DataSnellius.udaraAir.pengulangan1.theta1, DataSnellius.udaraAir.pengulangan1.theta2, DataIndeksBias.udaraAir.pengulangan1.n2]}/>

    <Tabel layout={Layout('Data Indeks Bias Udara-Air  ke 2',300)} header={['Orde', decodeURI('%CE%B8') + '1  (' +decodeURI('%C2%B0') + ')', decodeURI('%CE%B8') + '2  (' + decodeURI('%C2%B0') +')', 'n_kaca' ]} data={[DataIndeksBias.udaraAir.pengulangan2.pengulangan, DataSnellius.udaraAir.pengulangan2.theta1, DataSnellius.udaraAir.pengulangan2.theta2, DataIndeksBias.udaraAir.pengulangan2.n2]}/>   
  </>
  )
}
function TabelLarutanGula1(){
  return (
    <>
      < Tabel layout={Layout('Data Indeks Bias LarutanGula 0,27gr/ml ke 1',300)} header={['Orde', decodeURI('%CE%B8') + '1  (' +decodeURI('%C2%B0') + ')', decodeURI('%CE%B8') + '2  (' + decodeURI('%C2%B0') +')', 'n_kaca' ]} data={[DataIndeksBias.larutanGula1.pengulangan1.pengulangan, DataSnellius.larutanGula1.pengulangan1.theta1, DataSnellius.larutanGula1.pengulangan1.theta2, DataIndeksBias.larutanGula1.pengulangan1.n2]}/>

      <Tabel layout={Layout('Data Indeks Bias LarutanGula 0,27gr/ml  ke 2',300)} header={['Orde', decodeURI('%CE%B8') + '1  (' +decodeURI('%C2%B0') + ')', decodeURI('%CE%B8') + '2  (' + decodeURI('%C2%B0') +')', 'n_kaca' ]} data={[DataIndeksBias.larutanGula1.pengulangan2.pengulangan, DataSnellius.larutanGula1.pengulangan2.theta1, DataSnellius.larutanGula1.pengulangan2.theta2, DataIndeksBias.larutanGula1.pengulangan2.n2]}/>  
    </>
  )
}
function TabelLarutanGula2(){
  return (
    <>
      <Tabel layout={Layout('Data Indeks Bias LarutanGula 0,54gr/ml ke 1',300)} header={['Orde', decodeURI('%CE%B8') + '1  (' +decodeURI('%C2%B0') + ')', decodeURI('%CE%B8') + '2  (' + decodeURI('%C2%B0') +')', 'n_kaca' ]} data={[DataIndeksBias.larutanGula2.pengulangan1.pengulangan, DataSnellius.larutanGula2.pengulangan1.theta1, DataSnellius.larutanGula2.pengulangan1.theta2, DataIndeksBias.larutanGula2.pengulangan1.n2]}/>

      <Tabel layout={Layout('Data Indeks Bias LarutanGula 0,54gr/ml  ke 2',300)} header={['Orde', decodeURI('%CE%B8') + '1  (' +decodeURI('%C2%B0') + ')', decodeURI('%CE%B8') + '2  (' + decodeURI('%C2%B0') +')', 'n_kaca' ]} data={[DataIndeksBias.larutanGula2.pengulangan2.pengulangan, DataSnellius.larutanGula2.pengulangan2.theta1, DataSnellius.larutanGula2.pengulangan2.theta2, DataIndeksBias.larutanGula2.pengulangan2.n2]}/>   
    </>
  )
}
function TabelLarutanGula3(){
  return (
    <>
      <Tabel layout={Layout('Data Indeks Bias LarutanGula 0,81 gr/ml ke 1',300)} header={['Orde', decodeURI('%CE%B8') + '1  (' +decodeURI('%C2%B0') + ')', decodeURI('%CE%B8') + '2  (' + decodeURI('%C2%B0') +')', 'n_kaca' ]} data={[DataIndeksBias.larutanGula3.pengulangan1.pengulangan, DataSnellius.larutanGula3.pengulangan1.theta1, DataSnellius.larutanGula3.pengulangan1.theta2, DataIndeksBias.larutanGula3.pengulangan1.n2]}/>

      <Tabel layout={Layout('Data Indeks Bias LarutanGula 0,81 gr/ml  ke 2',300)} header={['Orde', decodeURI('%CE%B8') + '1  (' +decodeURI('%C2%B0') + ')', decodeURI('%CE%B8') + '2  (' + decodeURI('%C2%B0') +')', 'n_kaca' ]} data={[DataIndeksBias.larutanGula3.pengulangan2.pengulangan, DataSnellius.larutanGula3.pengulangan2.theta1, DataSnellius.larutanGula3.pengulangan2.theta2, DataIndeksBias.larutanGula3.pengulangan2.n2]}/>   
    </>
  )
}
function TabelLarutanGula4(){
  return (
    <>
      <Tabel layout={Layout('Data Indeks Bias LarutanGula 1,08 gr/ml ke 1',300)} header={['Orde', decodeURI('%CE%B8') + '1  (' +decodeURI('%C2%B0') + ')', decodeURI('%CE%B8') + '2  (' + decodeURI('%C2%B0') +')', 'n_kaca' ]} data={[DataIndeksBias.larutanGula4.pengulangan1.pengulangan, DataSnellius.larutanGula4.pengulangan1.theta1, DataSnellius.larutanGula4.pengulangan1.theta2, DataIndeksBias.larutanGula4.pengulangan1.n2]}/>

      <Tabel layout={Layout('Data Indeks Bias LarutanGula 1,08 gr/ml  ke 2',300)} header={['Orde', decodeURI('%CE%B8') + '1  (' +decodeURI('%C2%B0') + ')', decodeURI('%CE%B8') + '2  (' + decodeURI('%C2%B0') +')', 'n_kaca' ]} data={[DataIndeksBias.larutanGula4.pengulangan2.pengulangan, DataSnellius.larutanGula4.pengulangan2.theta1, DataSnellius.larutanGula4.pengulangan2.theta2, DataIndeksBias.larutanGula4.pengulangan2.n2]}/>   
    </>
  )
}

export{TabelAir, TabelKaca,TabelLarutanGula1, TabelLarutanGula2,TabelLarutanGula3, TabelLarutanGula4}