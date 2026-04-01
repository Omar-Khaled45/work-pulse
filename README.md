# 🚀 WorkPulse – Project & Task Management SaaS (In Progress)

A workspace-based Project & Task Management SaaS application built for small teams, focusing on secure architecture, role-based access control, and real-world collaboration workflows.

> ⚠️ This project is currently under active development.

---

## 🧩 Overview

WorkPulse is a workspace-based project management platform that enables teams to:

- Create and manage projects 
- Assign and track tasks  
- Automatically calculate project progress  
- Collaborate through structured task comments  
- Monitor activity logs for transparency  
- View dynamic project-level analytics dashboards  

The system uses **Supabase Authentication** and **Row-Level Security (RLS)** to enforce secure data isolation between workspaces and implement fine-grained permission logic.

---

## 🔐 Authentication & Authorization

- Supabase Authentication  
- Role-based access control (Admin / Member)  
- Protected routes at the frontend level  
- Database-level enforcement using RLS policies  
- Fine-grained permission handling for workspace operations  

This ensures users can only access and modify data within their authorized workspace.

---

## 📊 Core Features

### ✅ Workspace & Project Management
- Create and manage workspaces  
- Create projects within a workspace  
- View project-specific dashboards  

### ✅ Task Management
- Create, edit, delete tasks  
- Assign tasks to workspace members  
- Status tracking  
- Automated progress calculation based on task completion  
- Personalized “My Tasks” view  

### ✅ Collaboration
- Structured task-level comments  
- Activity logs for auditing and tracking  
- Real-time updates via Supabase  

### ✅ Analytics & Dashboards
- Project-level analytics views  
- Dynamic progress metrics  
- Derived state calculations for performance insights  

---

## 🏗 Architecture & Design Principles

- Scalable folder structure  
- Reusable UI components  
- Responsive design  
- Modular service layer  
- Separation of concerns  
- Fine-grained permission logic at both frontend and backend levels  

---

## 🛠 Tech Stack

### Frontend
- React  
- React Router  
- Tanstack Query  
- Tailwind CSS
- ShadCN 

### Backend / Infrastructure
- Supabase  
  - Authentication  
  - PostgreSQL  
  - Row-Level Security (RLS)  
  - Realtime subscriptions  

---

## 📁 Project Structure (High-Level)

```plaintext
src/
 ├── components/
 ├── features/
 ├── hooks/
 ├── layout/
 ├── pages/
 ├── services/
 └── utils/
```

The architecture emphasizes scalability, maintainability, and real-world SaaS patterns.

---

## 🚧 Current Status

The project is actively evolving.

### In Progress
- Advanced filtering & sorting  
- Enhanced analytics  
- Notification system  
- Performance improvements  
- Additional permission edge-case handling  

---

---

## 🧠 Engineering Focus

This project focuses on:

- Designing secure SaaS-style architectures  
- Structuring scalable React applications  
- Building real-world permission systems  
- Managing derived state for dashboards and analytics  

---

## 📬 Feedback

This project is under active development.  
Suggestions and code reviews are welcome.
