import { inserir, consultar, alterar, deletar } from "../Repository/VeiculoRepository.js";

import { Router } from "express";
const endPoints = Router();

endPoints.post('/veiculo', async (req, resp) => {
    try {
        const carroInserir = req.body;
        const carro = await inserir (carroInserir);

        resp.send(carro);
    } catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' });
    } 
});

endPoints.get('/veiculo/busca', async (req, resp) => {
    try {
        let modelo = req.query.modelo;
        let x = await consultar (modelo);

        resp.send(x);
    } catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }
});

endPoints.put('/veiculo/:id', async (req, resp) => {
    try {

        let id = req.params.id;
        let carro = req.body;

        let resposta = await alterar(id, carro);
        resp.send();
    } catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }
});

endPoints.delete('/veiculo/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let x = await deletar(id);

        resp.send();
    }  catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }
})

export default endPoints;