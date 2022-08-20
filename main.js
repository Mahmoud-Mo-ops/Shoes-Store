 // slid galary
const wrapper =document.querySelector('.sliderWrapper');
const slideritem=document.querySelector('.sliderItem');
const menuItem =document.querySelectorAll(".menuItem");


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
     //select all items in the products
     let productTitle=document.querySelector('.productTitle');
     let productImg=document.querySelector('.productImg');
     let productPrice=document.querySelector('.productPrice');
     let productColors=document.querySelectorAll('.color');

     menuItem.forEach((ele,index)=>{
        ele.addEventListener('click',function(){
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
       productColors.forEach((color,index)=>{
        color.style.backgroundColor=choosenProduct.colors[index].code
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
const noItem=document.querySelector('.noItem')
//select the input 
const input =document.querySelector('.search input');
input.addEventListener('keyup',(e)=>{
  let result=e.target.value.toUpperCase();
  menuItem.forEach((e,indexCh)=>{
  if(e.innerHTML===result){
    wrapper.style.transform=`translate(${-100 * indexCh}vw)`
    e.style.color="wheat";
    noItem.style.display="none"
    //MAKE THE PRODUCT SEC TO CHANGE AS WEll
  } else{
    e.style.color="gray";
    noItem.style.display="block"
  }
  })
  if(result===""){
    noItem.style.display="none"
  }
})


//onLoad 
window.onload=function(){
  menuItem[0].style.color="wheat"
}


/*UP BTN*/
/*select Btn*/
let up=document.querySelector('.up');
/*make Btn appear in scroll Bttuon and in vers*/
window.onscroll=function(){
  if(window.scrollY >= 45){
    up.style.display="block";
  } else{
  	up.style.display="none";
  }
 }
//scroll to top 
up.addEventListener('click',()=>{
  window.scrollTo({
    left:0,
		top:0,
		behavior:"smooth",
  })
})

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

