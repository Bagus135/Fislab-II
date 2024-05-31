import ExecutionW4 from "./functionW4";

const dataMentah ={
    taliPutih : {
        rapatMassa : 0.001/1.5,
        panjangSegmen : [[21.6, 43, 62.5],[26.2, 52.5, 77.9],[31.2, 61.8, 92.8],[35.2, 69.8, 104.8], [37.8, 74.6, 108.2]], //[[beban 1], [beban 2], [beban 3]]
        beban : [117.03, 180.91,244.85,301.85, 360.28],
    },
    taliCoklat : {
        rapatMassa : 0.00127/1.3,
        panjangSegmen : [[17.1, 34.8, 53.2],[20.4, 42.8, 65.6],[24, 49.4, 74],[25.8, 53.9, 81.6],[28, 57.7, 85.9]],
        beban : [117.03, 180.91,244.85,301.85, 360.28]
    },
    taliNilon : {
        rapatMassa : 0.00033/1.5,
        panjangSegmen : [[36.7, 72.7, 107.4],[46, 91.2, 132.1],[54.4, 105.6],[60.7, 117.7],[65.8, 128.3]],
        beban : [117.03, 180.91,244.85,301.85, 360.28]
    }
};

const dataW4 = {
    taliPutih: ExecutionW4(dataMentah.taliPutih),
    taliCoklat: ExecutionW4(dataMentah.taliCoklat),
    taliNilon: ExecutionW4(dataMentah.taliNilon),
}

export {dataMentah,dataW4}