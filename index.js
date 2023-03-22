let shopp = document.querySelector('.shop')

shopp.addEventListener('click', (e)=>{
    window.location = ('shopnow.html')
})

let displaytext=[
    {
    head:'dkmehuiej',
    para: 'dhuefyuwcudfun mcwufuiwe  ruhfu fr'
    },
    {

    }
]

let lessButton = document.querySelector('.fa-less-than')
let greaterButton = document.querySelector('.fa-greater-than')
let firstText = document.querySelector('.first-text')
let firstImage = document.querySelector('.imagee')
let displayImage = document.querySelector('.image .display')
let displayImages = document.querySelectorAll('.image .display-image')
let image_index = 0


displayImage.src = displayImages[image_index].src
let lastImage = displayImages.length - 1

console.log(lastImage)

console.log(displayImages)

function next(){
    if (image_index > lastImage){
        image_index = 0
        
    }
}
function prev (){
    if (image_index < 0 ){
        image_index = lastImage
    }
}



greaterButton.addEventListener('click',()=>{
    ++image_index;
    next();
    displayImage.src= displayImages[image_index].src
} )


