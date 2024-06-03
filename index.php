<?php
  session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RRC</title>
  <link rel="stylesheet" href="styles.css"> <!-- CSS 파일 연결 -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
  <script src="index.js"></script>
  <script language="javascript">
    function showPopup() {
      window.open("Join.html", "회원가입", "width=400, height=300, left=100, top=50");
    }
  </script>
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

  <div class="container">
    <div class="login-box">
      <?php if (isset($_SESSION['UserName'])): ?>
      <h2><?php echo htmlspecialchars($_SESSION['UserName']); ?>님 환영합니다!</h2>
      <form class="login-form" action="Logout.php" method="post">
        <button type="submit" id="logout">로그아웃</button>
      </form>
      <?php else: ?>
      <h2>로그인</h2>
      <form class="login-form" action="Login.php" method="post">
        <input type="text" name="userId" placeholder="사용자 이름" required>
        <br>
        <input type="password" name="password" placeholder="비밀번호" required>
        <br>
        <button type="button" id="register" onclick="showPopup();">회원가입</button>
        <button type="submit" id="login">로그인</button>
      </form>
      <?php endif; ?>
    </div>

    <div id="calendar"></div>
    <script src="calendar.js"></script>

    <div id="introduce">
      <img id="intro-image-1" src="RRC1.jpg" alt="Introduction Image 1" style="width:100%;max-width:700px;display:none;">
      <img id="intro-image-2" src="RRC2.jpg" alt="Introduction Image 2" style="width:100%;max-width:700px;display:none;">
      <img id="intro-image-3" src="RRC3.jpg" alt="Introduction Image 3" style="width:100%;max-width:700px;display:none;">
      <img id="intro-image-4" src="RRC4.jpg" alt="Introduction Image 3" style="width:100%;max-width:700px;display:none;">
      <img id="intro-image-5" src="RRC5.jpg" alt="Introduction Image 3" style="width:100%;max-width:700px;display:none;">
      <br>
      <div id="intro-text-wrapper">
        <p id="intro-text"></p>
      </div>
      <br>
      <button id="prev-btn">이전</button>
      <button id="next-btn">다음</button>
    </div>
    
    

  </div>

  <footer>
    &copy; 2024 Road Respect Campaign
  </footer>

  <script src="index.js"></script>
</body>

</html>
