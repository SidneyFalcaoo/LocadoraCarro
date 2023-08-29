import { Inserir } from "../Repository/ClienteRepository.js";

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



export default endPoints;