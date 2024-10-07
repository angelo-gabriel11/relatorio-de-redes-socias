document.addEventListener('DOMContentLoaded', () => {
    const VOTING_DATA = {
        '2016': {
            'Prefeitos': 110000000,
            'Presidentes': 120000000
        },
        '2018': {
            'Prefeitos': 130000000,
            'Presidentes': 150000000
        },
        '2020': {
            'Prefeitos': 140000000,
            'Presidentes': 160000000
        },
        '2022': {
            'Prefeitos': 135000000,
            'Presidentes': 170000000
        },
        '2024': {
            'Prefeitos': 150000000,
            'Presidentes': 180000000
        }
    };

    const CHART_COLORS = {
        'Prefeitos': 'rgba(255, 99, 132, 0.8)',
        'Presidentes': 'rgba(255, 159, 64, 0.8)'
    };

    const CHART_OPTIONS = {
        responsive: true,
        animation: {
            duration: 1500,
            easing: 'easeOutBounce'
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#ffffff'
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        let label = tooltipItem.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += tooltipItem.raw.toLocaleString();
                        return label;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)'
                }
            },
            x: {
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)'
                }
            }
        }
    };

    function createBarChart(ctx, labels, datasets) {
        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: CHART_OPTIONS
        });
    }

    function initChart() {
        const ctx = document.getElementById('votingChart').getContext('2d');
        const labels = Object.keys(VOTING_DATA);
        const datasets = Object.keys(VOTING_DATA[labels[0]]).map(category => {
            return {
                label: category,
                data: labels.map(year => VOTING_DATA[year][category]),
                backgroundColor: CHART_COLORS[category],
                borderColor: CHART_COLORS[category].replace(/0.8\)/, '1)'),
                borderWidth: 1
            };
        });
        createBarChart(ctx, labels, datasets);
    }

    initChart();
});
