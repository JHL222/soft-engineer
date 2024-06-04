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
    "사고현황, 교통 안전 법률, 안전 교육 영상과 같은 컨텐츠를 제공하여 사고 예방 및 법적 준수, 실질적인 지식을 통해 긴급상황에서도 침착하고 효과적인 대응을 가능하게 하고, 개인뿐만 아니라 지역사회 전체에서 안전에 대한 인식ㅇ르 높여 안전 문화를 조성합니다.", "공모전에 참여할 기회를 제공하여, 참여자들이 안전 운전에 대한 창의적인 아이디어를 제출하도록 유도함으로써, 창의성을 발휘할 수 있는 기회를 제공합니다.", 
    "RRC 퀴즈 페이지는 Road Respect Campaign (RRC)의 중요한 구성 요소로, 도로 안전에 대한 이해를 재미있고 흥미로운 방식으로 높이는 것을 목표로 합니다. 이 페이지는 도로 이용자들이 도로 교통 관련 지식을 테스트하고, 영상을 통해서 배운 내용을 점검하며, 안전 문화를 더욱 강화할 수 있는 기회를 제공합니다.", "후원 페이지는 Road Respect Campaign (RRC)의 중요한 부분으로, 우리의 비전을 실현하는 데 필요한 자원을 확보하는 데 중추적인 역할을 합니다. 후원자들의 지원 덕분에 우리는 더 많은 사람들에게 도로 안전의 중요성을 알리고, 다양한 교육 프로그램과 캠페인을 전개할 수 있습니다."
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

