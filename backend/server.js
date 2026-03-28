const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.post("/transcribe", (req, res) => {
    res.json({
        srt: "1\n00:00:01,000 --> 00:00:05,000\nHello Moon AI"
    });
});

app.listen(5000, () => console.log("running"));
