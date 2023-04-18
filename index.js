const fastify = require('fastify')();
const PORT = 3000

let saldo = 0;

fastify.get('/saldo', (req, res) => {
    res.status(200).send(`seu saldo é ${saldo}`);

});

fastify.post('/depositar', (req, res) =>{
    let valor =  Number(req.body.valor);
    saldo = saldo +valor;
    res.status(201).send(`valor depositado com sucesso`);
});

fastify.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`servidor rodando na porta${PORT}`) 
        
    

});
