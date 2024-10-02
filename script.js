document.addEventListener('DOMContentLoaded', () => {
    // Dados fictícios para o exemplo
    const SOCIAL_MEDIA_DATA = {
        Facebook: 1200,
        Twitter: 8000,
        Instagram: 2000,
        LinkedIn: 2000,
        TikTok: 7000,
    };

    const CHART_COLORS = [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
    ];

    const CHART_OPTIONS = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#ffffff' // Cor da legenda
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        let label = tooltipItem.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += tooltipItem.raw;
                        return label;
                    }
                }
            }
        },
        animation: {
            duration: 10005, // Duração da animação em milissegundos
            easing: 'easeOutBounce' // Tipo de animação
        }
    };

    // Função para criar gráficos de barras
    function createBarChart(ctx, labels, data, title) {
        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: title,
                    data: data,
                    backgroundColor: CHART_COLORS,
                    borderColor: CHART_COLORS.map(color => color.replace(/0.6\)/, '1)')),
                    borderWidth: 1
                }]
            },
            options: CHART_OPTIONS
        });
    }

    // Função principal para inicializar o gráfico
    function initChart() {
        const ctx = document.getElementById('userChart').getContext('2d');

        // Dados para o gráfico
        const labels = Object.keys(SOCIAL_MEDIA_DATA);
        const chartData = Object.values(SOCIAL_MEDIA_DATA);

        // Cria o gráfico de barras
        createBarChart(ctx, labels, chartData, 'Distribuição de Usuários');
    }

    // Inicializa o gráfico
    initChart();
});
 