const persons = [
    {
        image : './images/shafi.jpeg',
        name : 'Shafi Danny MUGABO',
        title: 'web developer',
        content: 'Elon Reeve Musk is a businessman and investor. He is the founder, chairman, CEO, and CTO of SpaceX; angel investor, CEO, product architect and former chairman of Tesla, Inc.; owner, chairman and CTO'        
    },
    {
        image : `./images/boy.jpg`,
        name: 'ISHIMWE Gloire',
        title: 'full-stack developer',
        content: 'William Henry Gates III is an American businessman, investor, philanthropist, and writer best known for co-founding the software giant Microsoft, along with his childhood friend Paul Allen.',
    },
    {
        image : `./images/DSC_8271.jpg`,
        name: 'MUGISHA John',
        title: 'Computer Programmer',
        content: 'Mark Elliot Zuckerberg is an American businessman and philanthropist. He co-founded the social media service Facebook, along with his Harvard roommates in 2004, and its parent company Meta Platforms, of which he is executive chairman, chief executive officer and controlling shareholder.',
    },
    {
        image : `./images/girl.jpg`,
        name: 'MUTONI Phionah',
        title: 'UI/UX Designer',
        content: 'Melinda French Gates is an American philanthropist, former multimedia product developer and manager at Microsoft, and the ex-wife of its co-founder and billionaire Bill Gates. French Gates has consistently been ranked as one of the world\'s most powerful women by Forbes magazine.',
    },
    {
        image : `./images/regis.jpeg`,
        name: 'Rigis Saffi IMUDUHE',
        title: 'Mobile App Developer',
        content: 'Melinda French Gates is an American philanthropist, former multimedia product developer and manager at Microsoft, and the ex-wife of its co-founder and billionaire Bill Gates. French Gates has consistently been ranked as one of the world\'s most powerful women by Forbes magazine.',
    },
    {
        image : `./images/Bikorimana.jpeg`,
        name: 'Eric BIKORIMANA',
        title: 'Software Engeneer',
        content: 'Melinda French Gates is an American philanthropist, former multimedia product developer and manager at Microsoft, and the ex-wife of its co-founder and billionaire Bill Gates. French Gates has consistently been ranked as one of the world\'s most powerful women by Forbes magazine.',
    }
]
const image = document.querySelector('#img')
const name = document.querySelector('#name')
const title = document.querySelector('#title')
const content = document.querySelector('#content')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const button = document.querySelector('#button')

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => 
{
    const item = persons[currentItem]
 
    image.src = item.image
    name.textContent = item.name
    title.textContent = item.title
    content.textContent = item.content
})

function displayPerson(person)
{
    const item = persons[person]
    image.src = item.image
    name.textContent = item.name
    title.textContent = item.title
    content.textContent = item.content
}

nextBtn.addEventListener('click', () =>
{
    currentItem++;
    if(currentItem > persons.length -1)
    {
        currentItem = 0
    }
    displayPerson(currentItem)
})

prevBtn.addEventListener('click', () =>
{
    currentItem--;
    if(currentItem < 0)
    {
        currentItem = persons.length -1
    }
    displayPerson(currentItem)
})

button.addEventListener('click', () =>
{
   const item = Math.floor(Math.random() * persons.length)

    displayPerson(item)
})