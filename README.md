# Project Web Frontend Sign In Page

## ✨ Features

- Sign in ជាមួយ Email / Password
- Sign up form (Name / Email / Password)
- Social login icons (Facebook / LinkedIn / X)
- Toggle animation រវាង Sign in ↔ Sign up (slide panel)
- Responsive ពេញលេញ គ្រប់ទំហំអេក្រង់ (Desktop / Tablet / Mobile)
- Neumorphic UI design (soft shadow style)
- Form validation (required fields, email format, password length, error message)
- Show/hide password toggle
- Loading spinner លើប៊ូតុងពេល submit
- Toast notification (success message)
- Remember me checkbox

---

## 📁 Project Structure

```
login-page/
├── index.html
├── css/
│   └── style.css      → CSS + Responsive + Error state + Toast + Spinner
├── js/
│   ├── script.js       → Toggle Sign in ↔ Sign up
│   ├── validation.js   → ត្រួតពិនិត្យ Form (required / email / password)
│   └── ux.js            → Show/hide password, loading spinner, toast
└── README.md
```

---

## 🚀 How to Run

1. Clone ឬ download repository នេះ
2. បើកឯកសារ `index.html` ដោយ browser ណាមួយ
3. ចុចប៊ូតុង **Sign up** / **Sign in** ដើម្បីមើល animation toggle

---

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox, Media Queries, box-shadow neumorphism)
- Vanilla JavaScript