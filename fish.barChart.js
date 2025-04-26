import { rataRata } from './data.js';

function fishAverage(){
    const negara = ['Indonesia', 'Malaysia', 'Thailand', 'VietNam'];

    const trace1 = {
        x : negara, 
        y : [rataRata.produksi.Indonesia, rataRata.produksi.Malaysia, rataRata.produksi.Thailand, rataRata.produksi],
        name : 'Production',
        type : 'bar',
        marker: {color: '#1f77b4'}   
    };

    const trace2 = {
        x: negara,
        y: [rataRata.konsumsi.Indonesia, rataRata.konsumsi.Malaysia, rataRata.konsumsi.Thailand, rataRata.konsumsi.VietNam],
        name: 'Consumption',
        type: 'bar',
        marker: {color: '#d62728'}
    };
    
    const layout = {
        barmode: 'group',
        xaxis: {title: 'Negara'},
        yaxis: {title: 'Rata-Rata (1000 Ton)'},
        legend: {orientation: 'h', y: 1.1},
        margin: {t: 50, b: 80, l: 80, r: 40}
    };
    
    Plotly.newPlot('chart1', [trace1, trace2], layout);
}

export default fishAverage;