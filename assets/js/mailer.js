function sendMail() {
    // Get values
    var name = document.getElementById('name').value.trim();
    var surname = document.getElementById('surname').value.trim();
    var affiliation = document.getElementById('affiliation').value.trim();
    var dinner = document.getElementById('dinner').value.trim();

    // Validation
    if (!name) {
        alert("Please enter your name.");
        document.getElementById('name').focus();
        return;
    }

    if (!surname) {
        alert("Please enter your surname.");
        document.getElementById('surname').focus();
        return;
    }

    if (!affiliation) {
        alert("Please enter your affiliation.");
        document.getElementById('affiliation').focus();
        return;
    }

    if (!dinner) {
        alert("Please select your dinner preference.");
        dinnerSelect.focus();
        return;
    }

    // Build subject and body safely
    var subject = 'AdvMagSC Registration - ' + name + ' ' + surname;
    var body =
        'Name: ' + name + '\n' +
        'Surname: ' + surname + '\n' +
        'Affiliation: ' + affiliation + '\n' +
        'Dinner: ' + dinner;

    // Encode for mailto
    var mailtoLink = 'mailto:info@advmagsc.eu'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);

    // Open email client
    window.location.href = mailtoLink;
}
