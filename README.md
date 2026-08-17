<div align="center">

# Demo : Sign In / Sign Up

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen?style=for-the-badge)

</div>

---

## ✨ Features

- Sign in ជាមួយ Email / Password
- Sign up form (Name / Email / Password)
- Social login icons (Facebook / LinkedIn / X)
- Toggle animation រវាង Sign in ↔ Sign up (slide panel)
- Forgot password modal (Email → simulate send reset link)
- Responsive ពេញលេញ គ្រប់ទំហំអេក្រង់ (Desktop / Tablet / Mobile)
- Show / hide password toggle
- Loading spinner លើប៊ូតុងពេល submit
- Toast notification (success message)
- Remember me checkbox
- Facebook-style blue color theme

---

## 📁 Project Structure

```
Signin-Signup-System/
├── css/
│   └── style.css       → CSS + Responsive + Error state + Toast + Spinner + Modal
├── js/
│   ├── script.js       → Toggle Sign in ↔ Sign up + Forgot-password modal open/close
│   ├── ux.js           → Show/hide password, loading spinner, toast
│   └── validation.js   → ត្រួតពិនិត្យ Form (required / email / password / forgot-password)
├── index.html
└── README.md
```

---

## 🚀 How to Run

1. Clone ឬ download repository នេះ
2. បើកឯកសារ `index.html` ដោយ browser ណាមួយ
3. ចុចប៊ូតុង **Sign up** / **Sign in** ដើម្បីមើល animation toggle
4. ចុច **"Forgot your password?"** ដើម្បីមើល modal reset password

---

## ⚠️ Note

Frontend demo ប៉ុណ្ណោះ — មិនទាន់ភ្ជាប់ backend/API ពិតទេ (Sign in, Sign up និង Forgot password ជា simulate ដោយ `setTimeout`)។
