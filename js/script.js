function validateForm() {
    var x = document.forms["sidebarForm"]["first-name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

function validateForm() {
    var x = document.forms["sidebarForm"]["last-name"].value;
    if (x == "") {
        alert("Last name must be filled out");
        return false;
    }
}