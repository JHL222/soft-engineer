<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RRC</title>
  <link rel="stylesheet" href="styles3.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet">
</head>

<body>
  <header>
    <a href="index.php">
      <span style="font-size:500%;"><b>R</b></span><span style="font-size:300%;">oad</span>&emsp;
      <span style="font-size:500%;"><b>R</b></span><span style="font-size:300%;">espect</span>&emsp;
      <span style="font-size:500%;"><b>C</b></span><span style="font-size:300%;">ampaign</span>
    </a>
    <nav>
      <ul>
        <li><a href="./data.html">자료실</a></li>
        <li>|</li>
        <li><a href="./contest.php">공모전</a></li>
        <li>|</li>
        <li><a href="quiz.html">퀴즈</a></li>
        <li>|</li>
        <li><a href="./donate.php">후원</a></li>
      </ul>
    </nav>
  </header>

  <!-- 소개 섹션 -->
  <div class="content">
<!--    <button class="donate-button">참여하기</button>-->
    <div class="sponsor-section">
      <?php
      // 데이터베이스 연결 설정
      $servername = "localhost";
      $username = "software00";
      $password = "abcabc12!";
      $dbname = "software00";

      // MySQL 연결 생성
      $conn = new mysqli($servername, $username, $password, $dbname);

      // 연결 검사
      if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
      }

      // 쿼리 실행
      $sql = "SELECT ContestImage, ContestTitle, ContestDesc, Start_Date, End_Date, ContentLink FROM Contests";
      $result = $conn->query($sql);

      // 공모전 정보가 있는 경우에만 반복
      if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
      $contestImage = $row["ContestImage"];
      $contestTitle = $row["ContestTitle"];
      $contestDesc = $row["ContestDesc"];
      $start_Date = $row["Start_Date"];
      $end_Date = $row["End_Date"];
      $contentLink = $row["ContentLink"]
      ?>
          <div class="sponsor-row">
              <div class="sponsor-item">
                  <a href="<?php echo $contentLink; ?>" class="donate-button">참여하기</a>
                  <img src="<?php echo $contestImage; ?>" alt="후원 이미지" class="sponsor-image">
                  <div class="sponsor-text">
                      <h3><?php echo $contestTitle; ?></h3>
                      <p><?php echo $contestDesc; ?></p>
                      시작일: <?php echo $start_Date; ?><br>
                      종료일: <?php echo $end_Date; ?>
                  </div>
              </div>
          </div>
      <?php
          }
      } else {
          echo "0 results";
      }
      // 연결 종료
      $conn->close();
      ?>
    </div>
  </div>

  <footer>
    &copy; 2024 Road Respect Campaign
  </footer>
</body>

</html>
