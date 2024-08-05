import Express from "express"
import cors from "cors"
import routes from "./routes.js";

const app = Express();

app.use(Express.json());
app.use(cors());
app.use(routes);


const port = 3001;
app.listen(port,function(){
    console.log(`Servidor executando da porta ${port}`);
});



