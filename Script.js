var Name = "Nithin";

const Car = [{
    Brand: "Maruthi",
    Model: "800",
    Key_Sepcs: {
        ARAI_Mileage: 18.15,
        Fuel_Type: "Petrol",
        Engine_Displacement_cc: "998",
        Max_Power_bhp: "118",
        Max_Power_rpm: "6000",
        Max_Torque: "172",
        Seating_Capacity: "5",
        TransmissionType: "Automatic",
        Boot_Space: "350",
        Fuel_Tank_Capacity: "45",
        Body_Type: "SUV",
        Service_Cost: 2556
    }

}]

function doc(val){
    return document.getElementById(val);
}

for (var i = 0; i <= Car.length; i++) {
    doc("ARAI_M").innerHTML = Car[i].Key_Sepcs.ARAI_Mileage+"kmpl";
    doc("Fuel_T").innerHTML = Car[i].Key_Sepcs.Fuel_Type;
    doc("Engine_D").innerHTML = Car[i].Key_Sepcs.Engine_Displacement_cc;
    doc("Max_Power").innerHTML = Car[i].Key_Sepcs.Max_Power_bhp+"bhp@"+Car[i].Key_Sepcs.Max_Power_rpm+"rpm";
    doc("Max_Torque").innerHTML = Car[i].Key_Sepcs.Max_Torque+" NM";
    doc("Seating_C").innerHTML = Car[i].Key_Sepcs.Seating_Capacity;
    doc("T_Type").innerHTML = Car[i].Key_Sepcs.TransmissionType;
    doc("Boot_Space").innerHTML = Car[i].Key_Sepcs.Boot_Space+" I";
    doc("Fuel_T_C").innerHTML = Car[i].Key_Sepcs.Fuel_Tank_Capacity;
    doc("Body_Type").innerHTML = Car[i].Key_Sepcs.Body_Type;
    doc("Service_C").innerHTML = Car[i].Key_Sepcs.Service_Cost;

    console.log(i);
    // var HTML = document.getElementsByTagName("html")[0];
    // var div1 = document.createElement("div");
    // var h1 = document.createElement("h1");
    // var key_specs_div = document.createElement("div");
    // key_specs_div.id = Car[i].Brand + "_" + Car[i].Model + "_Key_Specs";
    // div1.id = "div" + i;
    // HTML.appendChild(div1);
    // div1.appendChild(h1);
    // div1.appendChild(key_specs_div);
    // h1.id = "heading" + i;
    // h1.innerHTML = Car[i].Brand + " " + Car[i].Model;
    // var Key_length = Object.keys(Car[i].Key_Sepcs).length;
    // console.log(Key_length);
    // var ul = document.createElement("ul");
    // ul.id = Car[i].Brand + "_" + Car[i].Model + "_Key_Specs_ul";
    // key_specs_div.appendChild(ul);
    // for (var j = 0; j < Key_length; j++) {
    //     var div2 = document.createElement("div");
    //     div2.id = Car[i].Brand + "_" + Car[i].Model + "_Key_Specs_div" + j;
    //     key_specs_div.appendChild(div2);
    //     // div2.innerHTML = 
    // }
    
}

  // function Fun(){
//     var P1data = document.getElementById("P1").value;
//     console.log(typeof P1data);
//     console.log(typeof(P1data) === 'number');
//     if(typeof P1data === 'number'){
//         console.log("GOT YOU")
//     }
// }
