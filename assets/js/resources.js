//Program Selection
let tacticsResourcePath = [document.querySelector(".tactics-resource-menu-main")];
let spinOffsResourcePath = [document.querySelector(".spin-offs-resource-menu-main")];
let mainSeriesResourcePath = [document.querySelector(".main-series-resource-menu-main")];
let currentResourcePath;
let resourcePath;
changeProgram("main-series", false);

function changeProgram(programSelection, toggle) {
    let programButton = document.querySelector(".program-select");
    let primaryColor = document.querySelector(".custom-bg-primary");
    let selectedColor = document.querySelector(".custom-bg-primary-selected");
    let programDropdown = document.querySelectorAll(".program-dropdown");

    let tacticsResources = document.querySelector("#tactics-resource-menu");
    let spinOffsResources = document.querySelector("#spin-offs-resource-menu");
    let mainSeriesResources = document.querySelector("#main-series-resource-menu");

    let mainSeriesBackground = "linear-gradient(138deg, rgba(0,0,0,1) 0%, rgba(49,67,115,1) 22%, rgba(36,88,255,1) 78%, rgba(68,255,255,1) 100%)";
    let tacticsBackground = "linear-gradient(138deg, rgba(50,0,0,1) 0%, rgba(120,0,0,1) 22%, rgba(175,50,0,1) 78%, rgba(255,200,0,1) 100%)";
    let spinOffBackground = "linear-gradient(138deg, rgba(0,0,0,1) 0%, rgba(81,0,255,1) 22%, rgba(255,111,111,1) 78%, rgba(173,197,0,1) 100%)";

    resourcePath = programSelection;

    if(programSelection === "tactics") {
        currentResourcePath = tacticsResourcePath;
        primaryColor.style.background = tacticsBackground;
        selectedColor.style.backgroundColor = "rgba(255, 208, 0, 0.5)";
        document.getElementById("footerColor").style.background = tacticsBackground;
        programButton.textContent = "Final Fantasy / Tactics";
        programDropdown[0].textContent = "Final Fantasy / Tactics";
        programDropdown.forEach(function(dropdown) {
            dropdown.style.color = "white";
        });

        programButton.classList.add("program-select-tactics");
        programButton.classList.remove("program-select-spin-offs");
        programButton.classList.remove("program-select-main-series");

        tacticsResources.style.display = "block";
        spinOffsResources.style.display = "none";
        mainSeriesResources.style.display = "none";

        document.querySelectorAll(".resource-cards-container").forEach(function(list) {
            list.style.display = "none";
        });

        document.querySelector("#tactics-subject-main").style.display = "block";
        document.querySelector("#main-series-subject-main").style.display = "none";

    } else if(programSelection === "spin-offs") {
        currentResourcePath = spinOffsResourcePath;
        primaryColor.style.background = spinOffBackground;
        selectedColor.style.backgroundColor = "rgba(240, 81, 51, 0.5)";

        document.getElementById("footerColor").style.background = spinOffBackground;
        programButton.textContent = "Final Fantasy / Spin-offs";
        programDropdown[0].textContent = "Final Fantasy / Spin-offs";
        programDropdown.forEach(function(dropdown) {
            dropdown.style.color = "white";
        });

        programButton.classList.remove("program-select-tactics");
        programButton.classList.add("program-select-spin-offs");
        programButton.classList.remove("program-select-main-series");

        tacticsResources.style.display = "none";
        spinOffsResources.style.display = "block";
        mainSeriesResources.style.display = "none";

        document.querySelectorAll(".resource-cards-container").forEach(function(list) {
            list.style.display = "none";
        });

        document.querySelector("#tactics-subject-main").style.display = "none";
        document.querySelector("#main-series-subject-main").style.display = "none";
        document.querySelector("#spin-offs-subject-main").style.display = "block";

    } else if(programSelection === "main-series") {
        currentResourcePath = mainSeriesResourcePath;
        primaryColor.style.background = mainSeriesBackground;
        selectedColor.style.backgroundColor = "rgba(0, 181, 204, 0.5)";
        document.getElementById("footerColor").style.background = mainSeriesBackground;
        programButton.textContent = "Final Fantasy / Main Series";
        programDropdown[0].textContent = "Final Fantasy / Main Series";
        programDropdown.forEach(function(dropdown) {
            dropdown.style.color = "white";
        });

        programButton.classList.remove("program-select-tactics");
        programButton.classList.remove("program-select-spin-offs");
        programButton.classList.add("program-select-main-series");

        tacticsResources.style.display = "none";
        spinOffsResources.style.display = "none";
        mainSeriesResources.style.display = "block";

        document.querySelectorAll(".resource-cards-container").forEach(function(list) {
            list.style.display = "none";
        });
        document.querySelector("#tactics-subject-main").style.display = "none";
        document.querySelector("#main-series-subject-main").style.display = "block";

    }

    if(toggle == null) {
        $(programButton).click();
    }
}

//Mobile Resource Navigation Menu
function toggleMobileResourceNavigation() {
    let nav = document.querySelector(".nav-container");
    document.querySelector(".mobile-nav-slice").classList.toggle("mobile-nav-slice-display");

    nav.classList.toggle("nav-open");
}

//Resource Navigation
let menuContainer = document.querySelector(".nav-container");
function openResourceMenu(currentMenu, newMenu) {

    currentMenu = currentMenu.parentNode.parentNode;
    newMenu = document.querySelector("." + newMenu);

    currentMenu.classList.add("resource-menu-previous");
    newMenu.classList.add("resource-menu-new");

    if(resourcePath === "tactics") {
        tacticsResourcePath.push(newMenu);
    } else if (resourcePath === "spin-offs") {
        spinOffsResourcePath.push(newMenu);
    } else if (resourcePath === "main-series") {
        mainSeriesResourcePath.push(newMenu);
    }

    checkOverflow(newMenu);
}

function returnResourceMenu(currentMenu) {
    let newMenu;
    currentMenu = currentMenu.parentNode.parentNode;

    if(resourcePath === "tactics") {
        newMenu = tacticsResourcePath[tacticsResourcePath.length - 2];
    } else if (resourcePath === "spin-offs") {
        newMenu = spinOffsResourcePath[spinOffsResourcePath.length - 2];
    } else if (resourcePath === "main-series") {
        newMenu = mainSeriesResourcePath[mainSeriesResourcePath.length - 2];
    }

    currentMenu.classList.remove("resource-menu-new");
    newMenu.classList.remove("resource-menu-previous");

    if(resourcePath === "tactics") {
        tacticsResourcePath.pop();
    } else if (resourcePath === "spin-offs") {
        spinOffsResourcePath.pop();
    } else if (resourcePath === "main-series") {
        mainSeriesResourcePath.pop();
    }

    checkOverflow(newMenu);
}

function openResourceCardList(cardList) {
    document.querySelectorAll(".resource-cards-container").forEach(function(list) {
        list.style.display = "none";
    });

    document.querySelector("#tactics-subject-main").style.display = "none";
    document.querySelector("#main-series-subject-main").style.display = "none";
    let list = document.querySelector("#" + cardList);
    list.style.display = "block";

    toggleMobileResourceNavigation();
}



function checkOverflow(newMenu) {
    if(menuContainer.offsetHeight < newMenu.scrollHeight) {
        menuContainer.style.overflowY = "visible";
    } else if (menuContainer.offsetHeight > newMenu.scrollHeight) {
        menuContainer.style.overflowY = "hidden";
    }
}