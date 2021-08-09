function signIn() {
    email_name = document.getElementById("email_input").value;
    pass_name = document.getElementById("pass_input").value;
    
    localStorage.setItem("email", email_name)
    localStorage.setItem("pass", pass_name)

    window.location = "chat_room.html"
}