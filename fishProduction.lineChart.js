import { dataProduksi, paletWarna } from "./data.js";

function fishProduction(){
    const trace1 = {
        x: dataProduksi.tahun,
        y: dataProduksi.Indonesia,
        name: 'Indonesia',
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: paletWarna.Indonesia}
    };
    
    const trace2 = {
        x: dataProduksi.tahun,
        y: dataProduksi.Malaysia,
        name: 'Malaysia',
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: paletWarna.Malaysia}
    };
    
    const trace3 = {
        x: dataProduksi.tahun,
        y: dataProduksi.Thailand,
        name: 'Thailand',
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: paletWarna.Thailand}
    };
    
    const trace4 = {
        x: dataProduksi.tahun,
        y: dataProduksi.VietNam,
        name: 'Viet Nam',
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: paletWarna.VietNam}
    };
    
    const layout = {
        xaxis: {title: ''},
        yaxis: {title: ''},
        legend: {orientation: 'h', y: 1.1},
        margin: {t: 50, b: 80, l: 80, r: 40}
    };
    
    Plotly.newPlot('chart3', [trace1, trace2, trace3, trace4], layout);
}

export default fishProduction