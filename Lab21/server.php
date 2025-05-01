<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["number"])) {
        $number = floatval($_POST["number"]);
        $square = $number * $number;
        echo "Квадрат числа $number дорівнює $square.";
    } else {
        echo "Число не передано.";
    }
}
?>
