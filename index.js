import express from "express";
import chalk from "chalk";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];

// const tweets = [];

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    if (!username || !avatar) return res.sendStatus(422);
    users.unshift({username, avatar});
    res.send("OK 👍");
});

app.listen(5000, () => console.log(chalk.bold.cyanBright("👍")));