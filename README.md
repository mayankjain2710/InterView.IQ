# Interview.iq 🎯

## AI-Powered Personalized Interview Preparation Platform

Interview.iq is an AI-powered interview preparation platform designed to help students and job seekers practice realistic interviews and improve their interview performance.

Instead of relying on generic question banks, Interview.iq analyzes a candidate's resume and generates practical, role-relevant interview questions based on their actual skills, projects, and experience.

After completing a mock interview, the platform analyzes the candidate's responses and generates a detailed performance report with personalized feedback, strengths, weaknesses, and areas for improvement.

---

## 🚀 The Problem

Interview preparation is often based on static question banks, generic mock interviews, or practicing with friends.

The problem is that these approaches don't necessarily consider the candidate's actual background.

For example, a student may have built projects using React, Node.js, MongoDB, Python, or other technologies, but a generic interview platform may ask the same questions to every candidate.

Students therefore need a way to practice interviews that are:

- Personalized to their resume
- Relevant to their target role
- Interactive rather than static
- Followed by meaningful feedback

## 💡 The Solution

Interview.iq creates a personalized AI-powered interview experience.

The platform analyzes the candidate's resume and uses the extracted context to generate practical interview questions based on their skills, projects, and experience.

The complete workflow is:

```text
Resume Upload
      ↓
Resume Analysis
      ↓
Candidate Context
      ↓
Personalized Questions
      ↓
AI Mock Interview
      ↓
Response Analysis
      ↓
Performance Report
      ↓
Personalized Feedback
      ↓
Practice Again
```

---

# ✨ Key Features

## 📄 Resume-Based Interview Questions

Candidates can upload their resume before starting an interview.

Interview.iq uses information from the resume such as:

- Technical skills
- Projects
- Technologies
- Experience
- Relevant background

to generate practical interview questions.

For example, if a candidate mentions a project using React and Node.js, the interview can ask questions related to how those technologies were actually used in the project rather than asking only generic questions.

---

## 🤖 AI-Powered Mock Interviews

Interview.iq conducts an AI-powered mock interview where candidates answer questions as they would in a real technical interview.

The goal is to provide a more realistic and personalized practice experience than a static question bank.

---

## 🔄 Personalized Interview Flow

The interview uses candidate-specific information to make questions more relevant.

```text
Candidate Resume
       +
Interview Context
       +
Previous Responses
       ↓
Relevant Interview Questions
```

This helps make the interview experience more practical for each individual candidate.

---

## 📊 AI-Generated Interview Report

After completing the mock interview, Interview.iq generates a detailed performance report.

The report provides:

- Overall performance
- Strengths
- Weaknesses
- Areas for improvement
- Response analysis
- Personalized feedback
- Suggestions for better preparation

The objective is not just to give the candidate a score, but to explain how they can improve.

---

# 🧠 AI Workflow

AI is a core component of Interview.iq rather than simply being used as a chatbot.

The AI is used across multiple stages:

```text
              ┌──────────────────┐
              │      Resume      │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │ Resume Analysis  │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │ Question         │
              │ Generation       │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │  Mock Interview  │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │ Response         │
              │ Analysis         │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │ Feedback &       │
              │ Report           │
              └──────────────────┘
```

This creates an improvement loop:

**Practice → Analyze → Get Feedback → Improve → Practice Again**

---

# 💳 Credit-Based Usage

Interview.iq uses a credit-based model for accessing mock interviews.

Users can purchase credits and use those credits to access interview sessions.

This makes the platform closer to a real-world product rather than only a demonstration project.

---

# 💰 Razorpay Payment Integration

Interview.iq integrates the Razorpay payment gateway using **Razorpay Test Mode**.

Users can purchase interview credits through Razorpay Checkout.

The payment flow is:

```text
User
 ↓
Select Credit Plan
 ↓
Razorpay Checkout
 ↓
Test Payment
 ↓
Payment Success
 ↓
Credits Added
 ↓
Start Mock Interview
```

Razorpay Test Mode allows the complete payment workflow to be demonstrated without processing real money.

---

# 🏗️ System Architecture

```text
                         ┌───────────────┐
                         │     User      │
                         └───────┬───────┘
                                 │
                                 ▼
                       ┌──────────────────┐
                       │ Frontend         │
                       │ Interview.iq     │
                       └────────┬─────────┘
                                │
                                ▼
                       ┌──────────────────┐
                       │ Backend / APIs   │
                       └────────┬─────────┘
                                │
              ┌─────────────────┼─────────────────┐
              │                 │                 │
              ▼                 ▼                 ▼
        ┌───────────┐    ┌─────────────┐   ┌────────────┐
        │ Database  │    │ AI Services │   │  Razorpay  │
        └───────────┘    └──────┬──────┘   └────────────┘
                                │
                    ┌───────────┴───────────┐
                    │                       │
                    ▼                       ▼
              Question                  Response
              Generation                Analysis
                    │                       │
                    └───────────┬───────────┘
                                ▼
                       ┌──────────────────┐
                       │ Interview Report │
                       │ & Feedback       │
                       └──────────────────┘
```

