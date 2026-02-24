const express = require('express');
const app = express();
let data = [
    {
        name:"NaN",
        age: -1
    }
];
app.use(express.json());
app.get("/api/users", (request, response) => {
    response.json(data);
});

app.post("/api/users", (request, response) => {
    if(request.body.name === "Samuel Kodytek") {
        response.status(403).json("https://samjenegr.eu/");
    } else {
        console.log(request.body);
        data.push(request.body);
        response.status(201).json("Uživatel vytvořen");
    }
})

app.listen(3002);