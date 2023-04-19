const fastify = require('fastify')();
const PORT = 3000

let saldo = 0;

fastify.get('/saldo', (req, res) => {
    res.status(200).send(`seu saldo é ${saldo}`);

});
fastify.put('/saque', (req, res) =>{
    let valor = Number(req.body.valor);
    saldo = saldo - valor
    res.status(202).send(`Saque ${saldo} realizado com sucesso`)

})

fastify.post('/depositar', (req, res) =>{
    let valor =  Number(req.body.valor);
    saldo = saldo + valor;
    res.status(201).send(`valor depositado ${saldo} com sucesso`);
});

fastify.patch('/transferencia', (req, res) => {
let valor = Number(req.body.valor);
let destino = req.body.destino;
saldo = saldo - valor
res.status(202).send(`transferencia do ${valor} realizado para o ${destino} saldo atual ${saldo}`)
})

fastify.delete('/encerrar', (req,res)=>{
    saldo =0
    res.status(205).send('conta encerrada')
})

fastify.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`servidor rodando na porta${PORT}`) 
        
    

});
