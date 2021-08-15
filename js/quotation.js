const form=document.querySelector('form');
const messageInput=document.querySelector('.message-input');
const modalContainer=document.querySelector('.modal-container');
const closeButton=document.querySelector('.close-btn');


form.addEventListener('submit',(e)=>{
    e.preventDefault()


    let form_data=new FormData(form);

    const body={email:form_data.get('email')
                ,message:messageInput.value,
                phone:form_data.get('phone'),
                beds:form_data.get('beds'),
                baths:form_data.get('baths'),
                zipcode:form_data.get('zipcode'),
                date:form_data.get('date'),
                time:form_data.get('time')
            }

    console.log(body)

    const requestOptions={
        method: 'POST',
        headers:{
            'Accept': 'application/json'
        },
        body:JSON.stringify(body)
    }

    fetch('https://formspree.io/f/xgerpvlg',requestOptions)
    .then(res=>res.json())
    .then(data=>{console.log(data)
        form.reset();
        modalContainer.style.display='block';
    });
})

// action=""

closeButton.addEventListener('click',()=>{
    modalContainer.style.display='none'
})