import { standardDeviation } from "simple-statistics";
import { DataMentah } from "./dataMilikan";

const stanDevMilikan = {
    VoltageRaise : standardDeviation(DataMentah.VoltageRaise).toFixed(5),
    VoltageFloat : standardDeviation(DataMentah.VoltageFloat).toFixed(5),
    fallTime : standardDeviation(DataMentah.fallTime).toFixed(5),
    raiseTime : standardDeviation(DataMentah.raiseTime).toFixed(5),
};



export{ stanDevMilikan};