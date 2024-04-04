document.querySelector("#sameAddress").addEventListener("click", function() {
    console.log("this works")

    if(this.checked) {
        document.querySelector("#home").value = document.querySelector("#bill").value
        document.querySelector("#home").disabled = true;
    }
    else {
        document.querySelector("#home").value = ""
        document.querySelector("#home").disabled = false;
        console.log('else statement')
    }
    // else {
    //     document.querySelector("#home").style.display = "none"
    //     console.log('else statement')
    // }
})

// Luke's Code
// document.querySelector("#sameAddress").addEventListener("click", function() {
    //bill = document.querySelector("#bill")
    //home = document.querySelector("#home")
    // console.log("Home value is" + home.value)
    // console.log("Billing value is" + bill.value)
    // if(this.checked) {
    //     console.log("Set it")
    //     home.value = bill.value
    //     home.disabled = true
    // }
    // else {
    //     console.log("Unset it")
    //     home.value = ""
    //     home.disabled = false
    // };