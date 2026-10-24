<div align="center">

# Sign In / Sign Up : Modern Auth UI

</div>

## 🛠️ Tech Stack

**ភាសាសរសេរកូដ និង ឧបករណ៍**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)

---

## ✨ Features

- **Sign in / Sign up**: Form ចូលគណនីដោយ Email និង Password និង Form បង្កើតគណនីដោយ Name, Email និង Password មាន **Remember me** សម្រាប់ Sign in
- **Toggle Animation**: ចុចប៊ូតុងដើម្បីប្តូររវាង Sign in និង Sign up ដោយ Panel ពណ៌ខៀវរអិលចុះឡើងរលូន (លើកុំព្យូទ័រ)
- **Form Validation**: ពិនិត្យ Required, ទម្រង់ Email និង Password យ៉ាងតិច ៨ តួអក្សរ មានសារកំហុសក្រហមក្រោម Input ហើយបាត់ភ្លាមពេលចាប់ផ្តើមវាយថ្មី
- **Forgot Password**: ចុច **Forgot your password?** ដើម្បីបើក popup បញ្ចូល Email ហើយចុច **Send reset link** នឹងបង្ហាញអេក្រង់ **Check your email** រួចបិទដោយស្វ័យប្រវត្តិក្រោយ ១០ វិនាទី
- **Show / Hide Password**: ប៊ូតុងរូបភ្នែកបង្ហាញ ឬលាក់ពាក្យសម្ងាត់
- **Loading Spinner**: ប៊ូតុងបង្ហាញ Spinner ពេលកំពុង Submit
- **Toast Notification**: សារជោគជ័យ ដូចជា Signed in successfully និង Account created successfully
- **Social Icons**: រូបតំណាង Facebook, LinkedIn និង X សម្រាប់ជា UI គំរូ
- **Facebook-style Theme**: ពណ៌ខៀវ `#1877F2` ផ្ទៃសស្អាត និង Input មាន Focus Glow ពណ៌ខៀវ
- **Responsive**: ដំណើរការលើ Laptop, Tablet និងទូរស័ព្ទ
- **Accessibility**: Label សម្រាប់ Screen Reader, ARIA Labels, Focus States និងប្រើ Keyboard បាន
- **គ្មាន Backend**: ជា Frontend Demo ប៉ុណ្ណោះ Sign in, Sign up និង Forgot password ជាការក្លែងធ្វើដោយ `setTimeout`

---

## 📁 Project Structure

```
signin-signup-system/
├── css/
│   └── style.css         → ស្តាយទាំងអស់ Responsive, Error State, Toast, Spinner និង Modal
├── js/
│   ├── script.js         → Toggle Sign in ↔ Sign up និងបើក/បិទ Forgot password popup
│   ├── ux.js             → Show/Hide password, Loading spinner និង Toast
│   └── validation.js     → ត្រួតពិនិត្យ Form (Required, Email, Password, Forgot password)
├── index.html
├── LICENSE
└── README.md
```

---

## ⌨️ Keyboard

| គ្រាប់ចុច | មុខងារ |
|---|---|
| `Enter` | Submit Form ដែលកំពុងបំពេញ |
| `Esc` | បិទ Forgot password popup |
| `Tab` / `Shift + Tab` | ផ្លាស់ទីរវាងប៊ូតុង និងប្រអប់បញ្ចូល |

---

## 📱 Mobile Mode

- Panel ពណ៌ខៀវត្រូវបានលាក់ ហើយ Card ស មួយតែប៉ុណ្ណោះបង្ហាញនៅកណ្តាលអេក្រង់
- ប៊ូតុង **Sign in** និង **Sign up** នៅជាប់គ្នាក្នុងជួរតែមួយ ហើយមានប្រយោគណែនាំនៅពីក្រោម
- Popup Forgot password មានទំហំសមរម្យ ប៊ូតុងបិទ **X** ជាការ៉េមូលជ្រុង ងាយចុចដោយមេដៃ

---

## 🚀 How to Run

1. Clone Repository:

   ```bash
   git clone <url-repo> signin-signup-system
   cd signin-signup-system
   ```

   ឬបើ Download ZIP ពី GitHub (Code → Download ZIP) សូម Extract រួចចូល folder ដែលបានមក ដែលជាធម្មតាមានឈ្មោះ `signin-signup-system-main`:

   ```bash
   cd signin-signup-system-main
   ```

2. បើកឯកសារ `index.html` ដោយ Browser ណាមួយ ឬប្រើ **Live Server** ក្នុង VS Code។
3. ចុចប៊ូតុង **Sign up** / **Sign in** ដើម្បីមើល Animation Toggle។
4. ចុច **Forgot your password?** ដើម្បីសាកល្បង Popup Reset Password។

---

## 👤 Author

**Built with ❤️ and code by Mr. Siev E**
