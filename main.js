 // slid galary
const wrapper =document.querySelector('.sliderWrapper');
const slideritem=document.querySelector('.sliderItem');
const menuItem =document.querySelectorAll(".menuItem");
 //select all items in the products
 let productTitle=document.querySelector('.productTitle');
 let productImg=document.querySelector('.productImg');
 let productPrice=document.querySelector('.productPrice');
 let productColors=document.querySelectorAll('.color');
     const products=[
        //item 1
         {
            id:1,
            title:"AIR FORCE",
            price:119,
            colors:[
                {
                 code:"Black",
                 img:"./photos/air.png",
                },
                {
                  code:"darkblue",
                  img:"./photos/air2.png",
                },
            ]
         },
         //item 2
         {
            id:2,
            title:"Air JORDAN",
            price:149,
            colors:[
                {
                 code:"lightgray",
                 img:"./photos/jordan.png",
                },
                {
                 code:"green",
                 img:"./photos/jordan2.png"
                },
            ]
         },
         //item 3
         {
            id:3,
            title:"BLAZER",
            price:109,
            colors:[
                {
                code:"lightgray",
                img:"./photos/blazer.png",
                },
              {
                code:"green",
                img:"./photos/blazer2.png"
                },
            ]
         },
        //item 4  
        {
            id:3,
            title:"CRATER",
            price:129,
            colors:[
                {
                  code:"black",
                  img:"./photos/crater.png",
                },
                {
                 code:"lightgray",
                  img:"./photos/crater2.png",
                },
            ]
        },
        // item 5
        {
            id:5,
            title:"HIPPE",
            price:99,
            colors:[
                {
                  code:"gray",
                  img:"./photos/hippie.png",
                },
                {
                 code:"black",
                  img:"./photos/hippie2.png",
                },
            ]
        },
     ]
     let choosenProduct = products[0];
    menuItem.forEach((ele,index)=>{
        ele.addEventListener('click',function(){
          index=index%5
        //change the current slide
        wrapper.style.transform=`translate(${-100 * index}vw)`
        wrapper.style.transition="all 1s ease-in-out";
         //make the choiced ele in the slider active  
        // change the choosen product
        choosenProduct=products[index];  // if i make it in variable will be not worked
        //change the product
        productTitle.textContent=choosenProduct.title
        // change price
        productPrice.textContent='$'+choosenProduct.price
        //change img
        productImg.src=choosenProduct.colors[0].img     
        //assign the color to each element
       productColors.forEach((color,indexCo)=>{
        color.style.backgroundColor=choosenProduct.colors[indexCo].code
       });
     });
});
// assign item to color
productColors.forEach((color, indexC) => {
  color.addEventListener("click", () => {
    productImg.src = choosenProduct.colors[indexC].img;
  });
});
//specify the size 
//select items
let productSize=document.querySelectorAll(".size")
//loop for each ele
productSize.forEach((size,indecS)=>{
  //add classe active 
   size.addEventListener("click",()=>{
    // remove class active from all elements
    productSize.forEach((size)=>{
      size.classList.remove("active")
    })
    size.classList.add("active")
   })
})
//make the choiced ele in the slider active
menuItem.forEach((ele)=>{
   ele.addEventListener("click",()=>{
    menuItem.forEach((ele)=>{
      ele.style.color="gray"
    })
    // add active ele
    ele.style.color="wheat"
   })
})
//make the search active
const noItem=document.querySelector('.noItem');
const check=document.querySelector(".search i");
//select the input 
const input =document.querySelector('.search input');
input.addEventListener('keyup',(e)=>{
  let result=e.target.value.toUpperCase();
  menuItem.forEach((e,indexCh)=>{
    //solve problem double nav Bar
    indexCh=indexCh%5
  if(e.innerHTML===result){
    wrapper.style.transform=`translate(${-100 * indexCh}vw)`
    e.style.color="wheat";
    check.style.display="block"
    noItem.style.display="none"
    //MAKE THE PRODUCT SEC TO CHANGE AS WEll
  } else{
    e.style.color="gray";
    noItem.style.display="block";
    check.style.display="none";
  }
  })
  if(result===""){
    noItem.style.display="none";
    check.style.display="none";

  }
})
//onLoad 
const delayLoad=document.querySelector("#delayLoad");
window.onload=function(){
  menuItem[0].style.color="wheat";
  delayLoad.style.opacity="1";
}
// work on payment Btn
//select pay&X&
let payBtn=document.querySelector('.productButton');
let cxlBtn=document.querySelector('.close');
let payment=document.querySelector('.payment')
//add event click  to payBtn
payBtn.addEventListener('click',()=>{
  payment.style.display="block"
})
//add event click to cxlBtn
cxlBtn.addEventListener('click',()=>{
  payment.style.display="none"
})
// hamburger menu 
let hamMenu=document.querySelector('.menu-btn')
let navItems=document.querySelector('.nav-items')
let menuopen=false;
let navMob=document.querySelector(".Nav-Mob");
hamMenu.addEventListener("click",()=>{
  if(!menuopen){
    hamMenu.classList.add("open");
    navMob.style.left="0";
    menuopen=true;
  } else{
    navMob.style.left="-150px";
    hamMenu.classList.remove("open")
    menuopen=false;
  }
})
// Dark mode
let productSec=document.querySelector('.product');
//select features section/
let featureSec=document.querySelector('.features');
//select button
let toggle=document.getElementById('toggleDark');
//select body
let body=document.querySelector('body');
// work on darkMode on localStorag
toggle.addEventListener('click',toggleDark)
function toggleDark(){
  this.classList.toggle('bi-moon');
    if(toggle.classList.contains('bi-moon')){
              body.classList.add('darkMode');
              productSec.classList.add('darkMode');
              featureSec.classList.add('darkMode');
    } else{
            body.classList.remove('darkMode');
            productSec.classList.remove('darkMode');
            featureSec.classList.remove('darkMode');
            body.style.transition="2s";
            productSec.style.transition="2s"
            featureSec.style.transition="2s"
      }
  }
