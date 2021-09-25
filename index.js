                    //Hamburguer

const navToggle= document.querySelector(".nav-toggle");
const navLinks=document.querySelectorAll(".nav-link");

navToggle.addEventListener("click",()=>{
    document.body.classList.toggle("nav-open");
});

navLinks.forEach(link =>{
    link.addEventListener("click",() =>{
        document.body.classList.remove("nav-open");
    });
});


                //Slider
//Images
let images=["./img/Nono1.jpeg","./img/Nono2.jpeg"];

//Element to upload the slider
let slider=document.getElementById("slider-js");

//General element of the slider
let sliderContainer=document.getElementById("slider-container");
//let sliderContainer=document.getElementById("memories");

//Container Anchor in function to images
slider.style.width=images.length*100+"%";

//Element to upload the navigation items
let sliderNav=document.getElementById("slider-navigation");

//variable to know if the slider is currently active 
let active=true;

//Event to notice if the mouse is over  of the slider
sliderContainer.addEventListener("mouseover",()=>{
    if(active)active=false;
});

//Event to notice if the mouse is out of the slider
sliderContainer.addEventListener("mouseout",()=>{
    if(!active)active=true;
});

//Event at click the navigation Item
sliderNav.addEventListener("click",(e)=> slideImage(e.target.id.slice(-1)));

//Draw the slider and Navigation bar
for(let img in images){
    //Upload the images
    slider.innerHTML+= `<img src="${images[img]}" class="slider--img" style="width: ${100/images.length}%">`;
    
    //Upload the navigation
    sliderNav.innerHTML+=  `<span class="${img==0? 'slider-nav slider-nav--active':'slider-nav'}" 
    id="slider-nav-${img}">`;
}   

//Variable to count images
let count=0;

//Time Intervals for the count variable
const startInterval= ()=>setInterval(counter,2000);

//Init the counter
startInterval();

//Function to switch the image to the next
function counter(){
    if(active){
        count++;
        if(count>=images.length)count=0;
        setInterval(slideImage(count),2000);
        setInterval(setActive(count),2000);
    }
}

//Function to localizate the navigation item clicked
function slideImage(id){
    console.log("Clicked!!");
    if(!active&&!isNaN(id)){
        count=id;
        setActive(id);
    }
    slider.style.left = "-"+id+ "00%";
}

//Function to add and remove the the slider Container
let navIcons=[...document.getElementsByClassName("slider-nav")];
function setActive(id){
    navIcons.map(idValue => idValue.attributes.id.nodeValue.slice(-1)==id?
                            idValue.classList.add("slider-nav--active"):
                            idValue.classList.remove("slider-nav--active")
                            

    )
}


