const btnImage = document.querySelector(".btn-image")
const countEl = document.getElementById("count-el")
const cartAmount = document.getElementById("cart-amount")
const cartEmpty = document.querySelector(".cart-empty")
const cartFull = document.querySelector(".cart-full")
const cartQuantity = document.getElementById("quantity")
const cartTotal = document.getElementById("total")
const cartIcon = document.querySelector(".cart-image")
let count = 0


function cartContent(){
    if(count > 0){
        cartIcon.addEventListener("click", () =>{
            cartFull.classList.add("show")
        })
    }
    else{
        cartFull.classList.remove("show")
    }
}

cartContent()

function removeOvarlay(){
    headerCart.classList.remove("d-block")
    headerCart.classList.remove("height")
}

function generalStyle() {
    cartEmpty.classList.add("show")
    cartFull.classList.remove("show")
  }
  
document.getElementById("btn-image").addEventListener("click", (e) => {
    if (count > 0) {
        cartAmount.textContent = count
        cartQuantity.textContent = count
        cartTotal.textContent = `$${count * 125}`
        

        document.querySelector(".cart-delete-btn").addEventListener("click", (e) => {
          generalStyle()
          cartAmount.classList.remove("show")
        })
      }
     removeOvarlay()
     showContent()
    })

    
   const headerCart = document.querySelector(".cart-header")  

    cartIcon.addEventListener("click", (e) => {
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
    if(count <= 0){
        countEl.textContent = 0
    }else{
        count -= 1
        countEl.textContent = count
    }  
    showContent()  
}

function showContent(){
   document.getElementById("btn-image").addEventListener("click", () =>{
    if(count > 0){
        cartAmount.classList.add("show")
        cartEmpty.classList.remove("show")
        cartFull.classList.add("show")
       
    }else{
        cartEmpty.classList.add("show")
        cartFull.classList.remove("show")
        cartAmount.classList.remove("show")
    }
   })
}


