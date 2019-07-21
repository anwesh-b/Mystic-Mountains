window.onload = ()=> {

    var chart = new CanvasJS.Chart("chartContainer1", {
        theme: "light2",
        animationEnabled: true,
        title: {
            text: "Shares of Electricity Generation by Fuel"
        },
        subtitles: [{
            text: "United Kingdom, 2016",
            fontSize: 16
        }],
        data: [{
            type: "pie",
            indexLabelFontSize: 18,
            radius: 90,
            indexLabel: "{label} - {y}%",
            // yValueFormatString: "###0.0\"%\"",
            dataPoints: [
                { y: 1, label: "Gas" },
                { y: 2, label: "Nuclear"},
                { y: 3, label: "Renewable" },
                { y: 4, label: "Coal" },
                { y: 3.1, label: "Other Fuels" }
            ]
        }]
    });
    chart.render();
}

    
