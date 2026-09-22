function saveName() {
    let name = document.getElementById("username").value;

    localStorage.setItem("username", name);

    document.getElementById("display").innerHTML = "Welcome, " + name;
}

// Display name when page is reloaded
let savedName = localStorage.getItem("username");

if (savedName) {
    document.getElementById("display").innerHTML = "Welcome, " + savedName;
}