import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "FuckCortana$007",
    database: "test"
});

app.use(express.json());

app.get("/", (req, res)=>{
    res.json("This is backend.");
});

app.get("/books", (req, res)=>{
    const q = "Select * from books";
    db.query(q, (err, data)=>{
        if(err)
            res.json(err);
        res.json(data);
    });
});

app.post("/books", (req, res)=>{
    const q = "Insert into books(`title`, `description`, `cover`) values (?)";
    const values = [req.body.title,
                    req.body.description,
                    req.body.cover]; 

    db.query(q, [values], (err, data)=>{
        if(err)
            res.json(err);
        res.json("Book has been uploaded successfully.");
    });
});

app.listen(8800, ()=>{
    console.log("Connected to backend.");
});

