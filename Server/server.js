const express = require('express');
const app = express();
let data = [];
app.use(express.json());
app.get("/api/users", (request, response) => {
    response.json(data);
});
app.listen(3002);