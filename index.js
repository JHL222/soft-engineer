window.onload = function () {
    document.getElementById("incident-status").style.display = "block";
    document.getElementById("drive-educate").style.display = "none";
    document.getElementById("law").style.display = "none";
    document.getElementById("blackbox").style.display = "none";
}

function showIncidentStatus() {
    document.getElementById("incident-status").style.display = "block";
    document.getElementById("drive-educate").style.display = "none";
    document.getElementById("law").style.display = "none";
    document.getElementById("blackbox").style.display = "none";
}

function showDriveEducate() {
    document.getElementById("incident-status").style.display = "none";
    document.getElementById("drive-educate").style.display = "block";
    document.getElementById("law").style.display = "none";
    document.getElementById("blackbox").style.display = "none";
}

function showLaw() {
    document.getElementById("incident-status").style.display = "none";
    document.getElementById("drive-educate").style.display = "none";
    document.getElementById("law").style.display = "block";
    document.getElementById("blackbox").style.display = "none";
}

function showBlackbox() {
    document.getElementById("incident-status").style.display = "none";
    document.getElementById("drive-educate").style.display = "none";
    document.getElementById("law").style.display = "none";
    document.getElementById("blackbox").style.display = "block";
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

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll("#introduce img");
  const texts = [
    "도로 이용자들 사이에 상호 존중과 안전 문화를 촉진하기 위해 설립된 캠페인입니다. 이 캠페인은 운전자, 자전거 이용자, 보행자 등 모든 도로 사용자들이 서로를 이해하고 배려하는 태도를 기르도록 돕는 것을 목표로 합니다.도로는 모두가 함께 사용하는 공간입니다. 그러나 매년 수많은 사고와 갈등이 발생하면서 도로 안전에 대한 중요성이 커지고 있습니다. Road Respect Campaign은 이러한 문제를 해결하기 위해 다음과 같은 활동을 전개하고 있습니다.",
    "자료실에서는 사고현황, 교통 안전 법률, 안전교육영상과 같은 컨텐츠들을 제공합니다.", "공모전에서 운전자 또는 도로 관련 공모전을 참여할 수 있습니다.", "퀴즈에서는 영상과 관련된 퀴즈를 풀 수 있습니다.", "후원을 할 수 있습니다."
  ];
  const introText = document.getElementById("intro-text");
  let currentImageIndex = 0;
  const totalImages = images.length;
  const displayTime = 10000; // 3 seconds =3000

  function showImage(index) {
    images.forEach((img, idx) => {
      img.style.display = idx === index ? "block" : "none";
    });
    introText.innerText = texts[index];
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
  }

  document.getElementById("next-btn").addEventListener("click", nextImage);
  document.getElementById("prev-btn").addEventListener("click", prevImage);

  setInterval(nextImage, displayTime);

  // Show the first image initially
  showImage(currentImageIndex);
});

