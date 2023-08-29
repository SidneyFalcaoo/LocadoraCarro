import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import ClienteController from './Controller/ClienteController.js'

let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(ClienteController);

servidor.listen(process.env.PORT, () => console.log(`Api subiu na porta ${process.env.PORT}`));