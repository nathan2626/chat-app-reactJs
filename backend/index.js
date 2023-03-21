// importation
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    // Get or create user on Chat Engine!
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "Private-Key": "YOUR PRIVATE KEY" } } //Be sure to replace "YOUR PRIVATE KEY" with your Private Key
        );
        
        return res.status(r.status).json(r.data);
    } catch (e) {
      return res.status(e.response.status).json(e.response.data);
    }
});

/* This basic server will run on port 3001, 
accepts calls from any origin, and has one API endpoint for /authenticate.*/
app.listen(3001);