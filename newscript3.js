function getQuote() {

    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            document.getElementById("quote").innerHTML =
                '"' + data.content + '"<br>— ' + data.author;
        })
        .catch(error => {
            document.getElementById("quote").innerHTML =
                "Unable to fetch quote.";
        });
}