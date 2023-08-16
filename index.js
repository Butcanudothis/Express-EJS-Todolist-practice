import express from "express";
import bodyParser from "body-parser"
import ejs from "ejs";

const port = 3000;
var dictOfTasks = {
    "get buff": true,
    "get a girlfriend": true,
    "do freaky stuff": true,
    "get her pregnant": false,
    "get married": false,
    "have kids": false,
    "go get milk": true,
};

console.log(dictOfTasks);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        taskDict: dictOfTasks,
    });
})
app.post("/submit", (req, res) => {
    console.log(req.body.fName);
    res.render("index.ejs"
        , {
            taskDict: dictOfTasks,
    }
    );
})
app.post("/add", (req, res) => {
    dictOfTasks[req.body.task] = true;
    res.redirect("/");
})
app.listen(port, () => {
    console.log(`started listening on ${port}`);
})