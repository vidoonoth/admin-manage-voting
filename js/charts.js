// Fungsi untuk menginisialisasi Chart.js
function initializeVotingChart() {
  const ctx = document.getElementById("votingChart");
  // memastikan elemen canvas ada dan belum ada chart yang diinisialisasi di sana
  if (ctx && typeof Chart !== 'undefined' && Chart.getChart(ctx) === undefined) {
    const votingChart = new Chart(ctx.getContext("2d"), {
      type: "bar",
      data: {
        labels: ["Alfin Tsabit", "Siti Rahayu", "Agus Kurniawan"],
        datasets: [
          {
            label: "Jumlah Suara",
            data: [450, 300, 100],
            backgroundColor: [
              "rgba(59, 130, 246, 0.6)", // Blue
              "rgba(234, 179, 8, 0.6)", // Yellow
              "rgba(107, 114, 128, 0.6)", // Gray
            ],
            borderColor: [
              "rgba(59, 130, 246, 1)",
              "rgba(234, 179, 8, 1)",
              "rgba(107, 114, 128, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 50,
            },
          },
        },
      },
    });
  }
}

function initializeParticipationChart() {
  const ctx = document.getElementById("participationChart");
  if (ctx && typeof Chart !== 'undefined' && Chart.getChart(ctx) === undefined) {
    const total = 1200;
    const sudahVoting = 850;
    const belumVoting = total - sudahVoting;
    new Chart(ctx.getContext("2d"), {
      type: "doughnut",
      data: {
        labels: ["Sudah Voting", "Belum Voting"],
        datasets: [{
          data: [sudahVoting, belumVoting],
          backgroundColor: [
            "rgba(15, 173, 121, 0.7)",
            "#ef4444", 
          ],
          borderColor: [
            "rgba(15, 173, 121, 0.7)",
            "#ef4444",
          ],
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { 
            position: "bottom",
            labels: {
              generateLabels: function(chart) {
                const data = chart.data.datasets[0].data;
                const labels = chart.data.labels;
                const total = data.reduce((a, b) => a + b, 0);
                return labels.map((label, i) => {
                  const value = data[i];
                  const percent = ((value / total) * 100).toFixed(1);
                  return {
                    text: `${label} (${percent}%)`,
                    fillStyle: chart.data.datasets[0].backgroundColor[i],
                    strokeStyle: chart.data.datasets[0].borderColor[i],
                    lineWidth: 1,
                    hidden: isNaN(data[i]) || chart.getDataVisibility(i) === false,
                    index: i
                  };
                });
              }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const value = context.parsed;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percent = ((value / total) * 100).toFixed(1);
                return `${context.label}: ${value} (${percent}%)`;
              }
            }
          }
        },
      },
    });
  }
}