const menuHome = () => {
    document.getElementById("contentFrame").setAttribute("src", "home.html")
    document.getElementById("menuHome").style = "color:black; background-color:white"
    document.getElementById("menuJuke").style = "color:white; background-color:#55b2e4"
    document.getElementById("menuGame").style = "color:white; background-color:#55b2e4"
}

const menuJuke = () => {
    document.getElementById("contentFrame").setAttribute("src", "jukebox.html")
    document.getElementById("menuJuke").style = "color:black; background-color:white"
    document.getElementById("menuHome").style = "color:white; background-color:#55b2e4"
    document.getElementById("menuGame").style = "color:white; background-color:#55b2e4"
}

const menuGame = () => {
    document.getElementById("contentFrame").setAttribute("src", "game.html")
    document.getElementById("menuGame").style = "color:black; background-color:white"
    document.getElementById("menuJuke").style = "color:white; background-color:#55b2e4"
    document.getElementById("menuHome").style = "color:white; background-color:#55b2e4"
}