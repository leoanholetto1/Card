import { MongoClient,ObjectId  } from 'mongodb'


export default class CardDAL{
    insereCard(filme){
        const url = "mongodb://localhost:27017/";
        MongoClient.connect(url)
        .then(db => {
            const dbo = db.db("mycarddb");
            dbo.collection("Card").insertOne(filme)
                .then(res => { console.log("1 document inserted!"); db.close(); })
        });
    }

    async alterCard(card){
        const client = await MongoClient.connect(
            'mongodb://localhost:27017/'
        );

        const coll = client.db('mycarddb').collection('Card');

        const result = await coll.updateOne({
                _id: new ObjectId(card.id) 
            },
            { $set: { 
            "titulo": card.titulo,
            "texto": card.texto,
            "url":card.url,
            "cor":card.cor
            } })
    }

    async retornaCard() {
        const client = await MongoClient.connect(
        'mongodb://localhost:27017/'
        );
        const coll = client.db('mycarddb').collection('Card');
        const cursor = coll.find();
        const result = await cursor.toArray();
        await client.close();
        return result;
    }

    async deleteCard(card){
        const client = await MongoClient.connect(
            'mongodb://localhost:27017/'
        );
        const coll = client.db('mycarddb').collection('Card');
        const result = await coll.deleteOne({ _id: new ObjectId(card) });
        let msg;
        await client.close();
        return msg;
    }
}
