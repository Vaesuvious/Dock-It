const db = require('../db/database');

//create db
exports.createDB = (req, res) =>{
    let q = 'Create Database todos';
    db.query(q, (err, result) =>{
        if(err) throw err;
        return res.status(201).json('DB created');
    })
}

//create table
exports.createTable = (req, res) =>{
    //if databse not created use this
    let q = 'Create Table todoNotes( id int Auto_Increment, todoList Varchar(255), Primary Key(id))';

    //if database is created use this
    //let q = 'Alter Table todoNotes, Add( id int Auto_Increment, todoList Varchar(255), Primary Key(id))';

    db.query(q, (err, result) =>{
        if(err) throw err;
        return res.status(201).json('Table Created');
    });
}

//create list
exports.createList = (req, res) =>{

    const q = 'Insert Into todoNotes Set ?';
    const {todoList} = req.body;

    db.query(q, { todoList}, (err, result) =>{
        if(err) return res.json(err);
        return res.status(200).json(result);
    });
}

//show list
exports.showList = (req, res) =>{
    const q = 'Select * From todoNotes';
    const {todoList} = req.body;

    db.query(q, { todoList}, (err, result) =>{
        if(err) return res.json(err);
        return res.status(200).json(result);
    });
}

//show single list
exports.singleList = (req, res) =>{
    const q = `Select * From todoNotes Where id= ${req.params.id}`;

    db.query(q, (err, result) =>{
        if(err) return res.json(err);
        return res.status(200).json(result[0]);
    });
}

//update list
exports.updateList = (req, res) =>{
    const { todoList } = req.body;

    const q = `Update todoNotes Set ? Where id= ${req.params.id}`;

    db.query(q, { todoList }, (err, result) =>{
        if(err) return res.json(err);
        return res.status(200).json(result);
    });
}

//delete single list
exports.deleteSingleTodoList = (req, res) =>{

    const q = `Delete From todoNotes Where id= ${req.params.id}`;

    db.query(q, (err, result) =>{
        if(err) return res.json(err);
        return res.status(200).json({data: 'todo deleted'});
    });
}