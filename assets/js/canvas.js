document.querySelector("#startFight").addEventListener("click", function () {
    alert("OH NO");
    document.querySelector("#bossFight").style.display = "block";
    document.querySelector("#welcomeText").style.display = "none";
    document.querySelector("#introButton").style.display = "none";
});

function lightAttack() {
    // Get element with the id of hp
    let el = document.getElementById("hp");
    // Set currentCount to the text of the element
    let currentCount = el.innerText;
    let a = 1;

    if (currentCount == 0) {

        return [$("#enterSite").html(`<p>You have succeeded and worthy to enter!</p><br><a href="#"><button>Enter site</button></a>`),
            document.querySelector("#attackButtons").style.display = "none"];

    } else if (currentCount < 0) {
        alert("Fail try again");
        el.innerText = "12";
    }

    else {
        // Decrement current count and set it as the new text in our element
        el.innerText = currentCount - a;
    }

}

function heavyAttack() {
    // Get element with the id of hp
    let el = document.getElementById("hp");
    // Set currentCount to the text of the element
    let currentCount = el.innerText;
    let a = 8;

    if (currentCount == 0) {

        return [$("#enterSite").html(`<p>You have succeeded and worthy to enter!</p><br><a href="#"><button>Enter site</button></a>`),
            document.querySelector("#attackButtons").style.display = "none"];


    } else if (currentCount < 0) {
        alert("Fail try again");
        el.innerText = "12";
    }

    else {
        // Decrement current count and set it as the new text in our element
        el.innerText = currentCount - a;
    }

}