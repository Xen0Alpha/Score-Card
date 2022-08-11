let hScore = 0
let gScore = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


function add1PointHome() {
    hScore += 1
    homeScore.textContent = hScore
}

function add2PointHome() {
    hScore += 2
    homeScore.textContent = hScore
}

function add3PointHome() {
    hScore += 3
    homeScore.textContent = hScore
}

function add1PointGuest() {
    gScore += 1
    guestScore.textContent = gScore
}

function add2PointGuest() {
    gScore += 2
    guestScore.textContent = gScore
}

function add3PointGuest() {
    gScore += 3
    guestScore.textContent = gScore
}