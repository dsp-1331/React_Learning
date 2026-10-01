# React Learning Project 🚀

Welcome to the **React Learning Project** repository! This project serves as a practical codebase demonstrating the fundamental architectural blocks of React development. It has been updated to include complete assignments covering the shift from legacy structures to modern, hook-based functional design.

---

## 📚 Key Concepts Covered

### 1. Class Components (Legacy)
* **Structure:** Explores traditional ES6 class components extending `React.Component`.
* **State Management:** Uses local `this.state` objects and `this.setState()` triggers.
* **Binding:** Explicit handling of `this` contexts within event handlers.

### 2. Functional Components (Modern Standard)
* **Structure:** Clean, concise JavaScript functions returning JSX elements.
* **Readability:** Simplifies application logic by stripping away boilerplate class wrappers.

### 3. React Hooks (State & Side Effects)
* **`useState`:** Manages local reactive state seamlessly within functional architectures without using classes.
* **`useEffect`:** Handles operations outside the core UI lifecycle (e.g., API requests, event listeners, document adjustments) by unifying traditional lifecycle stages like mounting, updating, and unmounting.

---

## 🛠️ Project Structure & Architecture

A quick look at the core structure of this assignment:

```bash
src/
├── components/
│   ├── ClassCounter.jsx        # Implementation using legacy class architecture
│   ├── FunctionalCounter.jsx   # Implementation using modern functional architecture
│   └── DataFetcher.jsx         # Implementation leveraging useState and useEffect Hooks
├── App.jsx                     # Component staging area
└── main.jsx                    # Application mounting file
```

---

## ⚡ Getting Started Locally

Follow these quick commands to spin up the local development environment:

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your local machine.

### Installation & Launch

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/react-learning.git
   cd react-learning
   ```

2. **Install application dependencies:**
   ```bash
   npm install
   ```

3. **Spin up the local development server:**
   ```bash
   npm run dev
   ```
