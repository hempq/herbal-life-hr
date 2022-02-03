<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if( empty($_POST['text'])) {
    echo json_encode(
        [
           "message" => "Textarea is empty",
           "results" => []
        ]
    ); 
    exit();
}

if ($_POST){
    http_response_code(200);
    $text = $_POST['text'];
    $words = preg_split("/\s+/", $text);
    $pattern = "/([e|E])\w+/";
    $wordsWithE = [];
    $wordsWithEvenE = [];

    foreach ($words as $key => $value) {
        if(preg_match($pattern,$value)){
            $wordsWithE[] = $value;
        }
    };
       

    foreach ($wordsWithE as $key => $value) {
        $x = 0;
        foreach (count_chars($value, 1) as $i => $val) {
            if(chr($i) == "E"){
                $x= $val;
            }
            if(chr($i) == "e"){
                $x=$x + $val;
        }
    };

        if ($x%2 == 0) {
            $wordsWithEvenE[] = $value;
        }
       

    };

    echo json_encode(
        [
            "message" => "There are " . count($wordsWithEvenE) . " results",
            "results" => $wordsWithEvenE
        ]
    );  
} else {
    echo json_encode(
        [
            "message" => "No results",
            "results" => []
        ]
    );   
}