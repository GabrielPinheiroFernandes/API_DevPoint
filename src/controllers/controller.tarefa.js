import serviceTarefa from "../services/service.tarefa.js";

function Listar(req,res){
    serviceTarefa.Listar(req.params,(err,result)=>{
        if (err){
            res.status(500).send(err)
        } else {
            res.status(200).json(result)
        }
    });
    //res.status(200).send("listando as tarefas") 
}
function Inserir(req,res){
    serviceTarefa.Inserir(req.body,(err,result)=>{
        if (err){
            res.status(500).send(err)
        } else {
            console.log(result)
            res.status(200).json(result[0])
        }
    });
    //res.status(201).send("inserir uma tarefa 123...")  
}
function Editar(req,res){
    serviceTarefa.Editar(req.params.id_tarefa,req.body,(err,result)=>{
        if (err){
            res.status(500).send(err)
        } else {
            res.status(200).json(result[0])
        }
    });
    //res.status(200).send("Editar uma tarefa 123...") 
}
function Excluir(req,res){
    serviceTarefa.Excluir(req.params.id_tarefa,(err,result)=>{
        if (err){
            res.status(500).send(err)
        } else {
            res.status(200).json(result[0])
        }
    });
    //res.status(200).send("excluir uma tarefa") 
}


export default {Listar,Inserir,Editar,Excluir};