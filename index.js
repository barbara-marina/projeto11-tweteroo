import express from "express";
import chalk from "chalk";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];

const tweets = [];

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    if (!username || !avatar) return res.status(400).send("Todos os campos são obrigatórios!");
    users.unshift({username, avatar});
    res.send("OK 👍");
});

app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body;
    if (!username || !tweet) return res.status(400).send("Todos os campos são obrigatórios!");
    const user = users.find(user => user.username===username);
    tweets.unshift({username, tweet, avatar: user.avatar});
    res.send("OK 👍");
});

app.get("/tweets", (_req, res) => {
    res.send(tweets.slice(0, 10));
});

app.listen(5000, () => console.log(chalk.bold.cyanBright("Server is running at port 5000 👍")));