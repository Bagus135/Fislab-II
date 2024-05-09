import TabelFlux from "./tabelMP2";
import GrafikFlux from "./grafikMP2";
import { MuonScript,Opening,FizeauFocaultScript, Header} from "./naskahMP2";

function MP2(){
    return(
        <div className="MP2">
            <Header/>
            <Opening/>
            <TabelFlux/>
            <MuonScript/>
            <div className="h-full w-5/12">
            <GrafikFlux/>
            </div>
            <FizeauFocaultScript/>
        </div>
    )
}

export default MP2