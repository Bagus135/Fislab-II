import GrafikW3 from "./grafikW3";
import { TabelPengukuran, TabelPerbandinganC } from "./tabelW3";

function W3(){
    return(
        <div className="h-full w-full">
            <TabelPengukuran/>
            <TabelPerbandinganC/>
            <GrafikW3/>
        </div>
    )
}

export default W3