const express = require('express')
const app = express()


let inventory = [
    {
        username: "sneakerhead_99",
        shoeName: "Air Max 97 OG",
        brand: "Nike",
        releaseDate: 2023,
        description: "The Air Max 97 OG returns in its original form, featuring the signature way lines and visible air cushioning for a classic look and feel.",
        price: 170,
        image: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/inuq4g6ess3u7oepxqg2/womens-nike-air-max-97-og-metallic-silver.jpg" 
    },
    {
        username: "kicksfanatic22",
        shoeName: "Yeezy Boost 350 V2",
        brand: "Addidas",
        releaseDate: 2024,
        description: "The iconic Yeezy Boost 350 V2, now in a new colorway, offers a sleek, minimalist design and unmatchec comfort with its Boost cushioning technology.",
        price: 220,
        image: "https://media.jdsports.com/i/jdsports/ID4811_021_P1?$default$&w=671&&h=671&bg=rgb(237,237,237)"
    },
    {
        username: "sneaker_lover23",
        shoeName: "Chuck Taylor 70s",
        brand: "Converse",
        releaseDate: 2022,
        description: "A premium version of the classic Chuck Taylor, with enhanced materials and construction for a retro-inspired, high quality sneaker.",
        price: 190,
        image: "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw18ec20b2/images/a_08/162050C_A_08X1.jpg?sw=406"
    },
    {
        username: "jordans4life",
        shoeName: "Air Jordan 1 Retro High OG",
        brand: "Nike",
        releaseDate: 2024,
        description: "The Air Jordan 1 Retro High OG is back in a fresh colorway, staying true to its legendary roots with premium leather and iconic design details.",
        price: 180,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRnawyGYS8RlAScPSTtWbuH820J-R3n0wUQIzOTujM5Xm9qf5z0-nlY-ytpO_ltiXw6ekf2AdpAMuihFiahDv4tgESWiNYvN0mJSg7Lalxknw8&usqp=CAc"
    },
    {
        username: "cool_kicks",
        shoeName: " Asics GEL-KAYANO 14",
        brand: "Asics",
        releaseDate: 1993,
        description: "The Gel-Kayano is the company's best-selling stability shoe. If you require a show to support your overpronting stride, this may be the one for you.",
        price: 180,
        image: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiplOL66KqLAxVZ_-MHHZAuBdQYABAHGgJ5bQ&co=1&gclid=Cj0KCQiAkoe9BhDYARIsAH85cDMPYiInJPZZjjoWoO5P7YYGUtn3vr4wOsI_OAVcVZpXJdsRwz7rMOoaAqpQEALw_wcB&ohost=www.google.com&cid=CAESVuD2_rlq4L0GzIR7UQwBFA_3Ja-Kq5__ixFbDPXs4FFH-UjOht3v5SrjaktArWRFVwOwR--SiOUppxB-i8C1vLWSo-hZRyKmb9HibWls88GmHFZZYCmB&sig=AOD64_16enhVabfmzBBuITKMWnQFlgYbkg&ctype=5&q=&ved=2ahUKEwicndr66KqLAxXGElkFHdAgGeEQ9aACKAB6BAgIEC4&adurl="
    }
]
//design end points
app.get ("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})
 app.set ("view engine", "ejs")

app.get ("/all", (req, res)=>{
    res.render("overview.ejs", {inventory})
})
 
app.get ("/shoe/:id", (req,res)=>{
const i = req.params.id
res.render("shoe.ejs", inventory[i])
})









app.listen(3000, () => {
    console.log("Server running")
  })
































