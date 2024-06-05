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
    <style>
        .popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 40%;
            height: 40%;
            padding: 20px;
            background: white;
            box-shadow: 0 5px 15px rgba(0,0,0,.5);
            z-index: 1000;
            overflow: auto;
        }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script>
        function openPopup() {
            document.getElementById('popup').style.display = 'block';
            document.getElementById('popup-overlay').style.display = 'block';
        }

        function closePopup() {
            document.getElementById('popup').style.display = 'none';
            document.getElementById('popup-overlay').style.display = 'none';
        }

        function submitForm() {
            document.getElementById('donateForm').submit();
        }
        function noOpenPopup() {
            Swal.fire({
                icon: "error",
                title: "로그인 후에 후원 신청이 가능합니다.",
                showConfirmButton: false,
                timer: 2000
            });
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

<!-- 소개 섹션 -->
<div class="content">
    <?php
    session_start();
    if(isset($_SESSION['UserID'])) {
        echo "<button class=\"donate-button\" onclick=\"openPopup()\">후원 신청하기</button>";
    } else {
        echo "<button class=\"donate-button\" onclick=\"noOpenPopup()\">후원 신청하기</button>";
    }
    ?>
    <div id="popup" class="popup">
        <form id="donateForm" action="donate_process.php" method="post" enctype="multipart/form-data">
            후원 제목:<input type="text" id="title" name="title" required><br/>
            은행 계좌:<input type="text" id="bank" name="bank" required><br/>
            이미지 업로드:<input type="file" id="image" name="image" required><br/>
            <button type="button" onclick="submitForm()">신청</button>
            <button type="button" onclick="closePopup()">취소</button>
        </form>
    </div>
    <div id="popup-overlay" class="popup-overlay" onclick="closePopup()"></div>
    <div class="sponsor-section">
        <?php
        // Database connection
        $servername = "localhost";
        $username = "software00";
        $password = "abcabc12!";
        $dbname = "software00";

        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Query to get sponsor data
        $sql = "SELECT SponTitle, SponBank, SponImage, UserID FROM Sponsor";
        $result = $conn->query($sql);

        if ($result === FALSE) {
            echo "Error: " . $conn->error;
        } else if ($result->num_rows > 0) {
            // Output data of each row
            while($row = $result->fetch_assoc()) {
                echo "<div class=\"sponsor-row\">";
                echo "<div class=\"sponsor-item\">";
                echo "<img src=\"donateImage/" . $row["SponImage"] . "\" alt=\"후원 이미지\" class=\"sponsor-image\">";
                echo "<div class=\"sponsor-text\">";
                echo "<h3>" . $row["SponTitle"] . "</h3>";
                echo "<p>계좌 : " . $row["SponBank"] . "</p>";
                echo "<p>신청자 : " . $row["UserID"] . "</p>";
                echo "</div>";
                echo "</div>";
                echo "</div>";
            }
        } else {
            echo "0 results";
        }
        $conn->close();
        ?>
    </div>
</div>

<footer>
    &copy; 2024 Road Respect Campaign
</footer>
</body>

</html>
