$(document).ready(function() {


    $('.cpf-completo').mask('000.000.000-00', {
        placeholder: '123.456.789-01'
    })

    $('.telefone-completo').mask('(00) 00000-0000', {
        placeholder: '(12) 34567-8901'
    })
    
    $('.cep-completo').mask('00000-000', {
        placeholder: '00000-000'
    })

    $('.formulario').validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            enderecoCompleto: {
                required:true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nomeCompleto: 'Por favor, insira seu nome.',
            email: 'Por favor, insira seu email.',
            telefone: 'Por favor, insira seu telefone.',
            cpf: 'Por favor, insira seu CPF.',
            enderecoCompleto: 'Por favor, insira seu endereço.',
            cep: 'Por favor, insira seu CEP.',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
                console.log(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })
})