//delay when scrolling
const features=document.querySelector('.features');
const feature=document.querySelectorAll(".feature");
const car=document.querySelector("#car");
const deliveryTitle=document.querySelector('#car~.featureTitle');
const deliveryDescription=document.querySelector('#car~.featureDesc');
const refund=document.querySelector("#refund");
const gift=document.querySelector("#gift");
const contact=document.querySelector("#contact");
const product=document.querySelector('#product');
const image=document.querySelector(".product .productImg");
const productDetails=document.querySelector(".productDetails");
const gallery=document.querySelector(".gallery");
const choosenStyle=document.querySelector(".newSeason .nsItem:nth-child(2)");
const nsItem=document.querySelector(".nsItem");
let up=document.querySelector('.up');
//delay on feature 
window.onscroll=function (){
  if(window.scrollY >= features.offsetTop-500){
    feature.forEach((ele)=>{
      car.style.left="0";
      deliveryTitle.style.bottom="0";
      deliveryDescription.style.bottom="0";
      refund.style.bottom="0";
      gift.style.top="0";
      gift.style.opacity="1"
      contact.style.right="0";
      ele.style.opacity="1";
    })
    // delay on product
    if(window.scrollY >= product.offsetTop-300){
      image.style.left="0";
      productDetails.style.right="0";
      productDetails.style.top="10%";
    }
    // delay on gallary
    if(window.scrollY >= gallery.offsetTop-900){
      gallery.style.bottom="0";
    }
    //delay new setion
    if(window.scrollY >= nsItem.offsetTop-200){
      choosenStyle.style.bottom="0";
    }
  }
//scroll to top
  if(window.scrollY >= 45){
    up.style.display="block";
  } else{
  	up.style.display="none";
  }
  up.addEventListener('click',()=>{
    window.scrollTo({
      left:0,
      top:0,
      behavior:"smooth",
    })
  })  
};



