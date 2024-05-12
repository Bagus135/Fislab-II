import { max, min } from "simple-statistics";

function MetodeSturges(Data){
    // jumlah data
    const n = Data.length;
    // Tentukan Jangkauan
    const Range = max(Data) - min(Data)
    // Tentukan Banyaknya Kelas
    const nClass = Math.ceil( 1+ Math.log2(n))
    // Range di tiap kelas 
    const h = Range/nClass;
    // Urutkan array data dari terkecil ke terbesar
    Data.sort((a,b)=> {return (a-b)})
    // Buat array kosong untuk tempat penampungan kelas 
    const bigClass = [] // => [[kelas 1], [kelas 2], [kelas 3], dst]

    let index = 0


    let h_loop = h + Data[0]
    const rangeClass = []
    
    for(let i = 1; i < nClass; i++ ){
        let Class = [];

        while (true) {
            if(Data[index] >= h_loop  ){
                rangeClass.push(`${(h_loop - h).toFixed(3)} ~ ${h_loop.toFixed(3)}`)
                h_loop = h_loop + h
                bigClass.push(Class)
                break
            }
            
            Class.push(Data[index]);
            index = index + 1;
        };
}
   /// Eksekusi kelas terakhir 
   let Class = []
   for(index; index < Data.length; index++){
        Class.push(Data[index])
   }
   rangeClass.push(`${(h_loop - h).toFixed(3)} ~ ${h_loop.toFixed(3)}`)
   bigClass.push(Class)

    // Cek jumlah data per kelas
     const classFrec = []; let Frec = 0
    for(let i = 0; i<bigClass.length; i++){
        Frec = bigClass[i].length
        classFrec.push(Frec)
    }

    return {bigClass, classFrec, rangeClass}
}

export default MetodeSturges

