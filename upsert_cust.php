<?php


var_dump($_POST);

$secret = 'de8bebfa-d727-11ea-87d0-0242ac130003';
$jsonResult = json_encode(
    [
        $_POST['name'],
        $_POST['tel'],
        $_POST['email'],
    ]
);

/**
 * Content-type : application/json
 * Поля
 * First_Name
 * Last_Name (обязательное)
 * Email
 * Mobile
 */
$jsonResult = json_encode(
    [
        'First_Name' => $_POST['name'],
        'Last_Name' => $_POST['name'],
        'Mobile' =>  $_POST['tel'],
        'Email' => $_POST['email'],
    ]
);

$secretPass = sha1($secret . $jsonResult . $secret);
var_dump([
    '$secretPass' => $secretPass,
    'body' => $jsonResult,
]);
$isUpsertCust = true;
$client = new \GuzzleHttp\Client();
if ($isUpsertCust) {
    $client->post(
        'http://api.fitnessgames.online/upsert_cust',
        [
            'body' => $jsonResult
        ]
    );
}
?>
