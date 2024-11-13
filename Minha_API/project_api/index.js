const express = require ('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'usbw',
    port: 3307,
    database: 'bd_banco'
});

db.connect((err)=>{
    if(err) throw err;
    console.log('Conectado ao banco de dados!')
});

app.get('/usuarios',(req,res)=>{
    db.query('select * from usuarios', (err, results)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.post('/usuarios',(req, res)=>{
    const novoUsuario = req.body;
    db.query('insert into usuarios set ?', novoUsuario, (err, result)=>{
        if(err) throw err;
        res.status(201).json({id:result.insertId, novoUsuario});
    });
});

app.put('/usuarios/:id', (req, res)=>{
    const {id} = req.params;
    const usuarioAtualizado=req.body;
    db.query('update usuarios set ? where id=?', [usuarioAtualizado, id], (err=>{
        if(err) throw err;
        res.json({id, ...usuarioAtualizado});
    }));
});

app.delete('/usuarios/:id', (req, res)=>{
    const {id} = req.params;
    db.query('delete from usuarios where id=', id, (err)=>{
        res.status(204).send();
    });
});

app.listen(port, ()=>{
    console.log(`API rodando em http://localhost:${port}`);
});