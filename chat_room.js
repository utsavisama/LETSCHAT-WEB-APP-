function addroom() {
    email_name = document.getElementById("email_input").value;
    pass_name = document.getElementById("pass_input").value;
    
    localStorage.setItem("email", email_name)
    localStorage.setItem("pass", pass_name)

}

getData();

function redirectToRoomName(name){
localStorage.setItem("room_name", name)
window.location = "kwitter_page.html"
}