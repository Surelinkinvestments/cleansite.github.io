const form = document.querySelector('form');
const modalContainer = document.querySelector('.modal-container');
const closeButton = document.querySelector('.close-btn');


form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("form has  been submitted")


    let form_data = new FormData(form);

    const body = {
        email: form_data.get('email'),
        full_name:form_data.get('fullname'),
        message: form_data.get('message'),
        subject: form_data.get('subject')
    }

    console.log(body)

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: JSON.stringify(body)
    }

    fetch('https://formspree.io/f/mnqlonbv', requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            form.reset();
            modalContainer.style.display = 'block';
        });
})


// action=""

closeButton.addEventListener('click', () => {
    modalContainer.style.display = 'none'
})