var boadyvar = document.body

var climate = document.getElementById("climate")
var consumption = document.getElementById("consumption")
var resources = document.getElementById("resources")
var people = document.getElementById("people")

var savetext = document.getElementById("save")
var frame = document.getElementById("frame")

climate.onclick=()=>{

    boadyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"

    boadyvar.style.backgroundSize="100% 100%"


    frame.src = "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    savetext.innerHTML = " Do your bit! Save trees, use renewable energy sources and prefer to travel green"

    climate.style.background = "#0000FF"

    consumption.style.background = "transparent"
    resources.style.background = "transparent"
    people.style.background = "transparent"
    
}

consumption.onclick=()=>{

    boadyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"

    boadyvar.style.backgroundSize="100% 100%"

    frame.src = "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    savetext.innerHTML = "Do your bit! Shop only what you need,eat only what you need and always save the leftovers."

    consumption.style.background = "#27AE60"
    climate.style.background = "transparent"
    resources.style.background = "transparent"
    people.style.background = "transparent"



}

resources.onclick=()=>{
    boadyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"

    boadyvar.style.backgroundSize="100% 100%"

    frame.src = "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    savetext.innerHTML = "Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"

    resources.style.background = "#FFA500"
    consumption.style.background = "transparent"
    climate.style.background = "transparent"
    people.style.background = "transparent"
}

people.onclick=()=>{
    boadyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"

    boadyvar.style.backgroundSize="100% 100%"

    frame.src = "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    savetext.innerHTML = " Do your bit! Never waste  food.Rather offer it to people or animals who are in need."

    people.style.background = "#FF0000"
    consumption.style.background = "transparent"
    resources.style.background = "transparent"
    climate.style.background = "transparent"
}