---

# 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- HTML5
- CSS / Tailwind CSS

### Backend

- Node.js
- Express.js

### Database

- MongoDB

### AI

- Large Language Model API
- Resume Analysis
- Question Generation
- Response Analysis
- Feedback Generation

### Payments

- Razorpay Test Mode

### Tools

- Git
- GitHub
- Postman
- VS Code

---

# 🎯 Example

Suppose a candidate's resume contains:

```text
Project: Smart Traffic Management System

Technologies:
React
FastAPI
Python
YOLOv5
```

Instead of asking only a generic question such as:

> What is React?

Interview.iq can generate a practical question related to the candidate's actual project, such as:

> Why did you choose YOLOv5 for vehicle detection in your project?

The objective is to make the interview relevant to the candidate's real experience.

---

# 🔐 Product Flow

```text
                 ┌─────────────┐
                 │    User     │
                 └──────┬──────┘
                        │
                        ▼
                 ┌─────────────┐
                 │ Buy Credits │
                 └──────┬──────┘
                        │
                        ▼
                 ┌─────────────┐
                 │  Razorpay   │
                 │  Checkout   │
                 └──────┬──────┘
                        │
                        ▼
                 ┌─────────────┐
                 │   Credits   │
                 └──────┬──────┘
                        │
                        ▼
                 ┌─────────────┐
                 │ Upload      │
                 │ Resume      │
                 └──────┬──────┘
                        │
                        ▼
                 ┌─────────────┐
                 │ AI Interview│
                 └──────┬──────┘
                        │
                        ▼
                 ┌─────────────┐
                 │ AI Analysis │
                 └──────┬──────┘
                        │
                        ▼
                 ┌─────────────┐
                 │ Report &    │
                 │ Feedback    │
                 └─────────────┘
```

---

# 🌟 What Makes Interview.iq Different?

Traditional interview preparation:

```text
Static Question Bank
        ↓
Generic Questions
        ↓
Practice
```

Interview.iq:

```text
Candidate Resume
        ↓
Candidate Context
        ↓
Personalized Questions
        ↓
AI Mock Interview
        ↓
Response Analysis
        ↓
Personalized Feedback
        ↓
Improvement
```

Interview.iq focuses on **personalized interview practice and actionable feedback**, rather than simply providing more questions.

---

# 👥 Target Users

Interview.iq is designed primarily for:

- College students
- Fresh graduates
- Internship applicants
- Placement candidates
- Developers preparing for technical interviews
- Students looking for realistic interview practice

---

# 🏆 Razorpay AI Buildathon

Interview.iq was developed as a project for the **Razorpay AI Buildathon**.

The project combines:

- AI-powered interview preparation
- Resume-based personalization
- AI-generated interview questions
- Automated response analysis
- Personalized feedback
- Credit-based product usage
- Razorpay payment integration

The Razorpay integration demonstrates a complete product workflow from purchasing credits to accessing the interview platform.

---

# 📸 Screenshots

Add screenshots of the application here.

### Dashboard

![Dashboard](./screenshots/dashboard.png)

### Resume Upload

![Resume Upload](./screenshots/resume-upload.png)

### AI Interview

![AI Interview](./screenshots/interview.png)

### Interview Report

![Interview Report](./screenshots/report.png)

### Razorpay Payment

![Razorpay Payment](./screenshots/razorpay.png)

---

# 🎥 Demo

### Live Demo

ADD_YOUR_LIVE_DEMO_LINK_HERE

### 5-Minute Pitch

ADD_YOUR_VIDEO_LINK_HERE

---

# ⚙️ Getting Started

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- MongoDB
- Git

## Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd interview.iq
```

## Install Dependencies

```bash
npm install
```

## Environment Variables

Create a `.env` file and add the required environment variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string

AI_API_KEY=your_ai_api_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Never commit your actual API keys or `.env` file to GitHub.

## Run the Application

```bash
npm run dev
```

---

# 🔮 Future Improvements

Planned improvements include:

- 🎙️ Voice-based interview conversations
- 📹 Video interview simulation
- 🧑‍💼 Company-specific interview modes
- 📈 Progress tracking across interviews
- 📊 Historical performance analytics
- 🎯 Adaptive interview difficulty
- 📚 Personalized preparation plans
- 🗣️ Communication and speaking analysis
- 🌐 Multi-language interview support

---

# 👨‍💻 Author

**Mayank Jain**

B.Tech Computer Science & Engineering

Interested in Full-Stack Development, AI, and building practical software products.

---

# ⭐ Support

If you find Interview.iq useful, consider giving the repository a ⭐.

Feedback and suggestions are welcome!

---

## 📄 License

This project is licensed under the MIT License.
