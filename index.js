/* code for importing html css and js which is used everywhere */
const nav = document.querySelector(".nav");
fetch("/navbar.html")
.then(res=>res.text())
.then(data=>{
    nav.innerHTML = data
})

const footer = document.querySelector(".footer")
fetch("/footer.html")
.then(res=>res.text())
.then(data=>{
    footer.innerHTML = data
})

/* rest code */
let sum = 0
var orders = []
let flex2 = document.getElementsByClassName("flex2")
let orderImg = document.getElementsByClassName("order-img")
let orderPizza = document.getElementsByClassName("order-pizza")
let orderQty = document.getElementsByClassName("order-qty")
let orderQuantity = document.getElementsByClassName("qty")
let checkoutButton = document.getElementsByClassName("checkout");
let backToMenuButton = document.getElementsByClassName("button4");
let button1 = document.getElementsByClassName("button")
let incDec = document.getElementsByClassName("inc-dec")
let myOrders = [
    {
        img:"menu images/844.jpg",
        pizza: "Mojo's Chicken Special [BIG 10'']"
    },
    {
        img:"menu images/845.jpg",
        pizza: "Chicken Mexicano [BIG 10'']"
    },
    {
        img:"menu images/846.jpg",
        pizza: "Chicken Tikka [BIG 10'']"
    },
    {
        img:"menu images/847.jpg",
        pizza: "Double Trouble Chicken [BIG 10'']"
    },
    {
        img:"menu images/848.jpg",
        pizza: "Fire Me Up Chicken [BIG 10'']"
    },
    {
        img:"menu images/849.jpg",
        pizza: "Chicken Italiana [BIG 10'']"
    },
    {
        img:"menu images/854.jpg",
        pizza: "Butter Chicken [BIG 10'']"
    },
    {
        img:"menu images/861.jpg",
        pizza: "Classic Pepperoni [BIG 10'']"
    }
]
function menu (){
    if (document.getElementById("flex").style.display === "flex"){
        document.getElementById("flex").style.display = "none"
        document.getElementById("bar").style.transform = "rotate(0deg)"
    }
    else{
        document.getElementById("flex").style.display = "flex" 
        document.getElementById("bar").style.transform = "rotate(90deg)"
    }    
}
function add(n){
    let button = document.getElementsByClassName("button")
    let incDec = document.getElementsByClassName("inc-dec")
    sum += 495
    document.getElementById("checkout").style.display = "flex";
    document.getElementById("price").textContent = "₹ " + sum;
    document.getElementById("amount").textContent = "₹ " + sum;
    button[n].style.display = "none"
    incDec[n-1].style.display = "flex";
}
function inc(n){
    let qty = document.getElementsByClassName("qty")
    let quantity = parseInt(qty[n-1].textContent)
    quantity +=1;
    sum +=495
    if(sum > 0){
        document.getElementById("checkout").style.display = "flex";   
    }
    qty[n-1].textContent = quantity
    document.getElementById("price").textContent = "₹ " + sum;
    document.getElementById("amount").textContent = "₹ " + sum;
    orderQty[n-1].textContent = "QTY: " + quantity 
}
function dec(n){
    let qty = document.getElementsByClassName("qty")
    let quantity = parseInt(qty[n-1].textContent)
    let incDec = document.getElementsByClassName("inc-dec")
    let button = document.getElementsByClassName("button")
    if(quantity === 1){
        incDec[n-1].style.display = "none";
        button[n].style.display = "flex"
        quantity+=1
        flex2[n-1].classList.remove("order-active")
    }
    quantity -=1;
    sum -=495
    if(sum === 0){
        document.getElementById("checkout").style.display = "none";   
    }
    qty[n-1].textContent = quantity
    document.getElementById("price").textContent = "₹ " + sum;
    document.getElementById("amount").textContent = "₹ " + sum;
    orderQty[n-1].textContent = "QTY: " + quantity 
}

function orderItems(n){
    let item = myOrders[n-1]
    orderImg[n-1].src = item.img
    orderPizza[n-1].textContent = item.pizza
}

backToMenuButton[0].addEventListener("click" , function(){
    document.getElementById("checkout-cart").style.display = "none"
    document.getElementById("checkout").style.display = "flex";
    document.querySelector("main").style.display = "grid"
})

checkoutButton[0].addEventListener("click" , function(){
    document.getElementById("checkout-cart").style.display = "grid"
    document.getElementById("checkout").style.display = "none";
    document.querySelector("main").style.display = "none"
})

button1[0].addEventListener("click",function(){
    add(1)
    orderItems(1)
    flex2[0].classList.add("order-active")
})
button1[1].addEventListener("click",function(){
    add(2)
    orderItems(2)
    flex2[1].classList.add("order-active")
})
button1[2].addEventListener("click",function(){
    add(3)
    orderItems(3)
    flex2[2].classList.add("order-active")
})
button1[3].addEventListener("click",function(){
    add(4)
    orderItems(4)
    flex2[3].classList.add("order-active")
})
button1[4].addEventListener("click",function(){
    add(5)
    orderItems(5)
    flex2[4].classList.add("order-active")
})
button1[5].addEventListener("click",function(){
    add(6)
    orderItems(6)
    flex2[5].classList.add("order-active")
})
button1[6].addEventListener("click",function(){
    add(7)
    orderItems(7)
    flex2[6].classList.add("order-active")
})
button1[7].addEventListener("click",function(){
    add(8)
    orderItems(8)
    flex2[7].classList.add("order-active")
})

function placeOrder(){
    alert("Successfully Placed Your Order")
}
function submit(){
    alert("Submitted successfully")
}