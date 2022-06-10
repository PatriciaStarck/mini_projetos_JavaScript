let b7validator = {
    handleSubmit:(event)=> {
        event.preventDefault()
        let send = true 

        let inputs = form.querySelectorAll('input')

        for(let i = 0;i<inputs.length;i++) {
            let input = inputs[i]
            let check = b7validator.checkInput(input)
            if(check !== true) {
                send = false
                //exibir o erro
            }
        }

        send = false

        if(send) {
            form.submit()
        }
    }
    checkInput:(input) => {
        let rules = input.getAttribute('data-rules')
        for(let k in rules) {
          
        }
        if(rules !== null) {

        }
    }
}

let form = document.querySelector('.b7validator')
form.addEventListener('submit', b7validator.handleSubmit)