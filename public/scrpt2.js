window.onload = ()=> {
    var chart = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Top Oil Reserves"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{        
            type: "column",  
            dataPointWidth:10,
            // showInLegend: true, 
            legendMarkerColor: "grey",
            // width: 1,
            
            legendText: "MMbbl = one million barrels",
            dataPoints: [      
                { y: 10, label: "Venezuela" },
                { y: 20,  label: "Saudi" },
                { y: 30,  label: "Canada" },
                { y: 25,  label: "Iran" },
                { y: 21,  label: "Iraq" },
                { y: 22, label: "Kuwait" },
                { y: 18,  label: "UAE" },
                { y: 18,  label: "Russia" }
            ]
        }]
    });
    chart.render();    
}
    