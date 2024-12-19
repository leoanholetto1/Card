import { request } from "express";
import CardDAL from "../DAL/CardDAL.js";

const dal = new CardDAL();

export default class CardController {

    //http://localhost:8081/insereCard
    insereCard(request, response){
        let card = request.body;
        dal.insereCard(card);
        response.status(200).send({ msg:"Card inserido!", sucesso: true });
    }

    //http://localhost:8081/retornaCard
    async retornaCard(request,response){
        let gen = await dal.retornaCard();
        console.log(gen);
        response.status(200).send(gen);
    }

    //http://localhost:8081/deleteCard
    async deleteCard(request, response){
        let card = request.body;
        let msg = dal.deleteCard(card.id);
        response.status(200).send({ msg:msg, sucesso: true });
    }

    //http://localhost:8081/alterCard
    async alterCard(request, response){
        let card = request.body;
        dal.alterCard(card);
        response.status(200).send({ msg:"Card atualizado!", sucesso: true });
    }
}