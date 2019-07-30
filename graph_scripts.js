var ctx = document.getElementById('myChart').getContext('2d');
pieChart = () => {displayChart('pie')}
barChart = () => {displayChart('bar')}
lineChart = () => {displayChart('line')}
displayChart = (chartType) => {
    ctx.clear();
    var myChart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: ['Pleasanton', 'Dublin', 'Livermore'],
            datasets: [{
                label: '# of Colorblind Users',
                data: [5, 12, 7],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    

}