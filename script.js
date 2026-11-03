function startPayment() {

    // STEP 1: DECLARE VARIABLES

    let customerName = "Ritesh";
    let walletBalance = 2000;
    let transactionCount = 0;
    let deliveryCharge = 50;
    let cashbackAmount = 25;

    document.write("<h2>Wallet Details</h2>");
    document.write("<br>");
    document.write("Customer Name: " + customerName + "<br>");
    document.write("Available Balance: ₹" + walletBalance + "<br>");
    document.write("Transactions: " + transactionCount + "<br>");
    document.write("<hr>");


    // STEP 2: GET USER INPUT

    let purchaseAmount = Number(prompt("Enter Purchase Amount:"));

    let couponCode = prompt("Enter Coupon Code:");


    // STEP 3: CALCULATE DISCOUNT

    let discountAmount;

    if (couponCode === "SAVE100") {
        discountAmount = 100;
    }
    else {
        discountAmount = 0;
    }


    // STEP 4: CALCULATE FINAL AMOUNT

    let finalAmount = purchaseAmount - discountAmount + deliveryCharge;

    document.write("<h2>Payment Details</h2>");
    document.write("<br>");
    document.write("Purchase Amount: ₹" + purchaseAmount + "<br>");
    document.write("Discount: ₹" + discountAmount + "<br>");
    document.write("Delivery Charge: ₹" + deliveryCharge + "<br>");
    document.write("Final Amount: ₹" + finalAmount + "<br>");


    // STEP 5: CHECK PAYMENT

    let isPaymentValid = purchaseAmount > 0 && walletBalance >= finalAmount;


    // STEP 6: PROCESS PAYMENT

    let paymentStatus;
    let cashbackReceived = 0;

    if (isPaymentValid) {

        paymentStatus = "Payment Successful!";

        walletBalance = walletBalance - finalAmount;

        walletBalance = walletBalance + cashbackAmount;

        cashbackReceived = cashbackAmount;

        transactionCount++;

    }
    else {

        paymentStatus = "Payment Failed!";

    }

    document.write("<h2>" + paymentStatus + "</h2>");
    document.write("<hr>");


    // STEP 7: DISPLAY FINAL DETAILS

    document.write("<h2>Final Wallet Details</h2>");
    document.write("<br>");

    document.write("Customer Name: " + customerName + "<br>");
    document.write("Remaining Balance: ₹" + walletBalance + "<br>");
    document.write("Cashback: ₹" + cashbackReceived + "<br>");
    document.write("Transaction Count: " + transactionCount + "<br>");

}