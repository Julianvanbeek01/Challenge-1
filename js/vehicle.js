window.onload = function() {
    var distanceMars = document.getElementById('distanceMars').getContext('2d');
    var fuelUsage = document.getElementById('fuelUsage').getContext('2d');
    var speed = document.getElementById('speed').getContext('2d');
    
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = '14';
    Chart.defaults.global.defaultFontColor = '#DDD';
    
    
    // Start Distance to Mars
    var distanceMarsGraph = new Chart(distanceMars, {

        type:'line',
        data:{
            labels:['Day 1','Day 2','Day 3','Day 4','Day 5'],
            datasets:[{
                label:'Distance',
                data: [38600000,37700000, 36800000,35900000,35000000],
                borderColor:'#7649FE'
            }]
        },
        options:{
            maintainAspectRatio: false,
            title:{
                display: true,
                text: 'Distance to Mars (Km)',
                fontSize: 18
            },
            
            legend:{
                display: false,
            },
            scales:{
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            },
            elements:{
                point:{
                    radius: 3,
                    backgroundColor: 'rgba(255, 255, 255, 1)'
                }
            },
            tooltips: {
                enabled: true,
                mode: 'single',
                displayColors: false,
                backgroundColor: 'rgba(0,0,0,0.9)',
                titleFontSize: 14,
                titleFontStyle: 'bold',
                titleFontColor: "#FFF",
                bodyFontSize: 12,
                bodyFontStyle: 'normal',
                bodyFontColor: "#FFF",
                footerFontSize: 12,
                cornerRadius: 5,
            }
        } 
    });   
    // End Distance to Mars
    
    // Start Fuel Usage
    var fuelUsageChart = new Chart(fuelUsage, {
        type: 'bar',
        data: {
            labels:['Day 1','Day 2','Day 3','Day 4','Day 5'],
            datasets:[{
                label: 'Usage',
                data: [20000, 16000, 14000, 12000, 11500],
                backgroundColor: '#7649FE'
            }]
        },
        options:{
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Fuel Usage (Kg)',
                fontSize: 18
            },
            legend:{
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {
                enabled: true,
                mode: 'single',
                displayColors: false,
                backgroundColor: 'rgba(0,0,0,0.9)',
                titleFontSize: 14,
                titleFontStyle: 'bold',
                titleFontColor: "#FFF",
                bodyFontSize: 12,
                bodyFontStyle: 'normal',
                bodyFontColor: "#FFF",
                footerFontSize: 12,
                cornerRadius: 5,
            }
        }
    });
    // End Fuel Usage
    
    // Start Speed Chart
    var speedChart = new Chart(speed, {
        type:'line',
        data:{
            labels:['Day 1','Day 2','Day 3','Day 4','Day 5'],
            datasets:[{
                label:'Vehicle Speed',
                data: [0,30000,40000,38000,35000],
                borderColor:'#7649FE'
            }]
        },
        options:{
            maintainAspectRatio: false,
            title:{
                display: true,
                text: 'Speed (Km/h)',
                fontSize: 18
            },
            legend:{
                display: false,
            },
            scales:{
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            },
            elements:{
                point:{
                    radius: 3,
                    backgroundColor: 'rgba(255, 255, 255, 1)'
                }
            },
            tooltips: {
                enabled: true,
                mode: 'single',
                displayColors: false,
                backgroundColor: 'rgba(0,0,0,0.9)',
                titleFontSize: 14,
                titleFontStyle: 'bold',
                titleFontColor: "#FFF",
                bodyFontSize: 12,
                bodyFontStyle: 'normal',
                bodyFontColor: "#FFF",
                footerFontSize: 12,
                cornerRadius: 5,
            }
        }
    });
    // End Speed Chart
};