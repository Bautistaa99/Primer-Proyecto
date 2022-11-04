const contactForm= document.getElementById('contact-form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const dateTime = document.getElementById('dateTime');
const consult = document.getElementById('consult');

const sendEmail = async (body) =>{
    const settings = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    }
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', settings);
    const data = await response.json();
    return data;
};

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const body = {
        service_id: 'service_t4d57ij',
        template_id: 'template_qg1555a',
        user_id: 'NHhi9rWEYQBChZ--B',
        template_params: {
            'to_name':firstName.value,
            'from_name': email.value,
            'message': consult.value
        }
    };

    sendEmail(body);

})
