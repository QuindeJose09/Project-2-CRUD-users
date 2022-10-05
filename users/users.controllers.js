const uuid = require('uuid');

const dataBase = [
    {
        id: 1,
        first_name: 'Jose',
        last_name: 'Quinde',
        email: 'quindebrito@gmail.com',
        password: 'root1',
        birthday: '2022/09/22'
    },
    {
        id: 2,
        first_name: 'Kevin',
        last_name: 'Alex',
        email: 'alex@gmail.com',
        password: 'root12',
        birthday: '2022/08/23'
    }
]
// {
//     "first_name": "Kevina",
//     "last_name": "Alexa",
//     "email": "alea@gmail.com",
//     "password": "root12",
//     "birthday": "2022/08/23"
// }
    //Obtener todos los usuarios.
    const getAllUsers = () => {
        return dataBase;
    };

    //Crear nuevo users
    const createUsers = (first_name,last_name,email,password,birthday) => {
        const newUsers = {
                id: uuid.v4(),
                first_name,
                last_name,
                email,
                password,
                birthday
            };
            dataBase.push(newUsers)
            return newUsers;
        }

    //  Obtener todo por id
    const getUsersById = (id_params) => {
        const data = dataBase.find(user => user.id === id_params);
        return data;
    };
    console.log( getUsersById(1))

    module.exports = {
        getAllUsers,
        createUsers,
        getUsersById
    }