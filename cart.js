const btnImage = document.querySelector(".btn-image")
const countEl = document.getElementById("count-el")
const cartAmount = document.getElementById("cart-amount")
const cartEmpty = document.querySelector(".cart-empty")
const cartFull = document.querySelector(".cart-full")
const cartQuantity =document.getElementById("quantity")
const cartTotal = document.getElementById("total")
let count = 0


function removeOvarlay(){
    headerCart.classList.remove("d-block")
    headerCart.classList.remove("height")
}

function generalStyle() {
    cartEmpty.classList.add("show")
    cartFull.classList.remove("show")
  }
  
document.getElementById("btn-image").addEventListener("click", function (e) {
      generalStyle()
    
    if (count > 0) {
        cartQuantity.textContent = `${count}`
        cartTotal.textContent = `$${count * 125}`

        document.querySelector(".cart-delete-btn").addEventListener("click", function (e) {
          cartFull.classList.remove("show")
          cartEmpty.classList.add("show")
          generalStyle()
        })
      }
     removeOvarlay()
     showContent()
    })

   const cartIcon = document.querySelector(".cart-image")
   const headerCart = document.querySelector(".cart-header")  

    cartIcon.addEventListener("click", function () {
    headerCart.classList.toggle("d-block")
    headerCart.classList.toggle("height")
})


function increment(){
    
    if(count < 8){
        count += 1
        countEl.textContent = count
    } else{
        countEl.textContent = count
    }
    showContent()
}

function decrement(){
    showContent()
    if(count <= 0){
        countEl.textContent = 0
    }else{
        count -= 1
        countEl.textContent = count
    }
    
}

function showContent(){
   document.getElementById("btn-image").addEventListener("click", ()=>{
    if(count > 0){
        cartEmpty.classList.remove("show")
        cartFull.classList.add("show")
       
    }else{
        cartEmpty.classList.add("show")
        cartFull.classList.remove("show")
    }
   })
}


