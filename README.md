<div align="center">

# 🔐 Demo : Sign In / Sign Up

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
- Toggle animation រវាង Sign in ↔ Sign up (sliding panel style ដូច Facebook)
- Forgot password modal (Email → simulate send reset link → auto-close)
- Responsive ពេញលេញ គ្រប់ទំហំអេក្រង់ (Desktop / Tablet / Mobile)
- Show / Hide password toggle (custom eye icon)
- Client-side form validation (required field, email format, password length)
- Real-time error clearing ពេល user វាយបញ្ចូលឡើងវិញ
- Loading spinner លើប៊ូតុងពេល submit
- Toast notification (success / error message)
- Remember me checkbox
- Keyboard accessible (Escape បិទ modal, label `sr-only` សម្រាប់ screen reader)
- Facebook-style blue color theme (`#1877F2`)

---

## 🖥️ Demo Preview

| Desktop (Sign in) | Desktop (Sign up) | Mobile |
|---|---|---|
| Sliding blue overlay panel | Toggle animation | Stacked, mobile-friendly layout |

> 💡 បើកឯកសារ `index.html` ដោយ browser ដើម្បីមើល animation ផ្ទាល់

---

## 📁 Project Structure

```
Signin-Signup-System/
├── index.html          → រចនាសម្ព័ន្ធ HTML (Sign in / Sign up form + Forgot password modal)
├── css/
│   └── style.css       → Layout + Animation + Responsive + Error state + Toast + Modal + Spinner
├── js/
│   ├── script.js       → Toggle Sign in ↔ Sign up panel + Forgot-password modal open/close/auto-close
│   ├── validation.js   → Validate form (required / email format / password length) + submit simulation
│   └── ux.js           → Show/hide password, loading spinner (setLoading), toast notification (showToast)
└── README.md
```

### តួនាទីនីមួយៗនៃឯកសារ JS

| ឯកសារ | ភារកិច្ច |
|---|---|
| `script.js` | គ្រប់គ្រង panel toggle (`right-panel-active` class) និង logic បើក/បិទ modal *Forgot password* |
| `validation.js` | Validate គ្រប់ form ទាំង ៣ (Sign in, Sign up, Forgot password) មុននឹង simulate submit ដោយ `setTimeout` |
| `ux.js` | Function ជំនួយទូទៅ៖ `setLoading()`, `showToast()`, និង logic show/hide password |

---

## 🚀 How to Run

1. Clone ឬ download repository នេះ
   ```bash
   git clone <repo-url>
   cd Signin-Signup-System
   ```
2. បើកឯកសារ `index.html` ដោយ browser ណាមួយ (double-click ក៏បាន ឬប្រើ Live Server)
3. ចុចប៊ូតុង **Sign up** / **Sign in** ដើម្បីមើល animation toggle
4. ចុច **"Forgot your password?"** ដើម្បីមើល modal reset password

---

## ⚠️ Note

Frontend demo ប៉ុណ្ណោះ មិនទាន់ភ្ជាប់ backend/API ពិតទេ។ Sign in, Sign up និង Forgot password សុទ្ធតែជា **simulate** ដោយ `setTimeout` (គ្មានទិន្នន័យរក្សាទុកជាក់ស្តែងទេ)។

