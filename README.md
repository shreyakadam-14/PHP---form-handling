# Body Checkup Appointment Form

This project is a styled HTML form that allows users to book an appointment for a body checkup. The form includes fields for the user's name, contact number, and city selection. The layout is visually appealing with modern design and responsive alignment.

## 🧾 Features

- Responsive and centered design using Flexbox
- Custom dropdown for city selection
- Form fields:
  - Name
  - Contact
  - City
- Stylish submit button
- Clean UI with blur background and rounded corners

## 🛠 Tech Stack

- HTML
- CSS
- JavaScript (for dropdown interaction)
- PHP (for future form handling)


## 🔧 Setup Instructions

1. Clone or download the project to your local server directory (e.g., `htdocs` in XAMPP).

2. Make sure you have a local server environment like **XAMPP**, **MAMP**, or **WAMP**.

3. Create a `process.php` file (see below) to handle form data on submission.

4. Link the form's `action` attribute to `process.php`.

```html
<form action="process.php" method="POST">
