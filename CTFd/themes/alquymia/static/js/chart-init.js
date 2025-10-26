// Initialize progress chart
(function() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChart);
    } else {
        initChart();
    }
    
    function initChart() {
        var canvas = document.getElementById('progressChart');
        if (!canvas) {
            console.error('Canvas progressChart not found');
            return;
        }
        
        var ctx = canvas.getContext('2d');
        if (!ctx) {
            console.error('Could not get 2d context');
            return;
        }
        
        try {
            var progressChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00', '01:00', '02:00', '03:00'],
                    datasets: [
                        {
                            label: 'Hacking Club',
                            data: [0, 150, 325, 550, 775, 1050, 1325, 1550, 1725, 1850],
                            borderColor: '#FFD700',
                            backgroundColor: 'rgba(255, 215, 0, 0.1)',
                            borderWidth: 3,
                            tension: 0.4,
                            pointRadius: 5,
                            pointHoverRadius: 8,
                            pointBackgroundColor: '#FFD700',
                            pointBorderColor: '#1a1a1a',
                            pointBorderWidth: 2
                        },
                        {
                            label: 'CyberWarriors',
                            data: [0, 125, 275, 475, 700, 950, 1200, 1425, 1600, 1725],
                            borderColor: '#C0C0C0',
                            backgroundColor: 'rgba(192, 192, 192, 0.1)',
                            borderWidth: 3,
                            tension: 0.4,
                            pointRadius: 5,
                            pointHoverRadius: 8,
                            pointBackgroundColor: '#C0C0C0',
                            pointBorderColor: '#1a1a1a',
                            pointBorderWidth: 2
                        },
                        {
                            label: 'Null Hackers',
                            data: [0, 100, 250, 450, 675, 900, 1150, 1375, 1550, 1650],
                            borderColor: '#CD7F32',
                            backgroundColor: 'rgba(205, 127, 50, 0.1)',
                            borderWidth: 3,
                            tension: 0.4,
                            pointRadius: 5,
                            pointHoverRadius: 8,
                            pointBackgroundColor: '#CD7F32',
                            pointBorderColor: '#1a1a1a',
                            pointBorderWidth: 2
                        },
                        {
                            label: 'Security Elite',
                            data: [0, 75, 200, 400, 625, 850, 1050, 1250, 1400, 1475],
                            borderColor: '#FF8C00',
                            backgroundColor: 'rgba(255, 140, 0, 0.1)',
                            borderWidth: 2.5,
                            tension: 0.4,
                            pointRadius: 4,
                            pointHoverRadius: 7,
                            pointBackgroundColor: '#FF8C00',
                            pointBorderColor: '#1a1a1a',
                            pointBorderWidth: 2
                        },
                        {
                            label: 'Binary Hunters',
                            data: [0, 50, 175, 375, 575, 775, 975, 1150, 1275, 1350],
                            borderColor: '#00CED1',
                            backgroundColor: 'rgba(0, 206, 209, 0.1)',
                            borderWidth: 2.5,
                            tension: 0.4,
                            pointRadius: 4,
                            pointHoverRadius: 7,
                            pointBackgroundColor: '#00CED1',
                            pointBorderColor: '#1a1a1a',
                            pointBorderWidth: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                color: '#e0e0e0',
                                font: {
                                    family: 'Rajdhani',
                                    size: 14,
                                    weight: '600'
                                },
                                padding: 15,
                                usePointStyle: true,
                                pointStyle: 'circle'
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(26, 26, 26, 0.95)',
                            titleColor: '#FF8C00',
                            bodyColor: '#e0e0e0',
                            borderColor: '#FF8C00',
                            borderWidth: 1,
                            padding: 12,
                            displayColors: true,
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.parsed.y + ' pontos';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(255, 140, 0, 0.1)',
                                lineWidth: 1
                            },
                            ticks: {
                                color: '#e0e0e0',
                                font: {
                                    family: 'Rajdhani',
                                    size: 12,
                                    weight: '600'
                                },
                                callback: function(value) {
                                    return value + ' pts';
                                }
                            },
                            title: {
                                display: true,
                                text: 'Pontos',
                                color: '#FF8C00',
                                font: {
                                    family: 'Orbitron',
                                    size: 14,
                                    weight: '700'
                                }
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(255, 140, 0, 0.1)',
                                lineWidth: 1
                            },
                            ticks: {
                                color: '#e0e0e0',
                                font: {
                                    family: 'Rajdhani',
                                    size: 12,
                                    weight: '600'
                                }
                            },
                            title: {
                                display: true,
                                text: 'Tempo',
                                color: '#FF8C00',
                                font: {
                                    family: 'Orbitron',
                                    size: 14,
                                    weight: '700'
                                }
                            }
                        }
                    },
                    interaction: {
                        mode: 'index',
                        intersect: false
                    }
                }
            });
            
            console.log('Progress chart initialized successfully!');
        } catch(e) {
            console.error('Error creating chart:', e);
        }
    }
})();

