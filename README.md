# 🚀 PORTFOLIO BOILERPLATE

### A Modern, Minimal Developer Portfolio Built with Next.js & Strapi (Powered by Turborepo)  

🔹 **Easily customizable**  
🔹 **Supports Strapi CMS**  
🔹 **Deploy with Vercel in one click**  

👉 **[Live Demo](https://anoopkarnik.net)**  

> **⭐ If you find this project useful, consider giving it a star to support development!**  

---

## 📌 Overview

Every developer needs a portfolio. With the rise of **freelancing, consulting, and solopreneurship**, a strong online presence is essential.  

This is a **minimal, modern, and highly customizable** portfolio template built using the **Turborepo framework** with **Next.js** and **Strapi CMS**.  

You can easily modify the content directly in the **code** or use **Strapi's admin panel** for a no-code experience.

---

## 🚀 Getting Started

### 1️⃣ **Clone & Install**
Clone the repo and install dependencies:

```sh
npx portfolio-boilerplate@latest
cd portfolio
npm install
```

### 2️⃣ Run Locally
Start the Next.js app on localhost:3000 and Strapi CMS on localhost:1337:

```sh
# Start Next.js app
npm run dev

# Start Strapi CMS (In a separate terminal)
cd apps/strapi-cms
npm run dev #Admin Username - guest@bayesian-labs.com #Admin Password - Password1
```

## 🛠 Modifying Your Portfolio


### Option 1: Edit Directly in Code

Modify profile sections inside:

📂 apps/nextjs-app/lib/constants/

### Option 2: Use Strapi CMS (No-Code Editing)

1) Open Strapi at localhost:1337
2) Navigate to Content Manager (Sidebar → "Single Types").
3) Click on "portfolio-boilerplate" to edit your profile details.
4) Save & Publish to see changes reflected instantly!


## 🚀 Deploy Your Portfolio

### 1️⃣ Deploy to Vercel (1-Click)
Deploy your portfolio in seconds using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fanoopkarnik%2Fportfolio-boilerplate&build-command=cd%20apps%2Fnextjs-app%20%26%26%20npm%20run%20build&output-directory=apps%2Fnextjs-app%2F.next&install-command=npm%20install&dev-command=cd%20apps%2Fnextjs-app%20%26%26%20npm%20run%20dev
)

### 2️⃣ Deploy on Your Own Server
If you're self-hosting:

1) Deploy Next.js app via Vercel, Netlify, or any Node.js server
2) Deploy Strapi CMS on a VPS, DigitalOcean, Railway, Heroku or Coolify

## 🤝 Contributing

We welcome contributions! To contribute:

1) Fork the repo & create a new branch
2) Make your changes and follow the coding guidelines
3) Submit a Pull Request (PR)

📖 Check out the contribution guide:

[CONTRIBUTING](/docs/CONTRIBUTING.md) 

[CODE_OF_CONDUCT](/docs/CODE_OF_CONDUCT.md)

[PULL_REQUEST](/docs/pull_request_template.md)

Report Issues & Feature Requests:

🐞 Found a bug? Use [BUG_REPORT](/docs/ISSUE_TEMPLATE/bug_report.md)
💡 Have an idea? Submit a [FEATURE_REQUEST](/docs/ISSUE_TEMPLATE/feature_request.md)


## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

