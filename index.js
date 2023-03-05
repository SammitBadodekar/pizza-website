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
let sum = 0
function add(){
    sum += 495
    document.getElementById("checkout").style.display = "flex";
    document.getElementById("price").textContent = "₹ " + sum;
}

function placeOrder(){
    alert("Successfully Placed Your Order")
}
function submit(){
    alert("Submitted successfully")
}