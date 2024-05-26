<?php
$servername = "localhost";
$username = "software00";
$password = "abcabc12!";
$dbname = "software00";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$id = $_POST['id'];
$password = $_POST['password'];
$confirmPassword = $_POST['confirm_password'];

if($password !== $confirmPassword) {
    die("입력한 비밀번호가 일치하지 않습니다.");
}

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO User (UserID, UserPW, UserName) VALUES ('$id', '$hashedPassword', '$name')";

if ($conn->query($sql) === TRUE) {
    echo "회원가입이 완료되었습니다.";
    echo "<script>";
    echo "setTimeout(function() {";
    echo "    self.close();";
    echo "}, 3000);";
    echo "</script>";
} else {
    echo "오류: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
