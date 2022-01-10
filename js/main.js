$('#owl-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[`<i class="fas fa-caret-left"></i>` , `<i class="fas fa-caret-right"></i>`],
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#owl-1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[`<i class="fas fa-caret-left"></i>` , `<i class="fas fa-caret-right"></i>`],
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$(window).scroll(function(){
    let scroll_top = $(window).scrollTop()
    if(scroll_top > 200){
        $(".fix").fadeIn(100)
    }
    else{
        $(".fix").fadeOut(100)
    }
})
$(window).scroll(function(){
    let scroll_top = $(window).scrollTop()
    if(scroll_top > 100){
        $(".head").addClass("fixhead")
    }
    else{
        $(".head").removeClass("fixhead")
    }
})
$(window).scroll(function(){
    let scroll_top = $(window).scrollTop()
    if(scroll_top > 100){
        $(".head3").addClass("fixhead2")
    }
    else{
        $(".head3").removeClass("fixhead2")
    }
})
function count(){
    var counter = document.getElementById("demo");
    var value = counter.innerHTML;
    ++value
    document.getElementById("demo").innerHTML = value
  }
  function countTwo(){
    var counter = document.getElementById("demo1");
    var value = counter.innerHTML;
    ++value
    document.getElementById("demo1").innerHTML = value
  }
  function min(){
    var counter = document.getElementById("demo");
    var value = counter.innerHTML;
    --value
    document.getElementById("demo").innerHTML = value
  }
  function minTwo(){
    var counter = document.getElementById("demo1");
    var value = counter.innerHTML;
    --value
    document.getElementById("demo1").innerHTML = value
  }
// search.addEventListener("click",function(){
//     hide.style.display = "block"
// })
$("#search").click(function(){
    $('#hide').slideToggle()
})


 

let addToCartButtons = document.getElementsByClassName("shop-item-button")
for(let i = 0 ; i < addToCartButtons.length ; i++){
    let button = addToCartButtons[i]
    button.addEventListener("click" , function(event){
        let button = event.target
        let shopItem = button.parentElement.parentElement
        let title = shopItem.getElementsByClassName("shop-item-title")[0].innerText
        let price = shopItem.getElementsByClassName("shop-item-price")[0].innerText
        let imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src
        addItemToCart(title , price , imageSrc)
        updateCartTotal()
    })
}


function addItemToCart(title , price , imageSrc){
    let cartRow = document.createElement("div")
    cartRow.classList.add("cart-row")
    let cartItems = document.getElementsByClassName("cart-items")[0]
    let cartRowContents = `
    <div class="mycard" id="womenshop">
                    <div class="layout">
                    <img class="shop-item-image" src="${imageSrc}" alt="" width="100" height="100">
                </div>
                    <h3 class="shop-item-title">${title}</h3>
                    <span class="shop-item-price">${price}</span>
                    <input class="cart-quantity-input" type="number" value="1">
                </div>`
                cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
}
//طريقة اظهار ال cart بال js
//let content = document.getElementById("content")
//let shopCart = document.getElementById("shopcart")
//shopCart.addEventListener("click" , function(){
  //  content.style.display = "block"
//})

//طريقة اظهار ال cart بال jq
$("#shopcart").click(function(){
    $('#content').slideToggle()
})

$(document).ready(function(){
    $(".list").click(function(){
        const value = $(this).attr("data-filter")
        if(value=="all"){
            $(".mycard").show("1000")
        }
        else{
            $(".mycard").not("."+value).hide("1000")
            $(".mycard").filter("."+value).show("1000")
        }
    })
    //add active to all class when i click
    $(".list").click(function(){
        $(this).addClass("active").siblings().removeClass()
    })
})
//$("#women").click(function(){
//    $("#womenshop").show()
//   $("#card").hide()
//})