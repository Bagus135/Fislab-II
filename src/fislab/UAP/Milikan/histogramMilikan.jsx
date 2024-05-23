import { Histogram } from "../../../component/histogram";
import {DataSelisih} from "./selisihMilikan"

function Layout(title, height, width){
    let layout = {
      margin: {
        autoexpand : false,
        b:50,
        t:35
       },
       height,
       width,
       title,
       bargap:0.05,
       xaxis : {
        ticktext : [1,2,3,4,5,6,7]
       }
     }
     return layout
   } 

function HistogramMiikan(){
console.log(DataSelisih)
    return (
    <>
    <Histogram data={DataSelisih.floating} color={'blue'} layouts={Layout("Histogram Floating Method", 1000,1000)}/>
    <br/>
    <br/>
    <Histogram data={DataSelisih.fallRaise} color={'blue'} layouts={Layout("Histogram Fall-Raise Method", 1000,1000)}/>
    </>
    )
}

export default HistogramMiikan