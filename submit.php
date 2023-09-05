<?php

require_once 'vendor/autoload.php'; // Vous devez inclure la bibliothèque Twilio PHP

use Twilio\Rest\Client;

$accountSid = 'ACadf76197fa7bc0059dcad2cffa263c05';
$authToken = '49d17ae5c238e33eb38faa3f51357d0f';
$twilioPhoneNumber = '+12059007798';
$toPhoneNumber = '+33769670407'; // Votre numéro de téléphone

$client = new Client($accountSid, $authToken);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $postData = json_decode(file_get_contents('php://input'), true);
    $name = $postData['name'];
    $email = $postData['email'];
    $message = $postData['message'];

    try {
        $client->messages->create(
            $toPhoneNumber,
            [
                'from' => $twilioPhoneNumber,
                'body' => "Nouveau message de $name ($email) : $message",
            ]
        );
        echo json_encode(['success' => true]);
    } catch (Exception $e) {
        echo json_encode(['success' => false]);
    }
} else {
    echo json_encode(['success' => false]);
}

?>
