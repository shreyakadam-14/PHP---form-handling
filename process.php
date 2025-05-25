<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $contact = htmlspecialchars($_POST["contact"]);
    $city = htmlspecialchars($_POST["city"]);

    // Example: Save to database or send an email
    echo "Appointment booked for $name from $city. We will contact you at $contact.";
}
?>
