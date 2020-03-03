window.onload = function() {
    var foodPie = document.getElementById('foodPie').getContext('2d');
    var drinkPie = document.getElementById('drinkPie').getContext('2d');
    
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = '14';
    Chart.defaults.global.defaultFontColor = '#DDD';
    
    
    // Start foodpie
    var foodPie = new Chart(foodPie, {
        type: 'pie',
        data: {
          labels: ["Spaghetti", "Meat", "Rice", "Fruit", "Potato"],
          datasets: [{
            label: "Meals",
            backgroundColor: ["#D83f87", "#2A1B3D","#44318D","#E98074","#A4B3B6"],
            borderWidth: 0,
            data: [144,200,365,800,365]
          }]
        },
        options: {
            title: {
                display: true,
                text: 'Food Stock (meals)',
                fontSize: 18
            },
            legend:{
                display: false
            },
        },
        tooltips: {
            displayColors: false,
            enabled: true,
            mode: 'single',
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
    });
    // End foodPie
    
    // Start drinkPie
    var drinkPie = new Chart(drinkPie, {
       type: 'pie',
        data: {
          labels: ["Water", "Soda", "Juice", "Beer"],
          datasets: [{
            label: "Meals",
            backgroundColor: ["#3e95cd", "#413022","#01884b","#ffa500"],
            borderWidth: 0,
            data: [1968,330,584,100]
          }]
        },
        options: {
            title: {
                display: true,
                text: 'Drinks Stock (L)',
                fontSize: 18
            },
            legend:{
                display: false
            },
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
    });
};