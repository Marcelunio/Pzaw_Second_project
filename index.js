import express from "express"

const port=8000;
const app=express()
app.set("view engine","ejs")

app.use(express.static("public"))
app.use(express.urlencoded)

app.get("/posts/:blog_post",(req,res)=>
{
    
})


app.listen(port,()=>
{
    console.log(`Serwer na http://localhost:${port}`)
})