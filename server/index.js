require('dotenv').config() // инпортируеться конфигурации из файла .env
const express = require ('express');
const sequelize = require('./db') //импортировали файл .env
const models = require ('./models/models.js')
const cors = require ('cors');
const router = require('./routes/index')
const errorHandler = require('../server/middleware/ErrorHandlingMiddleware')
//const { json } = require('sequelize');
const port = 5000;
const app = express();
app.use(cors());
app.use(express.json())
app.use('/api',router)
//оброботка ошибок бпоследний middleware
app.use(errorHandler)


const start = async ()=>{      //асинхронная функция 
    try{   
        await sequelize.authenticate () //с помощью этой функции будет устанавливать подключение к базе данных
        console.log('Подключение к базе данных установлено') 
        await sequelize.sync()          //              
        app.listen(port,()=>{console.log('server startanuli')})
     } catch (e) {
        console.log('Ошибка подключения к базе данных')
     }
   
}


start()