const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e)=>{
    e.preventDefault()
    //service ID - template ID - form - publicKey
    emailjs.sendForm('service_gahv5xt','template_wkyisbd','#contact-form','qCpasfeXt6fN_sll9')
        .then(() => {
            //Show message sent
            contactMessage.textContent = 'Message Sent Successfully!✅'

            //Remove message after 5 sec
            setTimeout(()=>{
                contactMessage.textContent = ''
            },4000)

            //Reset inputs
            contactForm.reset()
        },()=>{
            //Show error message
            contactMessage.textContent = 'Message Not Sent!! (service error)❌'
        })
}
contactForm.addEventListener('submit',sendEmail)