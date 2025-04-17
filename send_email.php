<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// 引入 PHPMailer 的自动加载文件
require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 获取表单数据
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // 创建一个新的 PHPMailer 实例
    $mail = new PHPMailer(true);
    try {
        // 设置SMTP邮件服务器
        $mail->isSMTP();
        $mail->Host = 'smtp.163.com';  // 使用 Gmail 的 SMTP 服务器
        $mail->SMTPAuth = true;
        $mail->Username = '18707072787@163.com';  // 你的 Gmail 邮箱
        $mail->Password = 'XCsHL6X6qJLrqciN';  // 你的 Gmail 密码
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 25;

        // 收件人和发件人
        $mail->setFrom('18707072787@163.com', '刘阳春');
        $mail->addAddress('1353690562@qq.com');  // 你的目标邮箱

        // 邮件内容
        $mail->isHTML(false);
        $mail->Subject = 'Message from Personal Website';
        $mail->Body    = "Name: $name\n Email: $email\n Message: \n$message";

        // 发送邮件
        $mail->send();
    //     echo '信息已发送成功！';
    // } catch (Exception $e) {
    //     echo "发送失败：{$mail->ErrorInfo}";
    // }
    echo "<script>alert('Message has been sent!'); window.location.href = 'contact.html';</script>";
} catch (Exception $e) {
    echo "<script>alert('error：{$mail->ErrorInfo}'); history.back();</script>";
}
} else {
// 非 POST 请求访问时跳转
header('Location: contact.html');
exit;
}
?>
