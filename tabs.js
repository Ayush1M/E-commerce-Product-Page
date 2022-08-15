const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});

function changeTabPanel(e){
    const targetTab = e.target;

    const tabContainer = targetTab.parentNode;

    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);
        
    targetTab.setAttribute("aria-selected", true);
}

document.getElementById("thumbnail1").addEventListener("click", ()=>{
    document.getElementById("product1").style.display = "block"
    document.getElementById("product2").style.display = "none"
    document.getElementById("product3").style.display = "none"
    document.getElementById("product4").style.display = "none"
})


document.getElementById("thumbnail2").addEventListener("click", ()=>{
    document.getElementById("product1").style.display = "none"
    document.getElementById("product2").style.display = "block"
    document.getElementById("product3").style.display = "none"
    document.getElementById("product4").style.display = "none"
})

document.getElementById("thumbnail3").addEventListener("click", ()=>{
    document.getElementById("product1").style.display = "none"
    document.getElementById("product2").style.display = "none"
    document.getElementById("product3").style.display = "block"
    document.getElementById("product4").style.display = "none"
})

document.getElementById("thumbnail4").addEventListener("click", ()=>{
    document.getElementById("product1").style.display = "none"
    document.getElementById("product2").style.display = "none"
    document.getElementById("product3").style.display = "none"
    document.getElementById("product4").style.display = "block"
})