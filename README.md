# Travel & Tour Landing Page - React Frontend Project

Backroads App is a modern, responsive travel and tour booking landing page application built with React. Designed as both a learning resource and a practical project, it provides users with an engaging interface to discover, explore, and book a variety of travel packages. The repository includes two versions:

- **backroads-js-version**: A static site using HTML, CSS, and JavaScript.
- **backroads-react-version**: A dynamic single-page React application.

- **Live-Demo:** [https://backroads-arnob.netlify.app/](https://backroads-arnob.netlify.app/)

<img width="1150" alt="Screenshot 2025-02-08 at 23 51 28" src="https://github.com/user-attachments/assets/d1aaa78e-e93c-4708-bf61-26b57b276686" /> <img width="1150" alt="Screenshot 2025-02-08 at 23 51 48" src="https://github.com/user-attachments/assets/bb6af9af-7deb-479f-9e7a-1df1a6a985e2" /> <img width="1150" alt="Screenshot 2025-02-08 at 23 52 02" src="https://github.com/user-attachments/assets/a0edbced-62da-4570-b90c-3eb842878012" /> <img width="1150" alt="Screenshot 2025-02-08 at 23 52 19" src="https://github.com/user-attachments/assets/94b117d1-cf8b-4c80-b33d-05b9d74f725a" /> <img width="1150" alt="Screenshot 2025-02-08 at 23 52 34" src="https://github.com/user-attachments/assets/0a21250d-ee71-49bf-98ad-5e7dd63a256c" />

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Screenshots](#screenshots)
4. [Project Structure](#project-structure)
5. [Technology Stack](#technology-stack)
6. [Setup & Installation](#setup--installation)
7. [Walkthrough & Functionality](#walkthrough--functionality)
8. [Component Breakdown](#component-breakdown)
9. [API & Data](#api--data)
10. [Deployment & Continuous Integration](#deployment--continuous-integration)
11. [Learning Outcomes & Keywords](#learning-outcomes--keywords)
12. [Examples & Code Snippets](#examples--code-snippets)
13. [Conclusion](#conclusion)

---

## Project Overview

Backroads App serves as a beginner-to-intermediate React project that simulates a real-world business landing page. Its main goal is to teach best practices in React, component structure, props, state, and modular CSS. The app is ideal for anyone learning React, looking to upskill with a practical project, or needing a template for a travel/tourism business.

---

## Features

- Browse and book travel packages
- Responsive design (mobile, tablet, desktop)
- Modular React component structure
- User authentication & profile management (future extension)
- Integration point for booking/payment APIs (mocked)
- Smooth scrolling and interactive UI
- Social media integration
- Deployed with Netlify for live preview

---

## Project Structure

```
Backroads--React-Landing-Page/
│
├── README.md
├── package.json
├── package-lock.json
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   ├── data.js
│   └── components/
│       ├── Navbar.js
│       ├── Hero.js
│       ├── About.js
│       ├── Services.js
│       ├── Service.js
│       ├── Tours.js
│       ├── Tour.js
│       ├── Footer.js
│       ├── Title.js
│       ├── PageLinks.js
│       └── SocialLink.js
└── backroads-html/
    ├── index.html
    └── js/
        └── app.js
```

---

## Technology Stack

- **ReactJS** (Functional Components, Hooks)
- **HTML5, CSS3** (Modular, Responsive Design)
- **JavaScript (ES6+)**
- **FontAwesome** (for icons)
- **Netlify** (Deployment)
- **Create React App** (Scaffolding)
- **Optional Learning:** Vanilla JS version in `/backroads-html`

---

## Setup & Installation

### React Version

1. **Clone the repository:**

   ```sh
   git clone https://github.com/arnobt78/Backroads--React-Landing-Page.git
   cd Backroads--React-Landing-Page
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm start
   ```

   The app will run at [http://localhost:3000](http://localhost:3000).

---

### Vanilla JS Version

1. Navigate to the `backroads-html` folder.
2. Open the `index.html` file in your browser:

   ```sh
   open index.html
   ```

   or just double-click the file.

---

## Walkthrough & Functionality

The app is organized into clear React components that represent different sections of the landing page:

- **Navbar**: Sticky navigation with smooth scroll links.
- **Hero**: Eye-catching introduction with a call to action.
- **About**: Information about the company/brand.
- **Services**: List of travel-related services using icons and text.
- **Tours**: Dynamic display of travel packages with images, price, location, and duration.
- **Footer**: Social media links and copyright.

Each component is designed for reusability and clarity. Data for the tours, services, and links is stored in `src/data.js`, making it easy to update or extend the site.

---

## Component Breakdown

### `App.js`

The root component, imports and renders all major page sections:

```javascript
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}
export default App;
```

---

### `Hero.js`

```javascript
const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-banner">
      <h1>backroads app</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo
        debitis est autem dicta.
      </p>
      <a href="#tours" className="btn hero-btn">
        explore tours
      </a>
    </div>
  </section>
);
export default Hero;
```

---

### `About.js`

Displays company info and an image.

```javascript
const About = () => (
  <section className="section" id="about">
    <Title title="about" subTitle="us" />
    <div className="section-center about-center">
      <div className="about-img">
        <img src={aboutImg} className="about-photo" alt="awesome beach" />
      </div>
      <article className="about-info">
        <h3>explore the difference</h3>
        <p>...</p>
        <a href="#" className="btn">
          read more
        </a>
      </article>
    </div>
  </section>
);
export default About;
```

---

### `Services.js` & `Service.js`

Renders a grid of services using icon, title, description.

`Services.js`:

```javascript
import { services } from "../data";
import Service from "./Service";
const Services = () => (
  <section className="section services" id="services">
    <Title title="our" subTitle="services" />
    <div className="section-center services-center">
      {services.map((service) => (
        <Service {...service} key={service.id} />
      ))}
    </div>
  </section>
);
export default Services;
```

`Service.js`:

```javascript
const Service = ({ icon, title, text }) => (
  <article className="service">
    <span className="service-icon">
      <i className={icon}></i>
    </span>
    <div className="service-info">
      <h4 className="service-title">{title}</h4>
      <p className="service-text">{text}</p>
    </div>
  </article>
);
```

---

### `Tours.js` & `Tour.js`

Displays featured tour cards from the `tours` array in `data.js`.

`Tours.js`:

```javascript
import { tours } from "../data";
import Tour from "./Tour";
const Tours = () => (
  <section className="section" id="tours">
    <Title title="featured" subTitle="tours" />
    <div className="section-center featured-center">
      {tours.map((tour) => (
        <Tour {...tour} key={tour.id} />
      ))}
    </div>
  </section>
);
export default Tours;
```

`Tour.js`:

```javascript
const Tour = ({ image, date, title, info, location, duration, cost }) => (
  <article className="tour-card">
    <div className="tour-img-container">
      <img src={image} className="tour-img" alt={title} />
      <p className="tour-date">{date}</p>
    </div>
    <div className="tour-info">
      <div className="tour-title">
        <h4>{title}</h4>
      </div>
      <p>{info}</p>
      <div className="tour-footer">
        <p>
          <span>
            <i className="fas fa-map"></i>
          </span>
          {location}
        </p>
        <p>from ${cost}</p>
        <p>{duration} days</p>
      </div>
    </div>
  </article>
);
```

---

### `Footer.js`

## Links to pages and social media, displays copyright

### `data.js`

Centralized data for navigation, services, tours, and social links.

```javascript
export const pageLinks = [ ... ];
export const socialLinks = [ ... ];
export const services = [ ... ];
export const tours = [ ... ];
```

---

## API & Data

- No backend API by default; all data is locally mock-defined in `src/data.js`.
- Easily extendible to connect with real booking/payment APIs.

---

## Deployment & Continuous Integration

- **Deploy to Netlify:** Connect your GitHub repo and follow Netlify’s workflow.
- **Git Commands:**
  - Remove existing git repo (if needed): `rm -rf .git`
  - Initialize repo: `git init`
  - Add files: `git add .`
  - Commit: `git commit -m "first commit"`
  - Add remote: `git remote add origin <YOUR_REPO_URL>`
  - Push: `git push -u origin main`
- **Note:** Netlify treats warnings as errors. Fix all build warnings for a successful deployment.

---

## Learning Outcomes & Keywords

- **React Components** (functional)
- **Props & State** (data-driven UI)
- **CSS Grid/Flexbox** (responsive design)
- **Component Reusability**
- **Single Page Application (SPA)**
- **FontAwesome Icons**
- **Deployment (Netlify)**
- **HTML/CSS/JS Fundamentals**
- **Project Structure & Clean Code**

---

## Examples & Code Snippets

**Service Card Example:**

```javascript
<Service
  icon="fas fa-wallet fa-fw"
  title="saving money"
  text="Save more on every tour!"
/>
```

**Tour Card Example:**

```javascript
<Tour
  image={tour1}
  date="august 26th, 2025"
  title="Tibet Adventure"
  info="Experience the beauty of Tibet with us!"
  location="china"
  duration={6}
  cost={2100}
/>
```

**Navigation Links from `data.js`:**

````javascript
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours"
**Service Card Example:**

```javascript
<Service icon="fas fa-wallet fa-fw" title="saving money" text="Save more on every tour!" />
````

**Tour Card Example:**

```javascript
<Tour
  image={tour1}
  date="august 26th, 2025"
  title="Tibet Adventure"
  info="Experience the beauty of Tibet with us!"
  location="china"
  duration={6}
  cost={2100}
/>
```

**Navigation Links from `data.js`:**

```javascript
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];
```

---

## Conclusion

Backroads App is a practical, visually appealing React project that demonstrates best practices in front-end development. Use it as a template, a learning resource, or a starting point for your travel/tourism web projects. The modular structure, clean code, and easy customization make it suitable for beginners and intermediate learners alike. Contributions and suggestions are welcome!

---
