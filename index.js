const express = require('express');
const checkListRouter = require('./src/routes/checklist');

const app = express();
app.use(express.json());

app.use('/checklists', checkListRouter);
//app.use(checkListRouter);

/*
//olha na requisição se tem o json e coloca no req.body

const log = (req, res, next) =>{
    console.log(req.body);
    console.log(`Data: ${Date.now()}`);
    next();
    //tem como usar middlewares de bibliotecas ou criar os proprios middlewares
}

app.use(log);

app.get('/', (req, res) => {
    res.send('<h1>Minha Lista de Tarefas :)</h1>');
})

app.get('/json', (req, res) => {
    res.json({title: "Tarefa X", done: true});
    //respondendo em json
})
*/

app.listen(3000, () => {
    console.log('Servidor Ativo!');
})

//instalando nodemon - para que não precise ficar restartando o servidor manualmente, ele fara automaticamente.
//npm install nodemon --save
