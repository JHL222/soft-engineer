window.onload = function () {
    document.getElementById("incident-status").style.display = "block";
    document.getElementById("drive-educate").style.display = "none";
    document.getElementById("sponsor").style.display = "none";
    document.getElementById("law").style.display = "none";
    document.getElementById("report").style.display = "none";
}

function showIncidentStatus() {
    document.getElementById("incident-status").style.display = "block";
    document.getElementById("drive-educate").style.display = "none";
    document.getElementById("sponsor").style.display = "none";
    document.getElementById("law").style.display = "none";
    document.getElementById("report").style.display = "none";
}

function showDriveEducate() {
    document.getElementById("incident-status").style.display = "none";
    document.getElementById("drive-educate").style.display = "block";
    document.getElementById("sponsor").style.display = "none";
    document.getElementById("law").style.display = "none";
    document.getElementById("report").style.display = "none";
}

function showSponsor() {
    document.getElementById("incident-status").style.display = "none";
    document.getElementById("drive-educate").style.display = "none";
    document.getElementById("sponsor").style.display = "block";
    document.getElementById("law").style.display = "none";
    document.getElementById("report").style.display = "none";
}

function showLaw() {
    document.getElementById("incident-status").style.display = "none";
    document.getElementById("drive-educate").style.display = "none";
    document.getElementById("sponsor").style.display = "none";
    document.getElementById("law").style.display = "block";
    document.getElementById("report").style.display = "none";
}

function showReport() {
    document.getElementById("incident-status").style.display = "none";
    document.getElementById("drive-educate").style.display = "none";
    document.getElementById("sponsor").style.display = "none";
    document.getElementById("law").style.display = "none";
    document.getElementById("report").style.display = "block";
}

const chartData = {
    labels: ["중앙선 침범", "신호위반", "안전거리 미확보", "안전운전 의무 불이행", "교차로 통행방법 위반", "보행자 보호의무 위반", "기타"],
    data: [119, 305, 262, 1707, 182, 86, 276],
};

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.querySelector(".my-chart").getContext("2d");
    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: chartData.labels,
            datasets: [{
                data: chartData.data,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',  // Light Sea Green
                    'rgba(255, 159, 64, 0.2)',  // Light Coral
                    'rgba(255, 205, 86, 0.2)',  // Light Goldenrod Yellow
                    'rgba(153, 102, 255, 0.2)', // Light Slate Blue
                    'rgba(54, 162, 235, 0.2)',  // Light Sky Blue
                    'rgba(201, 203, 207, 0.2)', // Light Slate Gray
                    'rgba(255, 99, 132, 0.2)',  // Light Salmon
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',    // Sea Green
                    'rgba(255, 159, 64, 1)',    // Coral
                    'rgba(255, 205, 86, 1)',    // Goldenrod
                    'rgba(153, 102, 255, 1)',   // Slate Blue
                    'rgba(54, 162, 235, 1)',    // Sky Blue
                    'rgba(201, 203, 207, 1)',   // Slate Gray
                    'rgba(255, 99, 132, 1)',    // Salmon
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'right',
              },
              
              datalabels: {
                color: '#000',
                anchor: 'end',
                align: 'start',
                offset: 20,
                font: {
                  weight: 'bold'
                },
                formatter: (value) => {
                  return value + "건";
                }
              }
            }
          },
          plugins: [ChartDataLabels]
        });

});
