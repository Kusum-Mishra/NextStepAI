# 🎓 Next Step AI – Your Personalized AI Career Coach

**Next Step AI** is an intelligent, AI-powered career coach designed to guide students and professionals in making data-driven career decisions. From industry insights to resume building, cover letters, and interview preparation, our tool offers a complete suite to help you advance confidently in your career.

---

## 🌟 Features

### 🏠 Landing Page
- A modern, informative homepage showcasing key features and FAQs.

### 🔐 User Authentication
- Secure sign-up and sign-in flows powered by **Clerk**.

### 📊 Industry Insights
- Users fill out an onboarding form specifying:
  - Industry and specialization
  - Experience level
  - Skills and personal bio
- AI-generated insights include:
  - Market trends and salary benchmarks
  - In-demand skills and roles
  - Personalized career suggestions  
  *(All powered by the Google Gemini API)*

### 📄 Resume Builder
- Input contact info, summary, skills, experience, education, and projects
- View live **Markdown preview**
- Download your resume as a **PDF**

### ✉️ Cover Letter Generator
- Enter job description and role details
- AI crafts a tailored cover letter using Gemini API

### 🧠 Interview Preparation
- Mock quizzes based on your skills
- Receive a **score**, plus AI-driven improvement tips

### 📈 Performance Dashboard *(New!)*
- Track quiz history and trends over time
- Gain analytics insights (e.g., score progression, skill gaps)

### 🔔 Weekly Industry Updates *(Inspired by original tutorial)*
- Scheduled AI-generated summaries sent weekly via background jobs
- Stay up-to-date on evolving trends in your field

---

## 🧪 Tech Stack

| Technology               | Purpose                                                     |
|--------------------------|-------------------------------------------------------------|
| Next.js & React          | Core frontend and server-side rendering                     |
| Tailwind CSS + Shadcn UI | Stylish, accessible UI components                           |
| Clerk                    | User authentication                                         |
| Inngest                  | Background job workflows (e.g., weekly updates)             |
| Google Gemini API        | AI-powered insights, resumes, interviews, and cover letters |
| Neon (Postgres) + Prisma | Cloud database and ORM                                      |
| MDEditor                 | Markdown editor for resume builder                          |
| Recharts *(optional)*    | Data visualization for performance dashboard                |

---

## 🌐 Live Demo

🔗 [Insert Live URL Here]  
No installation needed — just visit and start!

---

## 🔗 API Integration: Google Gemini

- Powers **Industry Insights**, **Cover Letter**, and **Interview Quiz**
- Analyzes user input and context to deliver personalized responses

---

## 💡 Development Challenges

- Building adaptive multi-step forms for onboarding and quizzes
- Seamlessly integrating AI-generated content with user data
- Ensuring resume builder supports Markdown preview + PDF export
- Designing a performance dashboard with clear metrics
- Scheduling and sending automated updates using Inngest

---

## 🚀 Future Roadmap

- **LinkedIn/job board integrations**: sync resumes, track applications
- **Mock video interviews** with AI feedback
- **User preferences & resume versioning**
- Deploy **email linking** to share resumes and cover letters directly

---

## 🛠️ Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/next-step-ai.git
   cd next-step-ai
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add `.env` file with:
   ```
   DATABASE_URL=...
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
   CLERK_SECRET_KEY=...
   GEMINI_API_KEY=...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
   ```
4. Run locally:
   ```bash
   npm run dev
   ```
5. To enable weekly updates:
   ```bash
   npm run inngest:dev
   ```
6. Navigate to `http://localhost:3000`

---

## 🧩 Contributing

Contributions are welcome! To contribute:

1. Fork it 👯
2. Create your feature branch: `git checkout -b feature/awesome`
3. Commit your changes: `git commit -m 'Awesome feature'`
4. Push: `git push origin feature/awesome`
5. Submit a pull request 🚀

---

## 👤 Author

**[Kusum Mishra]**  
🔗 [LinkedIn Profile]  
📧 kusummishra5678@gmail.com

---
