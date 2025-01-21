// card 1
const ctxx = document.getElementById('customer-segmentation-chart').getContext('2d');
new Chart(ctxx, {
    type: 'pie',
    data: {
        labels: ['Segment A', 'Segment B', 'Segment C'],
        datasets: [{
            data: [30, 50, 20],
            backgroundColor: ['#FF6B6B', '#4CAF50', '#FFD700'],
            borderColor: ['#ffffff', '#ffffff', '#ffffff'],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false // Disable default legend
            }
        }
    }
});

// card 2



// Card 3
const ctx = document.getElementById('recoveryRateChart').getContext('2d');
new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Not recovered', 'Recovered'],
        datasets: [{
            data: [32, 68],
            backgroundColor: ['#FF6B6B', '#4CAF50'],
            borderColor: ['#fff', '#fff'],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false // Hide legend in the chart
            }
        }
    }
});

