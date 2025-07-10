![Build](https://img.shields.io/badge/build-passing-brightgreen)  
![License](https://img.shields.io/github/license/BarryPiccinni/data-download-button)  
![Tests](https://img.shields.io/badge/tests-100%25-success)

# 📦 Data Download Button Demo

A minimal, accessible demo app built with **Next.js**, featuring a downloadable data button with multiple export options. The component provides options to **print**, **download JSON**, or **view online**, and is built using **Radix UI**, **Tailwind CSS**, and **React**.

## ✨ Features

- ⬇️ Download JSON data via dynamically generated Blob URLs  
- 🖨 Print or save as PDF in a new window  
- 🌐 View online data in a separate tab  
- 🧭 Built using Radix Dropdown Menu for accessible interaction  
- ♿️ Keyboard- and screen reader-friendly  
- 🧪 Fully tested with `jest`, `@testing-library/react`, and `jest-axe`

---

## 🚀 Getting Started

### 1. Clone and install

```bash
git clone https://github.com/your-username/download-button-demo.git
cd download-button-demo
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the demo.

---

## 🧪 Running Tests

### Unit + Accessibility Tests

```bash
npm test
```

### Watch mode

```bash
npm run test:watch
```

### Coverage report

```bash
npm run test:coverage
```

---

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **UI:** [React](https://reactjs.org/), [Radix UI](https://www.radix-ui.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [tailwindcss-animate](https://github.com/joe-bell/tailwindcss-animate)
- **Testing:** `jest`, `@testing-library/react`, `jest-axe`

---

## 📁 Project Structure

```txt
components/
  └── data-download.tsx        # Main download button component

tests/
  └── accessibility/
    └── a11y.test.tsx          # Accessibility tests
  └── components/  
    └── data-download.test.tsx # Unit tests

app/
  └── page.tsx                 # Demo homepage

public/
  └── data.json                # Example JSON data - Your source of truth!
```

---

## 📦 Scripts

| Script                  | Description                   |
|-------------------------|-------------------------------|
| `npm run dev`           | Start local dev server        |
| `npm run build`         | Build for production          |
| `npm run start`         | Start production server       |
| `npm run lint`          | Run ESLint                    |
| `npm test`              | Run test suite                |
| `npm run test:watch`    | Watch files and test          |
| `npm run test:coverage` | Show test coverage            |

---

## 📄 License

MIT — free to use and modify.

---
