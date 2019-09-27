const express = require('express');
const app = express();
const fs = require('fs');
const port = 4500;
const bodyparser = require('body-parser');
const mysql = require('mysql');
const promise = require('promise');
const ejs = require('ejs');

app.use(bodyparser.urlencoded());
var Arai_M = 0;
var Fuel_T = "";
var Seating_C = 0;
var Engine_D = 0;
var Results = [];
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.get('/Car_spec_data', function (req, res) {
    res.sendFile('/Car_Data.html', { root: __dirname });
})
var mysqlconnection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Dominic_007",
    port: '3306',
    database: 'Cars',
    protocol: 'tcp'
})
mysqlconnection.connect(function (err) {
    if (err) throw err;
    console.log('Connected');
})
app.get('/', function (req, res) {
    mysqlconnection.query('select * from keyspecs', function (err, results) {
        if (err) throw err;
        console.log(results);
        Results = results;
        console.log(Results);
        console.log(Results[0].Carid);
    })

    // res.sendFile('Car_data_display.html',{root: __dirname});
    setTimeout(() => {
        res.render('Car_data_display', { Data: Results });
    }, 0);
    // console.log(Results);
})

app.post('/Car_spec', function (req, res) {
    console.log(req.body);
    Arai_M = req.body.Arai_m;
    Fuel_T = req.body.Fuel_T;
    Seating_C = req.body.Seating_C;
    Engine_D = req.body.Engine_D;
    res.write('Succesfuly added data');
    console.log(Arai_M, Fuel_T, Seating_C, Engine_D);
    mysqlconnection.query("insert into keyspecs (Carid,Arai_M,Fuel_T,Engine_D,Seating_C) values(null," + Arai_M + ",'" + Fuel_T + "'," + Engine_D + "," + Seating_C + ")", function (err, results) {
        if (err) throw err;
        console.log("Added 1 row");
    })
    module.exports = {
        Arai_M,
        Fuel_T,
        Seating_C,
        Engine_D,
        mysqlconnection
    }
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));