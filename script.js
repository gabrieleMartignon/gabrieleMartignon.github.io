function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        firm : document.getElementById("firm").value,
        message :document.getElementById("message").value
    }

    emailjs.send("service_t2r4dhm","template_i870vnf",parms).then(alert("Email Sent, thank you!"))
}