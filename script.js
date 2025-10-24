// script.js
document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.querySelector(".loginbtn");
    const emailInput = document.querySelector(".email");
    const passInput = document.querySelector(".pass");
    const userAlert = document.querySelector(".userpass");
    const passAlert = document.querySelector(".alertpass");

    loginBtn.addEventListener("click", function() {
        let showUserAlert = false;
        let showPassAlert = false;

        // check empty fields
        if (emailInput.value.trim() === "") {
            showUserAlert = true;
        } else if (passInput.value.trim() === "") {
            showPassAlert = true;
        } 

        // show the proper alerts
        if (showUserAlert) {
            userAlert.style.opacity = "1";
            setTimeout(() => (userAlert.style.opacity = "0"), 3000);
        }
        if (showPassAlert) {
            passAlert.style.opacity = "1";
            setTimeout(() => (passAlert.style.opacity = "0"), 3000);
        }
    });
});
