# **Unstop Assignment**

This project implements a **login page** with form validation and integrates with a dummy API for authentication. As the API is not responsive during the development of this assignment, data is stored in the browser's **localStorage**. Upon successful login, the user is redirected to the **Main Page**, and upon logout, the user is redirected back to the login page.

## **Technologies Used**

- **React:** A frontend library used to build the user interface with reusable components.
- **Vite:** A modern build tool providing faster development and hot module reloading.
- **Material-UI (MUI):** A React-based library for building stylish and responsive UI components.
- **CSS:** Utilized for styling the components to ensure a visually appealing and responsive design.

## **Features**

### **LoginPage**

- **Fields:**
  - **Username:** Only accepts **"emilys"**.
  - **Email:** Must follow the standard email format (e.g., *example@gmail.com*).
  - **Password:** Must be at least **8 characters** long.
- **Actions:**
  - On **successful login**, the credentials are sent to the API ([https://dummyjson.com/auth/login](https://dummyjson.com/auth/login)).
  - As the **API is failing** (checked in Postman), the data is saved to **localStorage**, and a **valid alert message** is displayed.
  - On success, the **token** is saved in **localStorage**, and the user is redirected to **/home**.
  - If any validation fails (**username/email/password**), appropriate **error messages** are displayed.

### **MainPage**

- **Logout:**
  - Clicking the **Logout** button clears **localStorage** and redirects the user back to the **login page**.

## **Components**

- **LoginPage Component:**
  - Handles user login form and validation.
  - Sends credentials to the API and handles successful or failed login attempts.
- **MainPage Component:**

  - Displays user information and a **Logout** button.
  - Clears **localStorage** and redirects to the login page upon logout.

- **Reusable Components:**
  - **Custom Input:** A reusable component for input fields (username, email, password).
  - **Login Logout Button:** Reusable component to trigger login and logout actions.
  - **Styled Button:** A styled button used for the **Google** and **Facebook** login options (no action required).

## **How to Run**

1. Clone the repository:

   ```bash
   git clone https://github.com/apprenant-jd00/unstop-assignment-jyoti.git
   ```

2. Install dependencies:

   ```bash
   cd unstop-assignment-jyoti
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

## **Demo**

You can also access the live version of the project on Surge:

- [Live Demo](unstop-assignment-jyoti.surge.sh)

## **API Integration**

The login form sends credentials to the following API:

- **API URL:** [https://dummyjson.com/auth/login](https://dummyjson.com/auth/login)

## **Validation**

- **Username:** Only "emilys" is accepted.
- **Email:** Must follow a valid email format (e.g., *example@gmail.com*).
- **Password:** Must be at least 8 characters long.
- **Error Messages:** Appropriate validation messages are displayed if the input does not meet the requirements.

## **Logout**

- Clicking the **Logout** button clears the **localStorage** and redirects the user to the login page.

## **Responsiveness**

The page is designed to be **responsive** and will adapt to various screen sizes, including desktop, tablet, and mobile devices.
