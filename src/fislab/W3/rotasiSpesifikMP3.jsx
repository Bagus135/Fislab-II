import { DataOlahW3 } from "./dataW3";
import { MathJax } from "better-react-mathjax";

function RotasiSpesifikScript(){
    return(
        <div className="w-full text-justify mt-5">
        <MathJax>
        <p> Persamaan regresi linear yang didapatkan dari grafik tersebut memenuhi</p>
        <p className="text-center">{"\\(\\alpha = l.[\\alpha]^T_D .C\\)"}</p>
        <p> Sehingga dari nilai gradien dari persamaan regresi linear tersebut dapat digunakan untuk mencari nilai dari sudut rotasi spesifiknya yang memenuhi persamaan</p>
        <p className="text-center">{"\\( [\\alpha]^T_D = \\frac{m}{l}\\)"}</p>
        <p> Dengan {"\\(m\\)"} adalah nilai gradien regresinya sebesar {DataOlahW3.plotRegresi.Regresi.m} dan nilai {"\\(l\\)"} adalah panjang tabung polarimeternya sebesar 2 dm. Sehingga nilai dari rotasi spesifik dapat dihitung</p>
        <p className="text-center">{`\\([\\alpha]^T_D = \\frac{${DataOlahW3.plotRegresi.Regresi.m}}{2}\\)`}</p>
        <p className="text-center">{`\\([\\alpha]^T_D = ${DataOlahW3.plotRegresi.Regresi.m/2}^o\\)`}</p>
        </MathJax>
        </div>
    )
}

export default RotasiSpesifikScript