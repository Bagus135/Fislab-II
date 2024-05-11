import TabelFlux from "./tabelMP2";
import GrafikFlux from "./grafikMP2";
import { MuonScript,Opening,FizeauFocaultScript, Header} from "./naskahMP2";

function MP2(){
    return(
        <div className="m-6 flex flex-col justify-center self-center items-center">
            <Header/>
            <Opening/>
            <TabelFlux/>
            <MuonScript/>
            <GrafikFlux/>
            <FizeauFocaultScript/>
        </div>
    )
}

export default MP2