function isValidPrice(price) {
    return typeof price === "number" && price>0
}

// console.log(isValidPrice(10))
function isValidEmail(email) {
    return email.includes("@") && email.includes(".")
}
// console.log(isValidEmail("tania@gmail.com"))

function calculateDiscount(price,discountPercent) {
    if (!isValidPrice(price)) {
        return
    }
    let discountAmount =(price*discountPercent)/100
    return price - discountAmount 
}

function calculateFinalBill(price,vatPercentage = 15) {
    let vatamount = (price*vatPercentage)/100
    return price + vatamount
}

function formatBDT(amount) {
    return `${amount.toFixed(2)} BDT`
}

function capitalized(str) {
    if (!str) {
        return " "
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function proccessOrder(user ,itemPrice, discountCode ) {
    console.log(`---------Processing order for ${capitalized(user.name)}------------`)
    if (!isValidEmail(user.email)) {
        console.log("---------Invalid Email adress ------")
        return
    }

    let currentAmount = itemPrice
    if (discountCode == "TANIA") {
        currentAmount = calculateDiscount(itemPrice,20)
        console.log("20% discount applied")
    }

    let totalBill = calculateFinalBill(currentAmount)
    console.log("Final Amount to pay: ", formatBDT(totalBill))
    console.log("Order Completed Successfully")
}

let user1 = {
    name : "Tania",
    email : "tania@gmail.com"
}

proccessOrder(user1,23000,"TANIA")
