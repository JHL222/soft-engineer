<?php
$servername = "localhost";
$username = "software00";
$password = "abcabc12!";
$dbname = "software00";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$score = 0;

$sql = "SELECT * FROM Quiz LIMIT 20, 5;";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $quizID = $row["quizID"];
        $quizAnswer = $row["quizAnswer"];

        if (isset($_POST["question" . $quizID]) && $_POST["question" . $quizID] == $quizAnswer) {
            $score += 20; // 각 정답 당 20점 추가
        }
    }
}

$conn->close();

echo "<html><head><script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script></head><body>";
echo "<script>";
if ($score < 60) {
    echo "
        Swal.fire({
          icon: 'error',
          title: '당신의 점수는: " . $score . " 입니다.',
          confirmButtonText: '다시 풀기'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'quiz5.html';
            }
        });
    ";
} else {
    echo "
        Swal.fire({
            title: '당신의 점수는: " . $score . "점 입니다.',
            icon: 'success',
            confirmButtonText: '다음 문제 풀기'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'quiz.html';
            }
        });
    ";
}
echo "</script></body></html>";
?>