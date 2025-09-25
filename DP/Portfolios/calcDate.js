function calcDate() {
    var date1 = new Date(document.forms["Form1"]["date1"].value);
    var date2 = new Date(document.forms["Form1"]["date2"].value);

    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById("answer").value = "Result: " + diffDays.toString() + " Days";

    return false; 
}
