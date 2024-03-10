const main = document.querySelector('.container')
const itemList = [
    {
        name : 'app-store',
        img : 'images/app-store.png'
    },
    {
        name : 'guthub',
        img : 'images/github.png'
    },
    {
        name : 'gmail',
        img : 'images/gmail.png'
    },
    {
        name : 'google-drive',
        img : 'images/google-drive.png'
    },
    {
        name : 'instagram',
        img : 'images/instagram.png'
    },
    {
        name : 'linkedin',
        img : 'images/linkedin.png'
    },
    {
        name : 'telegram',
        img : 'images/telegram.png'
    },
    {
        name : 'tiktok',
        img : 'images/tiktok.png'
    },
    {
        name : 'twitter',
        img : 'images/twitter.png'
    },
    {
        name : 'whatsapp',
        img : 'images/whatsapp.png'
    },
    {
        name : 'x',
        img : 'images/x.png'
    },
    {
        name : 'youtube',
        img : 'images/youtube.png'
    }
]

const computer = document.getElementById('choice')

itemList.sort(() => 0.5 - Math.random())
const imageChosen = []

const choice = Math.floor(Math.random()*itemList.length)
computer.innerHTML = itemList[choice].name

const suffle = document.getElementById('suffle')
const box = document.querySelector('.container')

function createBox () {
    for(i=0; i<itemList.length; i++){
        const image = document.createElement('img')
        image.setAttribute('src', '../images/app.png')
        image.setAttribute('width', '100px')
        image.setAttribute('height', '100px')
        image.setAttribute('imgId', i)
        image.addEventListener('click', flipImage)
        box.appendChild(image)
    }
}

createBox()
let n = 0
let found = false
const result = document.getElementById('result')
function flipImage() {
    let imageId = this.getAttribute('imgId')
    imageChosen.push(itemList[imageId].name)
    this.setAttribute('src', itemList[imageId].img)

    if(itemList[choice].img === itemList[imageId].img){
        result.innerHTML = 10-n
        found = true
    }else{
        n+=1
    }
    setTimeout( ()=>{if(found){
        alert('You Founded ' + itemList[imageId].name)
    }}, 500)
}


