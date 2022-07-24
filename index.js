// plant id data

const items = [
    {
        id:0,
        species:"ZZ Plant",
        family:"Araceae family",
        img:"images/zz plant.webp",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repudiandae ratione mollitia incidunt nisi eos sunt, veniam aspernatur explicabo ducimus esse eligendi corrupti fugit quidem eaque culpa totamhic tenetur a!",

    },
    {
        id:1,
        species:"Spider Plant",
        family:"Asparagaceae family",
        img:"images/spider plant.jpg",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repudiandae ratione mollitia incidunt nisi eos sunt, veniam aspernatur explicabo ducimus esse eligendi corrupti fugit quidem eaque culpa totamhic tenetur a!",

    },
    {
        id:2,
        species:"Aloe Vera",
        family:"Asphodelaceae family",
        img:"images/aloe vera.jpg",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repudiandae ratione mollitia incidunt nisi eos sunt, veniam aspernatur explicabo ducimus esse eligendi corrupti fugit quidem eaque culpa totamhic tenetur a!",

    },
    {
        id:3,
        species:"Epipremnum (Devil's Ivy)",
        family:"Araceae family",
        img:"images/devil's ivy.jpg",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repudiandae ratione mollitia incidunt nisi eos sunt, veniam aspernatur explicabo ducimus esse eligendi corrupti fugit quidem eaque culpa totamhic tenetur a!",

    },
    {
        id:4,
        species:"Snake Plant - Mother-in-Law's Tongue",
        family:"Asparagaceae family",
        img:"images/snake plant.jpg",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repudiandae ratione mollitia incidunt nisi eos sunt, veniam aspernatur explicabo ducimus esse eligendi corrupti fugit quidem eaque culpa totamhic tenetur a!",

    },
    {
        id:5,
        species:"Peace Lily",
        family:"Araceae family",
        img:"images/peace lily.jpg",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repudiandae ratione mollitia incidunt nisi eos sunt, veniam aspernatur explicabo ducimus esse eligendi corrupti fugit quidem eaque culpa totamhic tenetur a!",

    },
    {
        id:6,
        species:" Croton",
        family:"Euphorbiaceae family",
        img:"images/croton.jpg",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repudiandae ratione mollitia incidunt nisi eos sunt, veniam aspernatur explicabo ducimus esse eligendi corrupti fugit quidem eaque culpa totamhic tenetur a!",

    },
    {
        id:7,
        species:"Orchid",
        family:"Orchidaceae family",
        img:"images/orchid.jpg",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repudiandae ratione mollitia incidunt nisi eos sunt, veniam aspernatur explicabo ducimus esse eligendi corrupti fugit quidem eaque culpa totamhic tenetur a!",

    }
]

// select items
const plant = document.getElementById("plant")
const family = document.getElementById("family")
const info = document.getElementById("info")
const img = document.getElementById("plant-img")

const nextBtn=document.querySelector(".nextBtn")
const prevBtn=document.querySelector(".prevBtn")
const randBtn=document.querySelector(".randbtn")

// set starting image
let currentItem = 0

// load initial items
window.addEventListener('DOMContentLoaded', function(){
    showPlant()
})


// show plant based on item
function showPlant(){
    const item = items[currentItem]
    img.src = item.img
    plant.textContent=item.species
    fam.textContent=item.family
    info.textContent=item.text
}

// show next plant
nextBtn.addEventListener("click", function(){
    currentItem++
    if(currentItem > items.length -1){
    // if we are at our last item we will start over to 1st item
    currentItem=0
    }
    showPlant()
})

// show prev plant
prevBtn.addEventListener("click", function(){
    currentItem--
    if(currentItem < 0){ 
    currentItem = items.length -1
    }
    showPlant()
})

randBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() *items.length)
    showPlant()
})

