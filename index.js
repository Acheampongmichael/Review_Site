const reviews = [
    {
        id: 1,
        name: "Sophia",
        job: "Web developer",
        img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
        text: "Sophia is a 16-year-old high school student with a passion for music. She plays the guitar and sings in a band with her friends, performing covers of popular songs at local venues. Sophia is also an avid reader and enjoys spending her free time curled up with a good book."
    },

    {
        id: 2,
        name: "Lila",
        job: "Host",
        img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
        text: "Lila is a curious and adventurous girl who loves exploring new places and trying new things. She has a passion for nature and spends most of her free time hiking in the nearby mountains or kayaking in the lake. She is also an avid reader and enjoys learning about different cultures and traditions."

    },

    {
        id: 3,
        name: "Alex",
        job: "Architect",
        img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
        text: "Alex is a creative and curious boy who loves experimenting with new ideas and building things from scratch. He is particularly interested in technology and enjoys tinkering with computers and programming languages. "
    }
]



const image = document.querySelector(".image")
const name = document.querySelector(".name")
const job = document.querySelector(".job")
const desc = document.querySelector(".desc")

// Buttons 
const btn = document.querySelector(".btn")
const prevBtn = document.querySelector(".prev")
const nextBtn =document.querySelector(".next")

let count = 0

window.addEventListener("DOMContentLoaded", function(){
    showPerson(count)
})

function showPerson(person){
    let page = reviews[person]
    image.src = page.img
    name.textContent = page.name
    job.textContent = page.job
    desc.textContent = page.text
}

nextBtn.addEventListener("click", function(){
    count++
    if (count > reviews.length-1)
    {
        count = 0
    }
    showPerson(count)
})

prevBtn.addEventListener("click", function(){
    count--
    if (count < 0)
    {
        count = reviews.length - 1
    }
    showPerson(count)
})

function genRandom(){
    random = Math.floor(Math.random()*reviews.length)
    return random
}

btn.addEventListener("click", function(){
    showPerson(genRandom())
})