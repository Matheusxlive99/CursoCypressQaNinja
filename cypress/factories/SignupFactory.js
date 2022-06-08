var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function (){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '31973532559',
            address: {
                postalcode: '31920725',
                street: 'Rua dos Partidos',
                number: '260',
                details: 'Fundos',
                district: 'Nossa Senhora da Saúde',
                city_state: 'Belo Horizonte/MG'
            },
            deliver_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data 
    }
}