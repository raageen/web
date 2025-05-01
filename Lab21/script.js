function sendNumber() {
    const number = document.getElementById("numberInput").value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "server.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById("result").innerText = xhr.responseText;
        } else {
            document.getElementById("result").innerText = "Помилка з'єднання з сервером.";
        }
    };

    xhr.send("number=" + encodeURIComponent(number));
}
