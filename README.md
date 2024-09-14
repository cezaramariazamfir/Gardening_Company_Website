# Kronplant Gardening Company Website

## Overview

This project aims to provide an intuitive and responsive online presence for a gardening company. The website includes various features to enhance user experience and streamline the management of customer interactions.


![image](https://github.com/user-attachments/assets/44f74879-427e-44a2-aacb-5c3af59e4060)


## Features

### Navigation
- **Responsive Navigation Menu:** A dynamic menu that adjusts seamlessly to different screen sizes and devices.
- **Dark Mode Toggle:** A button allowing users to switch between light and dark themes for better accessibility and user preference.

  ![image](https://github.com/user-attachments/assets/0166adb4-bd34-438b-a1c8-395ac39bf47e)
  ![image](https://github.com/user-attachments/assets/4badff91-18a2-4799-a053-c5eb4a53fc3e)


### Contact Form
- **Google Sheets Integration:** Submissions from the contact form are directly exported to a Google Sheets spreadsheet using the Google Sheets API. This feature ensures that all inquiries are stored and managed efficiently.
- **Validation:** Basic form validation to ensure all required fields are filled before submission.

![image](https://github.com/user-attachments/assets/7e9c2f45-8a93-46de-9df4-82fa26c3fbbd)
![image](https://github.com/user-attachments/assets/02bc8615-bcb8-4108-8f39-fbebea662bf5)



### Admin Login
- **Authentication:** Secure login system for administrators. User credentials are verified against a JSON file (`users.json`).
- **Redirection:** Upon successful login, the admin is redirected to the Google Sheets document containing contact form responses. If login fails, the user is redirected to a custom error page (`404.html`).

![image](https://github.com/user-attachments/assets/b707bcee-33f5-41b2-bafc-bea38dae3199)


### Reviews Section
- **Dynamic Content Loading:** Customer reviews are stored in a JSON file and dynamically loaded onto the webpage. This allows for easy updates and management of reviews without altering the HTML structure.

![image](https://github.com/user-attachments/assets/d333cd1b-6b26-4ea0-8584-f45bec5f11b4)



## Technology Stack

### Frontend
- **HTML:** Used for structuring the content on the website.
- **CSS:** Applied for styling and layout, ensuring a responsive and visually appealing design.
- **JavaScript:** Adds interactivity and handles features like dark mode toggle, form submissions, price estimation calculator and dynamic content loading.

### Backend
- **Google Sheets API:** Facilitates the export of contact form submissions to a Google Sheets spreadsheet, providing a convenient way to manage inquiries.
- **JSON:** Used for storing user credentials and customer reviews, making it easy to update and manage data.

## File Structure

### HTML Files
- `index.html`: Home page
- `servicii.html`: Services page
- `portofoliu.html`: Portfolio page
- `contact.html`: Contact page
- `login.html`: Admin login page
- `404.html`: Custom error page for failed login attempts

### CSS
- `styles.css`: Main stylesheet for all pages

### JavaScript
- `index.js`: Main script file for handling interactive features and functionalities
- `login.js`: Script for managing the admin login process

### Images
- Stored in the `images` directory

### JSON Files
- `users.json`: Contains credentials for admin login
- `reviews.json`: Contains customer reviews

