import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import { users, userAccount } from './users'
import { checkIfAdult, checkCpf } from './helpers'

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/account/create", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const newUser: userAccount = {
            name: req.body.name,
            cpf: req.body.cpf,
            birthDate: req.body.birthDate,
            balance: 0,
            statement: []
        }

        if (!newUser.name || !newUser.cpf || !newUser.birthDate) {
            errorCode = 422;
            throw new Error("Algum campo está inválido. Preencha corretamente.");
        }

        const canOpenAccount: boolean = checkIfAdult(req.body.birthDate) 

        if(!canOpenAccount) {
            errorCode = 401
            throw new Error("Você precisa ter 18 ou mais de 18 para criar uma conta")
        }

        const checkingCpf : userAccount | undefined = checkCpf(newUser.cpf)

        if(checkingCpf){
            errorCode = 409
            throw new Error("Já existe uma conta com esse CPF")
        }

        users.push(newUser);

        res.status(200).send({ message: "Conta criada com sucesso! Seu atual saldo é 0, para depositos, use outro endpoint" });

    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
})

app.get("/account/all", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const result: userAccount[] = users

        res.status(200).send(result);

    } catch (error) {
        res.status(errorCode).send(error.message);
    }

});
  
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});