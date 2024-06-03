<?php
session_start();

if (!isset($_SESSION['UserID'])) {
    echo "로그인 후에 후원 신청이 가능합니다.";
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
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

    // Handle the file upload
    $target_dir = "donateImage/";  // Change the target directory
    $target_file = $target_dir . basename($_FILES["image"]["name"]);

    // Move the uploaded file to the target directory
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO Sponsor (SponTitle, SponBank, SponImage, UserID) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $title, $bank, $image, $userid);

        // Set parameters and execute
        $title = $_POST['title'];
        $bank = $_POST['bank'];
        $image = basename($_FILES["image"]["name"]);
        $userid = $_SESSION['UserID'];

        if ($stmt->execute()) {
            header("Location: donate.php");
            exit;
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "이미지를 업로드하는 데 오류가 발생했습니다.";
    }

    $conn->close();
}
?>