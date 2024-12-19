import express from 'express';
import CardController from '../Controllers/CardController.js';

const ctrl = new CardController();
const proutes = express.Router();

proutes.post("/insereCard", ctrl.insereCard);

proutes.get("/retornaCard", ctrl.retornaCard);

proutes.post("/deleteCard", ctrl.deleteCard);

proutes.post("/alterCard", ctrl.alterCard);

export default proutes;