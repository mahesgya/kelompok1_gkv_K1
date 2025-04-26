import { dataKonsumsi, paletWarna } from "./data.js";

function fishConsumption(){
    const trace1 = {
        x: dataKonsumsi.tahun,
        y: dataKonsumsi.Indonesia,
        name: 'Indonesia',
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: paletWarna.Indonesia}
    };
    
    const trace2 = {
        x: dataKonsumsi.tahun,
        y: dataKonsumsi.Malaysia,
        name: 'Malaysia',
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: paletWarna.Malaysia}
    };
    
    const trace3 = {
        x: dataKonsumsi.tahun,
        y: dataKonsumsi.Thailand,
        name: 'Thailand',
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: paletWarna.Thailand}
    };
    
    const trace4 = {
        x: dataKonsumsi.tahun,
        y: dataKonsumsi.VietNam,
        name: 'Viet Nam',
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: paletWarna.VietNam}
    };
    
    const layout = {
        xaxis: {title: 'Tahun'},
        yaxis: {title: 'Berat (1000 Ton)'},
        legend: {orientation: 'h', y: 1.1},
        margin: {t: 50, b: 80, l: 80, r: 40}
    };
    
    Plotly.newPlot('chart2', [trace1, trace2, trace3, trace4], layout);
}

export default fishConsumption