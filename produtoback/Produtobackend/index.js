const express = require('express');
const path = require('path');
const Produto = require("./models/produto");
const cors= require('cors');
const app = express();
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//recuperar todos os produtos
app.get('/produtos', async function(req, res){
  try {
    console.log(req,body,id)
    var produtos = await Produto.select();
    res.json(produto.rows);
  } catch (error) {
    console.error('Erro ao recuperar produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao recuperar produtos' });
  }
});
//atualiza
app.post('/produtos:id', async function(req, res){
  try {
    console.log(req.body.id)
    var produto = await Produto.update(reqparams.id, req.body);
    res.json(produto.rows[0]);
  } catch (error) {
    console.error('Erro ao atualizar pessoas:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar produtos' });
  }
});

app.post('/produto', async function(req,res){
  try{
    var produto = req.body
    var produto = await Produto.insert(produto);
    res.json(produto.rows)
  }catch(error){
    console.log("error")
  }
})
//remove um produto
app.delete('/produto', async function(req, res){
  try {
    console.log(req.body.id)
    var produto = await produto.delete(req.body.id);
    res.json(produto.rows);
  } catch (error) {
    console.error('Erro ao remover produto:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao deletar produto' });
  }
});


app.listen(3003, function() {
  console.log(`app de Exemplo escutando na porta! ${3003}`)
});
