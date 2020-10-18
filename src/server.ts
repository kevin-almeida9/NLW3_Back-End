import express from 'express';
import path from 'path'
import cors from 'cors'

import 'express-async-errors'

import './database/connection'

import routes from './routes';
import upload from './config/upload';
import errorHandler from './errors/handler'

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333)



//Rota = conjunto
//Recurso = usuário

//Métodos HTTP = GET, POST, PUT, DELETE
    //GET = Buscar informação (Lista, item)
    //POST = Criando um nova informação
    //PUT = Editando uma informação
    //DELETE = Deletando uma informação

//Parâmetros 
    //Query Params - enviados na própria rote
        //enviados com "?"
        // concatenados com "&"
        // http://localhost:3333/users?search=kevin
    //Route Param - enviados na própria rote sem um nome de variável
        // http://localhost:3333/users/1  (identificar um recurso)
    //Body - corpo da requisição, envio de dados, from forms


    //Driver nativo, Query builder, ORM

/**
 * [Driver Nativo]
 * ex.: sqlite3
 * Permite execução de querys ao DB diretamanete pelo Node
 * sem abstrações.
 * escrever query SQL
 * ex.:
 * sqlite3.query('SELECT * FROM users)
 */

/**
 * [Query Builder]
 * ex.: knex.js
 * Abstração de querys, escrever querys em java script
 * * ex.:
 * knex('users').select('*).where('name','Kevin')
 */

/**
 * [ORM - Object Relational Mapping]
 * Classe em JS que simboliza uma tabela no DB
 * Retorno de objetos da classe de abstração
 * relacionamento do DB users com a JS classe User
 *
 */