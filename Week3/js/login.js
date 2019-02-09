function initializeLogin() {

    $('#error').hide();

    $('#submitbtn').click(function(event) {
         if (validateRegistration()) {
            alert("Submitting regisgtration");
         }
    });
}

function validateRegistration() {
    if ($('#username').val().length == 0) {
        displayError("You must enter a username.");
        return false;
    }
    if ($('#password').val().length == 0) {
        displayError("You must enter a password.");
        return false;
    }
    return true;
}

function displayError(error) {
    $('#error').text(error);
    $('#error').show();
}