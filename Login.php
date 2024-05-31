<?php
$servername = "localhost";
$username = "software00";
$password = "abcabc12!";
$dbname = "software00";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$userId = $_POST['userId'];
$userPassword = $_POST['password'];

$sql = "SELECT * FROM User WHERE UserID='$userId'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $hashedPassword = $row['UserPW'];
    $userName = $row['UserName'];

    if (password_verify($userPassword, $hashedPassword)) {
        session_start();
        $_SESSION['UserID'] = $userId;
        $_SESSION['UserName'] = $userName;
        header("Location: index.php");
        exit;
    } else {
        echo "<script>alert('비밀번호가 일치하지 않습니다. 다시 시도해주세요.'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('사용자 아이디가 존재하지 않습니다.'); window.history.back();</script>";
}

$conn->close();
?>
