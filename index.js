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
//let displayImage = document.querySelector('.image .display')
let displayImages = document.querySelectorAll('.image .display-image')
let image_index = 1;


//displayImage.src = displayImages[image_index].src
let lastImage = displayImages.length - 1

console.log(lastImage)

console.log(displayImages)

function next(){
   // console.log(value)
    if (image_index > lastImage){
        image_index = 0
        
    }
}


function prev (){
    if (image_index < 0 ){
        image_index = lastImage
    }
}

 function toggleImage(n) {
    // ++image_index;
    // next();
    // displayImage.src= displayImages[image_index].src

let i;
let slides = document.getElementsByClassName('display-image');

if (n>slides.length) {
    image_index =1
}
if (n<1) {
    image_index = slides.length  
}

for (i=0; i <slides.length; i++) {
    console.log(i)
    slides[i].style.display='none';
}
console.log(image_index);
slides[image_index-1].style.display="flex";

} 

toggleImage(image_index);

lessButton.addEventListener('click',()=>{
    
    toggleImage(image_index += -1)
}
)

greaterButton.addEventListener('click',()=>{
    
    toggleImage(image_index += 1)
}
)




