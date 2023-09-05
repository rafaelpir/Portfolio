<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Adresse e-mail de réception
    $to = "rafa2002@hotmail.fr";
    
    // Sujet du message
    $subject = "Message de $name";
    
    // Contenu du message
    $messageBody = "Nom: $name\n";
    $messageBody .= "Email: $email\n\n";
    $messageBody .= "Message:\n$message";
    
    // Entêtes du message
    $headers = "From: $email" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();
    
    // Envoyer l'e-mail
    mail($to, $subject, $messageBody, $headers);
    
    // Rediriger l'utilisateur vers une page de confirmation
    header("Location: confirmation.html");
} else {
    // En cas d'accès direct au fichier PHP, rediriger l'utilisateur
    header("Location: index.html");
}
?>
