function sayHello() {
    alert("Thank you for joining! A member of the team will be in touch soon to discuss your induction");
    return true;
}

function SuccessfulSignUp() {
    alert("Thank you for signing up! A member of our team will get in touch with you soon!");
    return true;
}

$('details').click(function(event) {
    $('details').not(this).removeAttr("open");
});