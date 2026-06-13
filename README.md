# Age Calculation Application

---

## Description

A straightforward and reliable web-based application designed to calculate a user's age accurately based on their date of birth. This tool provides precise age calculations in years, accounting for month and day differences to ensure accuracy.

The Age Calculation Application leverages JavaScript's date manipulation capabilities to compute the exact age of an individual by comparing their birth date with the current date. The application handles edge cases such as leap years and varying month lengths to deliver precise results.

The primary objective of this project is to provide users with a simple yet accurate age calculation tool that can be used for various purposes including verification, demographics, and personal record-keeping through an intuitive and accessible interface.

---

## Technologies

The following technologies were utilized in the development of this application:

- **HTML5** - Semantic markup and form structure
- **CSS3** - Professional styling and responsive design
- **JavaScript (ES6+)** - Date manipulation and age calculation logic

---

## Features

- **Accurate Age Calculation** - Precise computation accounting for months and days
- **Date Input Validation** - Ensures valid date selection before calculation
- **Real-time Results** - Instant age display upon calculation
- **Leap Year Support** - Handles leap years correctly in calculations
- **User-friendly Interface** - Simple and intuitive design
- **Input Error Handling** - Alerts for missing or invalid input
- **Responsive Design** - Works seamlessly on desktop and mobile devices

---

## Installation

Getting started with the Age Calculation Application is simple:

1. **Clone or download** this repository to your computer
2. **Navigate** to the project folder
3. **Open** the `index.html` file in any modern web browser (Chrome, Firefox, Edge, Safari, etc.)

**No additional setup or dependencies required** — this is a standalone web application that runs entirely in your browser.

---

## Usage

Using the Age Calculation Application is straightforward:

1. **Open** the application in your web browser
2. **Select** your date of birth using the date input field
3. **Click** the calculation button labeled "Yaşını Hesaplamak İçin Dokun" (Calculate Your Age)
4. **View** the calculated age displayed on the screen
5. **Repeat** as needed for different dates

---

## How It Works

The Age Calculation Application operates through the following process:

1. **Input Collection** - User provides their date of birth via the date picker
2. **Validation** - Application checks if a valid date has been entered
3. **Date Comparison** - System compares birth date with current date
4. **Year Calculation** - Initial age is calculated by subtracting birth year from current year
5. **Month and Day Adjustment** - Age is adjusted if the birthday has not yet occurred this year
6. **Result Display** - Calculated age is displayed to the user

The calculation accounts for:
- Month differences between current date and birth date
- Day differences within the same month
- Automatic handling of leap years

---

## Calculation Accuracy

The application employs industry-standard methods for age calculation:

- **Complete Year Count** - Only fully completed years are counted
- **Month Consideration** - Accounts for months passed since birth date
- **Day Precision** - Considers the specific day of birth
- **Current Date Reference** - Uses system date for real-time accuracy

Example: A person born on March 15, 1995 will be:
- Age 28 after March 15, 2023
- Age 27 before March 15, 2023

---

## Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | Fully Supported |
| Firefox | Latest | Fully Supported |
| Safari | Latest | Fully Supported |
| Edge | Latest | Fully Supported |

---

## Use Cases

- **Personal Record Keeping** - Track and verify personal age information
- **Form Verification** - Quick age verification for online applications
- **Event Planning** - Calculate ages for birthday planning and celebrations
- **Administrative Tasks** - Age verification for eligibility requirements
- **Educational Purposes** - Learn about date manipulation in JavaScript

---

## Input Requirements

- **Date Format** - Use the provided date picker for consistent date entry
- **Valid Date** - Enter a date that is in the past
- **Required Field** - A date must be selected before calculation
This project is open source and available for educational and personal use.
