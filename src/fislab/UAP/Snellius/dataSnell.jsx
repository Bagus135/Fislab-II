import { RefractionIndex} from "./functionSnell";

const DataSnellius = {
    udaraKaca : { 
        pengulangan1 : {
            theta1 : [5,10,15,20,25,30,35,40,45,50],
            theta2 : [3,6.5,10,12,15,19,22,25,28,32],
        },
        pengulangan2 : {
            theta1 : [5,10,15,20,25,30,35,40,45,50],
            theta2 : [3.5,6,9,13,14,17,20,23,28,29],
        },
    },
    udaraAir : {
        pengulangan1 : {
            theta1 : [5,10,15,20,25,30,35,40,45,50],
            theta2 : [4,7.5,11,14,18,23,26,27,31,35],
        },
        pengulangan2 : {
            theta1 : [5,10,15,20,25,30,35,40,45,50],
            theta2 : [3,7,12,15,18,20,25,28,35,31],
        },
    },
    larutanGula1 : {
        pengulangan1 : {
            theta1 : [5,10,15,20,25,30,35,40,45,50],
            theta2 : [3.5,7.5,11,14,17,22,26,29,34,40],
        },
        pengulangan2 : {
            theta1 : [5,10,15,20,25,30,35,40,45,50],
            theta2 : [4,7,10,14,18,23,25,28,33,37],
        },
    },
    larutanGula2 : {
        pengulangan1 : {
            theta1 : [5,10,15,20,25,30,35,40,45,50],
            theta2 : [3, 7, 10, 15, 18, 22, 25, 30, 34, 39 ],
        },
        pengulangan2 : {
            theta1 : [5,10,15,20,25,30,35,40,45,50],
            theta2 : [3,7,12,15,18,20,25,29,34,40],
        },
    },
    larutanGula3 : {
        pengulangan1 : {
            theta1 : [5,10,15,20,25,30,35,40,45,50],
            theta2 : [3.5, 7, 11, 15, 18, 22, 27.5, 30, 31.5, 34 ],
        },
        pengulangan2 : {
            theta1 : [5,10,15,20,25,30,35,40,45,50],
            theta2 : [3, 7.5, 10, 13, 17, 22, 25, 28, 31, 34],
        },
    },
    larutanGula4 : {
        pengulangan1 : {
            theta1 : [5,10,15,20,25,30,35,40,45,50],
            theta2 : [3, 7, 10, 12.5, 18, 21, 26, 29, 33, 36 ],
        },
        pengulangan2 : {
            theta1 : [5,10,15,20,25,30,35,40,45,50],
            theta2 : [3.5,6,11,14,17.5,23,25,30,32,35],
        },
    }
}


const DataIndeksBias = {
    udaraKaca : {
        pengulangan1 : RefractionIndex(DataSnellius.udaraKaca.pengulangan1.theta1, DataSnellius.udaraKaca.pengulangan1.theta2),
        pengulangan2 : RefractionIndex(DataSnellius.udaraKaca.pengulangan2.theta1, DataSnellius.udaraKaca.pengulangan2.theta2),
    } ,
    udaraAir : {
        pengulangan1 : RefractionIndex(DataSnellius.udaraAir.pengulangan1.theta1, DataSnellius.udaraAir.pengulangan1.theta2),
        pengulangan2 : RefractionIndex(DataSnellius.udaraAir.pengulangan2.theta1, DataSnellius.udaraAir.pengulangan2.theta2),
    } ,
    larutanGula1 : {
        pengulangan1 : RefractionIndex(DataSnellius.larutanGula1.pengulangan1.theta1, DataSnellius.larutanGula1.pengulangan1.theta2),
        pengulangan2 : RefractionIndex(DataSnellius.larutanGula1.pengulangan2.theta1, DataSnellius.larutanGula1.pengulangan2.theta2),
    },
    larutanGula2 : {
        pengulangan1 : RefractionIndex(DataSnellius.larutanGula2.pengulangan1.theta1, DataSnellius.larutanGula2.pengulangan1.theta2),
        pengulangan2 : RefractionIndex(DataSnellius.larutanGula2.pengulangan2.theta1, DataSnellius.larutanGula2.pengulangan2.theta2),
    },
    larutanGula3 : {
        pengulangan1 : RefractionIndex(DataSnellius.larutanGula3.pengulangan1.theta1, DataSnellius.larutanGula3.pengulangan1.theta2),
        pengulangan2 : RefractionIndex(DataSnellius.larutanGula3.pengulangan2.theta1, DataSnellius.larutanGula3.pengulangan2.theta2),
    },
    larutanGula4 : {
        pengulangan1 : RefractionIndex(DataSnellius.larutanGula4.pengulangan1.theta1, DataSnellius.larutanGula4.pengulangan1.theta2),
        pengulangan2 : RefractionIndex(DataSnellius.larutanGula4.pengulangan2.theta1, DataSnellius.larutanGula4.pengulangan2.theta2),
    },
}

export {DataIndeksBias,DataSnellius}