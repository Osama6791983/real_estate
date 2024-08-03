// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Total Payouts',
                data: [0, 10000, 50000, 20000, 100000, 250000, 500000],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.4, // For smooth line curves
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                min: 0, // Set minimum value for y-axis
                max: 600000, // Set maximum value for y-axis
                ticks: {
                    stepSize: 100000, // Define the interval between tick marks
                },
            },
        },
        plugins: {
            legend: {
                display: false, // Hide legend if not needed
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        animation: {
            duration: 0, // Disable animation
        },
    };

    return (
        <div style={{ position: 'relative', height: '400px'  }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
