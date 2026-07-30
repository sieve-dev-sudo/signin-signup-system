## Project Web Frontend Sign In Page

## ✨ Features

- Sign in ជាមួយ Email / Password
- Sign up form (Name / Email / Password)
- Social login icons (Facebook / LinkedIn / X)
- Toggle animation រវាង Sign in ↔ Sign up (slide panel)
- Responsive ពេញលេញ គ្រប់ទំហំអេក្រង់ (Desktop / Tablet / Mobile)
- Show / hide password toggle
- Loading spinner លើប៊ូតុងពេល submit
- Toast notification (success message)
- Remember me checkbox

---

## 📁 Project Structure

```
login-page/
├── css/
│   └── style.css       → CSS + Responsive + Error state + Toast + Spinner
├── js/
│   ├── script.js       → Toggle Sign in ↔ Sign up
│   ├── ux.js           → Show/hide password, loading spinner, toast
│   └── validation.js   → ត្រួតពិនិត្យ Form (required / email / password)
├── index.html
└── README.md
```

---

## 🚀 How to Run

1. Clone ឬ download repository នេះ
2. បើកឯកសារ `index.html` ដោយ browser ណាមួយ
3. ចុចប៊ូតុង **Sign up** / **Sign in** ដើម្បីមើល animation toggle
