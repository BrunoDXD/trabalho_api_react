const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
// Configuração do banco de dados
const db = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: 'usbw',
 port: 3307,
 database: 'bd_banco'
});
db.connect((err) => {
 if (err) throw err;
 console.log('Conectado ao banco de dados MySQL!');
});

// Rotas da API usuarios
app.get('/usuarios', (req, res) => {
 db.query('SELECT * FROM usuarios', (err, results) => {
 if (err) throw err;
 res.json(results);
 });
});
app.post('/usuarios', (req, res) => {
 const novoUsuario = req.body;
 db.query('INSERT INTO usuarios SET ?', novoUsuario, (err, result) => {
 if (err) throw err;
 res.status(201).json({ id: result.insertId, ...novoUsuario });
 });
});
app.put('/usuarios/:id_produto', (req, res) => {
 const { id } = req.params;
 const usuarioAtualizado = req.body;
 db.query('UPDATE usuarios SET ? WHERE id = ?', [usuarioAtualizado, id], (err) => {
 if (err) throw err;
 res.json({ id, ...usuarioAtualizado });
 });
});
app.delete('/usuarios/:id', (req, res) => {
 const { id } = req.params;
 db.query('DELETE FROM usuarios WHERE id = ?', id, (err) => {
 if (err) throw err;
 res.status(204).send();
 });
});

// Rotas da API produtos
app.get('/produtos', (req, res) => {
    db.query('SELECT * FROM produtos', (err, results) => {
    if (err) throw err;
    res.json(results);
    });
   });
   app.post('/produtos', (req, res) => {
    const novoProduto = req.body;
    db.query('INSERT INTO produtos SET ?', novoProduto, (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId, ...novoProduto });
    });
   });
   app.put('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const produtoAtualizado = req.body;
    db.query('UPDATE produtos SET ? WHERE id = ?', [produtoAtualizado, id], (err) => {
    if (err) throw err;
    res.json({ id, ...produtoAtualizado });
    });
   });
   app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM produtos WHERE id = ?', id, (err) => {
    if (err) throw err;
    res.status(204).send();
    });
   });

app.listen(port, () => {
 console.log(`API rodando em http://localhost:${port}`);
});