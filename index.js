     const button = document.getElementById('submit-button')

        button.addEventListener('click', function() {
        const EmailInput = document.getElementById('email')
        const email = EmailInput.value.trim()
        const message = document.getElementById('status-message')
        const ErrIcon = document.getElementById('icon-error')

        //message for unvalid email

        
        //valid email
        const ValidEmail = "muhammadaufa@gmail.com"

        if (email === ValidEmail) {
            alert("Email True!. Succsess")
            message.textContent = ""
            button.style.backgroundColor = ""
        } else {
            ErrIcon.style.visibility = 'visible'
            EmailInput.style.border = '2px solid hsl(0, 93%, 68%)'
            console.log(message)
            message.textContent = "Please provide a valid email"
            message.style.color = 'hsl(0, 36%, 70%)'
            message.style.marginLeft = '30px'
            button.style.background = 'pink'
        }
    })
