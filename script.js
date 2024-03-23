const images=document.querySelectorAll(".header-slider ul img");
const prevBtn=document.querySelector(".control-prev");
const nextBtn=document.querySelector(".control-next");

let n=0;

function changeSlide(){
    for(let i=0;i<images.length; i++){
        images[i].style.display="none";
    }
    images[n].style.display="block";
}

changeSlide();

prevBtn.addEventListener("click",()=>{
    if(n>0){
        n--
    }
    else{
        n=images.length-1;
    }
    changeSlide()
})
nextBtn.addEventListener("click",()=>{
    if(n<images.length-1){
        n++
    }
    else{
        n=0;
    }
    changeSlide()
})

const container=document.querySelectorAll(".products");
for(const i of container){
    i.addEventListener("wheel",e =>{
        e.preventDefault();
        i.scrollLeft+=e.deltaY;
    })
}