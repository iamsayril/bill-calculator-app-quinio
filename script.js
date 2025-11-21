document.addEventListener("DOMContentLoaded", () => {
    const ctxUsage = document.getElementById("usageChart");
    if (ctxUsage) {
        new Chart(ctxUsage, {
            type: "line",
            data: {
                labels: ["1", "5", "9", "13", "17", "21", "25", "31"],
                datasets: [{
                    label: "Kwh Usage",
                    data: [10, 12, 9, 15, 18, 17, 20, 22],
                    borderColor: "#F7A70C",
                    tension: 0.4,
                    borderWidth: 4,
                    pointRadius: 0,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, grid: { display: false }, ticks: { display: false }},
                    x: { grid: { display: false }}
                }
            }
        });
    }

    const ctxAppliance = document.getElementById("applianceChart");
    if (ctxAppliance) {
        new Chart(ctxAppliance, {
            type: "pie",
            data: {
                labels: ["Air (AC)", "Refrigerator", "Washing Machine", "Lighting"],
                datasets: [{
                    data: [42, 19, 15, 14],
                    backgroundColor: ["#3B82F6", "#8B5CF6", "#14B8A6", "#FACC15"],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } }
            }
        });
    }
});
