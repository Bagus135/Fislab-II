import Plot from "react-plotly.js";

export function Histogram({data, layouts, color}){
    let Data = [{
        x: data,
        type : `histogram`,
        marker :{
            color},
        xbins : {
            size: 1,
        }
    }];
    return(<Plot data={Data} layout={layouts}/>)
}
