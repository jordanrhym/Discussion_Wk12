// Challenge 1 pt.1
document.querySelector("#subscribe").addEventListener("click", function() {
    console.log("this works")

    if(this.checked) {
        document.querySelector("#emailDiv").style.display = "block"
    }
    else {
        document.querySelector("#emailDiv").style.display = "none"
        console.log('else statement')
    }
})

// Challenge 1 pt.2
document.addEventListener("click", function() {
    let currentTime = new Date();
    alert("Current time: " + currentTime);
});