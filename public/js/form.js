const scriptUrl ="/reg";

const form = document.forms['exp-form']

        //   Fetch Api
         
        form.addEventListener('submit',async e => {
              e.preventDefault()
              const sheet = await fetch(scriptURL, { method: 'POST', body: new  FormData(form)})
            //   sheet.then(response => alertf("Thanks for Contacting us..! We Will Contact You Soon..."))
            //     .catch(error => console.error('Error!', error.message))
        })