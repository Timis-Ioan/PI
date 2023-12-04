import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"1234",
  database:"Trotinete"
})

app.use(express.json())

// print "/" ne referim al home page ul al backend server. req(request), res(response)
app.get("/", (req, res)=>{
  res.json("hello this is the backend")
})

//Pt a executa asta intram pe pagina "/trotinete" (localhost:8800/trotinete)
app.get("/trotinete", (req,res)=>{
  const qry = "SELECT * FROM trotinete"
  //aici ne folosim de conexiunea la baza de date pt a executa query ul scris mai sus
  db.query(qry,(err,data)=>{
    //Daca exista o eroare va afisata
    if(err) return res.json("Eror: " + err)

    // daca nu avem eroare returnam datele
    return res.json(data)
  })
})

app.post("/trotinete", (req,res)=>{
  const qry = "INSERT INTO trotinete ('model', 'culoare', 'pret', 'nume') VALUES (?)"
  //TODO

  // const values = [
  //   date
  // ]

  // db.query(qry,values,(err,data)=>{
  //   //Daca exista o eroare va afisata
  //   if(err) return res.json("Eror: " + err)

  //   // daca nu avem eroare returnam datele
  //   return res.json(data)
  // })
})

app.listen(8800, ()=>{
  console.log("App is listening to prot 8800!")
})