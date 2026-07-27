# 🍎 EatBetter
 
An Angular web application for searching and browsing nutritional information about fruit, powered by the [Fruityvice](https://www.fruityvice.com/) public API.
 
## 📋 Description
 
EatBetter lets users search for fruits and view their nutritional information (family, genus, calories, sugar content, etc.), with the ability to filter results by botanical category. The project was built as a hands-on exercise as part of a Full Stack Development study path, focusing on reactive state management, HTTP requests, component architecture, and testing.

[Hero Section]<img width="3170" height="1664" alt="EatBetter 1" src="https://github.com/user-attachments/assets/e78f57b6-dcc6-4013-873d-eb32ceab1d4f" />

[Home Page]<img width="3124" height="1646" alt="EatBetter 2" src="https://github.com/user-attachments/assets/98e52ba3-358c-4f8f-8653-1ea2ae1385f9" />

 
## ✨ Features
 
- Fruit search via integration with the Fruityvice API
- Filtering by botanical category (based on scientific classification)
- Responsive navbar with hamburger menu for mobile devices
- State management using Angular Signals
- Reactive filtering via `BehaviorSubject` (text search and category filter)
## 🛠️ Tech Stack
 
- **Framework**: [Angular](https://angular.dev/) 21.2 (with SSR / prerendering)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: [Vitest](https://vitest.dev/) + `@vitest/coverage-v8`
- **External API**: [Fruityvice API](https://www.fruityvice.com/)
- **Hosting**: [Firebase Hosting](https://firebase.google.com/docs/hosting)
- **CORS Proxy**: [Netlify Functions](https://docs.netlify.com/functions/overview/) (Node.js serverless function)
## 🏗️ Deploy Architecture
 
The Fruityvice API does not send CORS headers, so browser requests made directly from the deployed app are blocked. To solve this without relying on unstable public CORS proxies, EatBetter uses a small serverless function as a dedicated proxy:
 
```
Browser (Angular app on Firebase Hosting)
        │
        ▼
Netlify Function (fruit-proxy)
        │  (server-to-server request, no CORS restriction)
        ▼
Fruityvice API
```
 
- The Angular frontend is built and deployed to **Firebase Hosting**.
- A lightweight **Netlify Function** (`fruit-proxy`) receives requests from the frontend, forwards them to the Fruityvice API server-side, and returns the response with the `Access-Control-Allow-Origin` header added.
- This keeps the project fully on free-tier infrastructure, with no credit card required (unlike Firebase Cloud Functions, which require the paid Blaze plan even for free-tier usage).
## 🚀 Getting Started
 
### Prerequisites
 
- [Node.js](https://nodejs.org/) (version compatible with Angular 21.2)
- [Angular CLI](https://angular.dev/tools/cli)
### Installation
 
```bash
# Clone the repository
git clone https://github.com/gloriamaggioni/EatBetter.git
 
# Move into the project folder
cd EatBetter
 
# Install dependencies
npm install
```
 
### Running locally
 
```bash
ng serve
```
 
The app will be available at `http://localhost:4200/`.
 
### Running tests
 
```bash
ng test --watch=false
```
 
### Running tests with code coverage
 
```bash
ng test --watch=false --code-coverage
```
 
## 🌐 Live Demo
 
[https://eatbetter-49f19.web.app](https://eatbetter-49f19.web.app)
 
## 📄 License
 
© All rights reserved.
 
## 👩‍💻 Author
 
Gloria Maggioni — [GitHub](https://github.com/gloriamaggioni)


