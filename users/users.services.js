const {getAllUsers, createUsers, getUsersById} = require('./users.controllers');

const getUsers = (req,res) => {
    const data = getAllUsers();
    res.status(200).json(data);
};

const getOneUser = (req,res) => {
    const id = req.params.id;
    const data = getUsersById(id);

    if(data){
        res.status(200).json(data);
    } else {
        res.status(404).json( {id:id, Message: "Invalid ID"});
    }
};
 

const createNewUser = (req,res) => {
    const {first_name,last_name,email,password,birthday} = req.body

    if(first_name,last_name,email,password,birthday){
        const data = createUsers(first_name,last_name,email,password,birthday);
        res.status(201).json(data);
    } else {
        res.status(400).json({ Message: "Mising Data"});
    }
};

module.exports = {
    getUsers, getOneUser, createNewUser
}





