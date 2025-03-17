# Lucky Shrub - React Website

A modern, responsive website for Lucky Shrub, a garden design firm and plant nursery specializing in indoor and outdoor plants.

## 📋 Overview

Lucky Shrub's website is built with the following technologies:

- React 19
- TypeScript
- Vite
- TailwindCSS
- React Router DOM

## 🚀 Features

- Responsive design that works on mobile, tablet, and desktop
- Multiple content pages: Home, About, Products, and Contact
- Modern UI with accessible components
- Fast page transitions with React Router

## 🧰 Prerequisites

- Node.js 18 or higher
- pnpm 9.15.4 or higher

## 💻 Installation

1. Clone the repository:

   ```bash
   git clone [repository-url]
   cd lucky-shrub-react
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## 📦 Build for Production

```bash
pnpm build
```

The built files will be in the `dist` directory.

## 🧪 Running Tests

```bash
pnpm lint
```

## 🛠️ Development Tools

- ESLint for code linting
- Prettier for code formatting
- Husky for git hooks
- Commitlint for conventional commits
- TypeScript for type checking

## 📁 Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Application pages
│   │   ├── Home.tsx    # Homepage
│   │   ├── About.tsx   # About page
│   │   ├── Products.tsx # Products page
│   │   └── Contact.tsx # Contact page
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Entry point
├── index.html          # HTML template
├── tailwind.config.js  # TailwindCSS configuration
└── vite.config.ts      # Vite configuration
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👥 Authors

- [@Bryan-an](https://github.com/Bryan-an)

## 🙏 Acknowledgements

- Meta Frontend Developer Professional Certificate Program
