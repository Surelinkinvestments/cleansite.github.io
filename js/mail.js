const form=document.querySelector('form');


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log("form has  been submitted")


    let form_data=new FormData(form);

    const body={email:form_data.get('email'),message:form_data.get('subject')}

    console.log(body)

    const requestOptions={
        method: 'POST',
        headers:{
            'Accept': 'application/json'
        },
        body:JSON.stringify(body)
    }

    fetch('https://formspree.io/f/mnqlonbv',requestOptions)
    .then(res=>res.json())
    .then(data=>{console.log(data)
        form.reset();
        alert("Email sent successfully")
    });
})

// action=""