const form=document.querySelector('form');
const messageInput=document.querySelector('.message-input');


form.addEventListener('submit',(e)=>{
    e.preventDefault()


    let form_data=new FormData(form);

    const body={email:form_data.get('email')
                ,message:messageInput.value,
                phone:form_data.get('phone'),
                beds:form_data.get('beds'),
                baths:form_data.get('baths'),

                
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
        alert("Email sent successfully")
    });
})

// action=""