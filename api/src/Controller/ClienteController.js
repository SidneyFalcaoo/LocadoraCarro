import { Deletar, Alterar, Inserir, ListarPorNome } from "../Repository/ClienteRepository.js";

import { Router } from "express";
const endPoints = Router();

endPoints.post('/cliente', async (req, resp) => {
    try {

        const clienteInserir = req.body;
        const cliente = await Inserir(clienteInserir);

        resp.send(cliente);
    }
    catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }   
});

endPoints.get('/cliente/busca', async (req, resp) => {
    try {
        let nome = req.query.nome;
        let x = await ListarPorNome(nome);

        resp.send(x);
    }
    catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }
});

endPoints.put('/cliente/:id', async (req, resp) => {
    try {

    const id = req.params.id;
    const cliente = req.body;

    const resposta = await Alterar(id, cliente);
    resp.send();
    }
    catch (err) {
    resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }
})

endPoints.delete('/cliente/:id' , async (req, resp) => {
    try {
        let id = req.params.id;
        let x = await Deletar(id);
        resp.send();
    }
    catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro! '});
    }
})

export default endPoints;