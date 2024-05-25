import { FloatingMethod, FallRaiseMethod } from "./functionMilikan"

//Data Mentah
const DataMentah = {
    VoltageRaise : [202,162,234,298,221,211,222,211,292,193,243,192,205,150,230,248,154,161,248,221,147,236,238,64,168,354,167,292,207,191,168,155,298,136,225,295,144,174,184,144,157,187,217,129,241,298,238,167,213,305,273,211,189,159,239,305,175,250,242,246,235,204,200,225,188,128,222,198,175,296,372,200,273,336,158],

    VoltageFloat : [179,146,166,225,186,139,159,155,218,120,203,142,173,69,186,168,95,102,163,174,97,199,183,28,135,317,125,234,155,154,129,139,265,70,115,137,124,150,147,115,127,132,171,99,193,239,155,112,120,219,203,154,145,128,152,223,130,186,199,185,172,151,138,192,138,58,132,104,94,213,222,127,196,252,93],

    raiseTime : [5.106,3.539,3.618,5.189,4.615,5.468,2.671,2.019,3.508,4.339,4.525,3.422,2.188,3.776,3.692,3.756,4.759,3.826,4.161,2.549,4.789,4.453,6.522,2.797,5.830,7.647,4.138,4.969,3.295,3.362,7.453,7.561,6.513,6.431,7.533,6.715,5.591,3.452,5.533,4.613,6.718,6.432,2.633,3.781,3.675,2.976,4.865,5.663,3.897,4.742,3.833,7.300,2.942,4.968,3.010,4.040,5.890,3.577,2.333,3.598,3.922,3.761,4.313,6.004,7.586,1.650,1.792,2.126,2.636,2.451,2.460,3.654,2.814,2.560,2.366],
    
    fallTime : [1.715,2.059,2.365,1.275,1.977,3.091,1.520,2.414,1.183,2.614,1.267,2.018,3.336,1.357,1.217,1.121,1.763,2.718,2.039,1.780,1.892,1.457,1.672,2.915,2.842,1.505,2.402,1.297,1.635,1.653,5.746,5.856,3.977,5.342,5.675,5.345,3.677,1.934,2.577,1.912,2.551,2.765,1.654,4.623,2.723,1.823,3.733,4.562,4.655,3.623,1.168,2.703,2.473,1.977,1.843,2.110,1.714,2.116,0.669,1.914,2.035,2.290,1.782,1.786,2.534,4.863,1.432,1.343,1.343,1.454,1.274,1.264,2.072,1.839,2.691],
 }


// data q minyak
const qMinyak = {
    dataFloating : FloatingMethod(DataMentah),
    dataFallRaise : FallRaiseMethod(DataMentah), 
}



export {qMinyak, DataMentah,}