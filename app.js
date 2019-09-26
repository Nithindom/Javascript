const express = require('express');
const app = express();
const fs = require('fs');
const port = 4500;
const bodyparser = require('body-parser');
const mysql = require('mysql');
const promise = require('promise');

app.use(bodyparser.urlencoded());
var Arai_M = 0;
var Fuel_T = "";
var Seating_C = 0;
var Engine_D = 0;

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
app.get('/',function(req,res){
    mysqlconnection.query('select * from keyspecs', function(err,results){
        if(err) throw err;
        console.log(results);
    for (var i = 0; i <= results.length; i++) {
        doc("ARAI_M").innerHTML = KeySpecs.Arai_M+"kmpl";
        doc("Fuel_T").innerHTML = KeySpecs.Fuel_T;
        doc("Engine_D").innerHTML = KeySpecs.Engine_D;
        doc("Max_Power").innerHTML = Car[i].Key_Sepcs.Max_Power_bhp+"bhp@"+Car[i].Key_Sepcs.Max_Power_rpm+"rpm";
        doc("Max_Torque").innerHTML = Car[i].Key_Sepcs.Max_Torque+" NM";
        doc("Seating_C").innerHTML = KeySpecs.Seating_C;
        doc("T_Type").innerHTML = Car[i].Key_Sepcs.TransmissionType;
        doc("Boot_Space").innerHTML = Car[i].Key_Sepcs.Boot_Space+" I";
        doc("Fuel_T_C").innerHTML = Car[i].Key_Sepcs.Fuel_Tank_Capacity;
        doc("Body_Type").innerHTML = Car[i].Key_Sepcs.Body_Type;
        doc("Service_C").innerHTML = Car[i].Key_Sepcs.Service_Cost;
    
        console.log(i);
    }
    });

    res.sendFile('Car_data_display.html',{root: __dirname});
})
function doc(val){
    return document.getElementById(val);
}
// app.get('/Index.html',function(req,res){
   
    
    
// })

app.post('/Car_spec', function (req, res) {
    console.log(req.body);
    Arai_M = req.body.Arai_m;
    Fuel_T = req.body.Fuel_T;
    Seating_C = req.body.Seating_C;
    Engine_D = req.body.Engine_D;
    res.write('Succesfuly added data');
    console.log(Arai_M,Fuel_T,Seating_C,Engine_D);
    mysqlconnection.query("insert into keyspecs (Carid,Arai_M,Fuel_T,Engine_D,Seating_C) values(null," + Arai_M + ",'" + Fuel_T + "'," + Engine_D + "," + Seating_C + ")", function (err, results) {
        if (err) throw err;
        console.log("Added 1 row");
    })
    module.exports={
        Arai_M,
        Fuel_T,
        Seating_C,
        Engine_D,
        mysqlconnection
    }
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));