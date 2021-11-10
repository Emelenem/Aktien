import cron from 'node-cron';
import fetch from 'node-fetch';
import fs from 'fs';



// Cronejob zu Testzwecken minütlich für einmal täglich einfach '0 0 * * *'
cron.schedule('* * * * *', function(){

//API Liste für eine Auswahl an Unternehmen
    let url = "https://data.sec.gov/submissions/CIK0000320193.json";
    let url2 = "https://data.sec.gov/submissions/CIK0001045810.json";
    let url3 = "https://data.sec.gov/submissions/CIK0000789019.json";
    let url4 = "https://data.sec.gov/submissions/CIK0000726728.json";
    let url5 = "https://data.sec.gov/submissions/CIK0001660134.json";
    

    let settings = { method: "Get" };

    //Zieht sich die JSON Datei der Unternehmen und schreibt diese in den JSON Ordner
    fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            let data = JSON.stringify(json);
            fs.writeFileSync('./JSON/apple.json', data); 
        });
        fetch(url2, settings)
        .then(res => res.json())
        .then((json) => {
            let data = JSON.stringify(json);
            fs.writeFileSync('./JSON/nvidia.json', data);
        });
        fetch(url3, settings)
        .then(res => res.json())
        .then((json) => {
            let data = JSON.stringify(json);
            fs.writeFileSync('./JSON/microsoft.json', data);
        });
        fetch(url4, settings)
        .then(res => res.json())
        .then((json) => {
            let data = JSON.stringify(json);
            fs.writeFileSync('./JSON/realityincome.json', data);
        });
        fetch(url5, settings)
        .then(res => res.json())
        .then((json) => {
            let data = JSON.stringify(json);
            fs.writeFileSync('./JSON/okta.json', data);
        });
    console.log('running a task every minute');
});




