document.querySelector("#ch3form").addEventListener("click", function() {
    console.log("this works");

    if (querySelector("inputstanding") && querySelector("gradDate")) {
        document.querySelector("submit").disabled = false;
    }
    else {
        document.querySelector("submit").disabled = true;
        console.log('else statement')
    }})