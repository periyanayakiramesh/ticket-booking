let bookings = [];
let bookingId = 1;

// selectmovie by clicking it
function selectMovie(price) {

    let movie = "";

    if (price === "150") {
        movie = "Leo"}
         else if (price === "180") {
        movie = "Vikram";
    } else if (price === "200") {
        movie = "Sita Ramam";
    }

    document.getElementById("movieChoice").value = movie;
    calculatePrice();
}


// 2. Calculate price
function calculatePrice() {

    let movie = document.getElementById("movieChoice").value;
    let qty = Number(document.getElementById("qty").value);
    let price = 0;

    if (movie === "Leo") 
       { price = 150;}
        else if (movie === "Vikram") 
        {price = 180;}
         else if (movie === "Sita Ramam")
        {price = 200; }
        
   

    if (qty < 1 || !Number.isInteger(qty)) 
        {
        document.getElementById("price").innerText =
            "Enter a valid ticket quantity";
        return; }
   

    document.getElementById("price").innerText =
        "Total Price: ₹" + (price * qty);
}


// 3. Book tickets
function bookTicket() {

    let movie = document.getElementById("movieChoice").value;
    let time = document.getElementById("time").value;
    let qty = Number(document.getElementById("qty").value);
    let email = document.getElementById("email").value;

    if (movie === "" || movie === "---Choose movie----" ||
        time === "" || email === "" ||
        !document.getElementById("email").checkValidity() ||
        qty < 1 || !Number.isInteger(qty)) {

        document.getElementById("message").innerText =
            "Please enter all details correctly!";
        return; }
   

    let price = 0;

    if (movie === "Leo") {
        price = 150;}
         else if (movie === "Vikram") 
            {price = 180;}
         else if (movie === "Sita Ramam")
        { price = 200;
    }

    let total = price * qty;

    let booking = {
        id: bookingId,
        movie: movie,
        time: time,
        qty: qty,
        total: total,
        email: email};
    
    bookings.push(booking);
    bookingId++;

    showBookings();

    document.getElementById("message").innerText =
        "Booking successful! Your total is ₹" + total;

    resetForm();
}


// 4. Display bookings and search
function showBookings() {

    let list = document.getElementById("list");
    let search = document.getElementById("search").value.toLowerCase();

    list.innerHTML = "";

    for (let i = 0; i < bookings.length; i++) {

        let b = bookings[i];

        if (b.movie.toLowerCase().includes(search) ||
            b.email.toLowerCase().includes(search)) {

            list.innerHTML +=
                "<tr>" +
                "<td>" + b.id + "</td>" +
                "<td>" + b.movie + "</td>" +
                "<td>" + b.time + "</td>" +
                "<td>" + b.qty + "</td>" +
                "<td>₹" + b.total + "</td>" +
                "<td>" + b.email + "</td>" +
                "</tr>";
        }
    }

    document.getElementById("count").innerText = bookings.length;

    if (list.innerHTML === "") {
        list.innerHTML =
            "<tr><td colspan='6'>No bookings found</td></tr>";
    }
}


// 5. Reset form
function resetForm() {

    document.getElementById("movieChoice").selectedIndex = 0;
    document.getElementById("time").value = "";
    document.getElementById("qty").value = 1;
    document.getElementById("email").value = "";
    document.getElementById("price").innerText = "Total Price: ₹0";
}



showBookings();
