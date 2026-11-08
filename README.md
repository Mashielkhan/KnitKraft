# KnitKraft — Wool Supply Chain Management & Digital Marketplace

### Connecting Farmers, Suppliers, Service Providers, and Buyers Through One Digital Platform

**KnitKraft** is a full-stack, multilingual web application designed to digitize and streamline the wool industry by connecting farmers, buyers, sellers, transportation providers, warehouse operators, quality inspectors, and service providers.

The platform brings together **wool production tracking, marketplace operations, quality assurance, logistics management, service discovery, and educational resources** within a centralized digital ecosystem.

Built using **Node.js, Express.js, MongoDB, EJS, Bootstrap, and JavaScript**, KnitKraft demonstrates how modern web technologies can improve coordination, transparency, and accessibility across agricultural and textile supply chains.

**Repository:** [github.com/Mashielkhan/KnitKraft](https://github.com/Mashielkhan/KnitKraft)

---

## Project Overview

The wool industry involves multiple interconnected stages, beginning with livestock farming and continuing through shearing, sorting, grading, processing, transportation, storage, trading, and fabric production.

Traditional wool supply chains often face challenges involving fragmented communication, limited pricing transparency, inefficient logistics, inconsistent quality assessment, and restricted access to buyers and essential services.

KnitKraft addresses these challenges by providing a unified digital platform where stakeholders can manage activities throughout the wool production and distribution lifecycle.

The application uses role-based interfaces to provide different functionality to farmers, service providers, buyers, sellers, educators, transportation partners, warehouse operators, and quality inspectors.

Its goal is to improve supply-chain visibility, simplify wool trading, and support greater participation in the textile economy.

---

## Key Features

### 1. Role-Based User Management

KnitKraft provides dedicated interfaces for different participants in the wool industry.

Supported roles include:

- Farmers and shepherds.
- Wool buyers and sellers.
- Processing and service providers.
- Transportation partners.
- Warehouse operators.
- Educators and trainers.
- Quality inspectors.

Role-based access supports personalized workflows according to each participant's responsibilities.

### 2. Wool Production Tracking

Track wool movement and production activities from farm operations through processing and distribution.

The workflow covers activities such as:

- Livestock raising.
- Shearing.
- Skirting and sorting.
- Cleaning.
- Carding and combing.
- Dyeing.
- Weaving.
- Finishing.
- Shipping and distribution.

This provides a structured representation of the wool production lifecycle.

### 3. Digital Wool Marketplace

KnitKraft includes a marketplace-oriented environment for wool producers and buyers.

Core capabilities include:

- Wool product listings.
- Buyer and seller interaction.
- Product discovery.
- Order-related interfaces.
- Buying and selling workflows.
- Negotiation support.

The marketplace aims to reduce barriers between producers and customers.

### 4. Transportation and Logistics Management

Transportation workflows help coordinate movement of wool between farms, processing locations, warehouses, and buyers.

The application includes dedicated transportation-related interfaces and data models.

### 5. Warehouse and Inventory Services

The warehouse module supports interactions involving wool storage and warehousing.

It provides a foundation for coordinating storage services and managing related requests.

### 6. Quality Assurance and Grading

KnitKraft incorporates wool grading and quality-related service interfaces.

These features are intended to help producers better understand wool quality and connect with relevant assessment services.

### 7. Wool-Related Service Discovery

The platform organizes industry services into dedicated categories.

Examples include:

- Shearing services.
- Sorting services.
- Veterinary assistance.
- Wool grading.
- Warehouse services.
- Transportation services.
- Farm equipment suppliers.
- Fodder and nutrition services.
- Insurance-related services.
- Livestock breeding services.
- Financial assistance requests.

### 8. Education and Training

KnitKraft includes learning-oriented pages designed to support farmers and other industry participants.

Educational resources can help users understand improved production methods, industry practices, and opportunities for skill development.

### 9. Multilingual User Experience

The project includes English and Hindi language resources.

The multilingual approach is intended to improve accessibility for users with different language preferences.

### 10. Market Statistics and Insights

The application includes a statistics interface for presenting wool-related information.

Market information and statistical features can support more informed business decisions, depending on the data available through the application.

---

## Technology Stack

| Layer          | Technology                                  | Purpose                           |
| -------------- | ------------------------------------------- | --------------------------------- |
| Frontend       | HTML5, CSS3, JavaScript                     | User interface                    |
| Templating     | EJS                                         | Server-rendered pages             |
| Styling        | Bootstrap, Sass                             | Responsive interface design       |
| Backend        | Node.js                                     | Server-side runtime               |
| Web Framework  | Express.js                                  | Routing and application logic     |
| Database       | MongoDB                                     | Application data storage          |
| Authentication | JWT-based middleware                        | Authentication and access control |
| Maps           | Mapbox                                      | Map-related interface integration |
| Localization   | JSON language resources                     | English and Hindi support         |
| Deployment     | Render-compatible Node.js app               | Application hosting               |
| UI Assets      | Bootstrap, Font Awesome, JavaScript plugins | Interface components              |

---

## System Architecture

```text
                      USERS
                        |
                        v
             +---------------------+
             |   KNITKRAFT WEB APP |
             |   EJS + Bootstrap   |
             |   JavaScript + CSS  |
             +----------+----------+
                        |
                        v
             +---------------------+
             |   EXPRESS.JS SERVER |
             |       Node.js       |
             +----------+----------+
                        |
           +------------+------------+
           |                         |
           v                         v
 +--------------------+   +--------------------+
 | AUTHENTICATION     |   | APPLICATION ROUTES |
 | JWT Middleware     |   | Users / Services   |
 | Registration       |   | Marketplace        |
 | Role Verification  |   | Logistics          |
 +--------------------+   +---------+----------+
                                    |
                                    v
                          +--------------------+
                          |      MODELS        |
                          | Users / Meetings   |
                          | Services / Transport|
                          | Warehouses         |
                          +---------+----------+
                                    |
                                    v
                          +--------------------+
                          |      MONGODB       |
                          |   Data Persistence |
                          +--------------------+
```

The architecture separates presentation, routing, business logic, authentication, and database operations into distinct components.

---

## Application Modules

### Farmer Management

Provides farmers with interfaces for accessing wool-related services, exploring market opportunities, and monitoring production-related activities.

### Marketplace

Enables users to interact with wool product listings and buying workflows.

### Services

Organizes services required throughout the wool industry, including processing, livestock care, logistics, and quality assessment.

### Warehouse Management

Supports warehouse-related data handling and user interactions.

### Transportation Management

Provides transportation-specific interfaces for coordinating wool movement.

### Learning Platform

Includes learning resources and session-related interfaces.

### Statistics

Provides a dedicated area for visualizing wool-related data and industry information.

---

## Project Structure

```text
KnitKraft/
|
+-- app.js
+-- bin/
|   +-- www
|
+-- routes/
|   +-- index.js
|   +-- users.js
|   +-- api.js
|
+-- models/
|   +-- Meeting.js
|   +-- Service.js
|   +-- Transport.js
|   +-- Warehouse.js
|   +-- userregister.js
|
+-- src/
|   +-- controllers/
|   |   +-- auth.controller.js
|   |   +-- user.controller.js
|   |
|   +-- middleware/
|   |   +-- authJwt.js
|   |   +-- verifySignUp.js
|   |   +-- index.js
|   |
|   +-- db/
|       +-- db.js
|
+-- views/
|   +-- farmer/
|   +-- seller/
|   +-- service/
|   +-- transport/
|   +-- warehouse/
|   +-- teacher/
|   +-- Learning/
|   +-- Woolkart/
|   +-- Services/
|   +-- Statistics/
|   +-- Pages/
|   +-- input/
|   +-- table/
|   +-- partials/
|
+-- lang/
|   +-- eng.json
|   +-- hin.json
|
+-- public/
|   +-- assets/
|       +-- css/
|       +-- js/
|       +-- sass/
|       +-- img/
|
+-- screenshots/
|   +-- download.gif
|   +-- finalppt.png
|   +-- logo.png
|
+-- package.json
+-- package-lock.json
+-- .gitignore
+-- LICENSE
+-- README.md
```

---

## Installation and Setup

### Prerequisites

Before running KnitKraft, ensure that the following are available:

- Node.js and npm.
- Git.
- MongoDB database access.
- Required environment variables.
- A valid Mapbox public access token for map-related functionality.

### Step 1 — Clone the Repository

```bash
git clone https://github.com/Mashielkhan/KnitKraft.git
cd KnitKraft
```

### Step 2 — Install Dependencies

```bash
npm install
```

### Step 3 — Configure Environment Variables

Create a `.env` file in the project root.

The application configuration may require values for:

```ini
MAPBOX_PUBLIC_TOKEN=your_mapbox_public_token
MONGODB_URI=your_mongodb_connection_string
```

Additional environment variables may be necessary for authentication, session management, and other services.

The exact MongoDB and authentication variable names must match the code in the existing repository.

Do not commit private credentials to version control.

### Step 4 — Start the Application

Run:

```bash
npm start
```

The application will start using the port and runtime configuration defined by the project.

Check the terminal output for the local server address.

### Step 5 — Open the Application

Open the server URL in a web browser.

The interface is intended to support mobile-friendly navigation.

---

## Application Workflow

### Step 1 — Registration and Authentication

Users create an account or sign in using the available authentication interface.

### Step 2 — Role-Based Dashboard

The application displays interfaces according to the user's role.

For example, a farmer may access wool-related services while a logistics partner may access transportation workflows.

### Step 3 — Service Exploration

Users explore the services relevant to their activities, such as shearing, grading, veterinary care, or warehousing.

### Step 4 — Wool Tracking

Production activities can be represented through a structured process covering different wool-processing stages.

### Step 5 — Trading and Marketplace Interaction

Buyers and sellers can use marketplace interfaces to explore products and coordinate transactions.

### Step 6 — Learning and Information

Users can access educational resources and statistical information available within the platform.

---

## Business Value

### For Farmers

- Better access to buyers and service providers.
- Greater visibility into wool-related processes.
- Access to learning resources.
- Improved awareness of industry activities.

### For Buyers and Sellers

- Centralized product discovery.
- Easier communication.
- More organized marketplace workflows.
- Opportunities to connect with industry participants.

### For Logistics and Warehousing Providers

- Dedicated service interfaces.
- Access to relevant logistics workflows.
- Improved coordination opportunities.

### For the Wool Industry

- A more connected supply-chain ecosystem.
- Improved digital accessibility.
- Greater opportunities for traceability and information sharing.
- Reduced dependence on fragmented manual processes.

---

## Engineering Highlights

### Full-Stack Web Development

KnitKraft integrates server-rendered interfaces with backend routing, middleware, data models, and database services.

### Express.js Architecture

Express organizes API routes and application endpoints while supporting reusable middleware.

### MongoDB Data Models

Dedicated models represent different application entities, including users, services, transport, warehouses, and meetings.

### Role-Based Application Design

Authentication and authorization modules provide a foundation for differentiated user access.

### Server-Side Rendering

EJS templates support dynamic page rendering using server-provided data.

### Multilingual Support

Separate language resources provide a foundation for displaying localized application content.

### Responsive Interface Design

Bootstrap, Sass, and reusable UI components support mobile-oriented interface layouts.

---

## Security and Configuration

KnitKraft uses external services and may handle user account information.

Important considerations include:

- Store database credentials securely.
- Avoid hardcoded API secrets.
- Use appropriately restricted Mapbox public tokens.
- Validate user input.
- Protect authenticated routes.
- Configure authorization according to user roles.
- Avoid committing `.env` files.
- Review dependencies and maintain security updates.
- Use HTTPS in production.

Public Mapbox tokens may be exposed to browsers by design, but should be configured and restricted appropriately.

---

## Current Scope and Future Improvements

Potential enhancements include:

- Improved real-time wool tracking.
- Advanced marketplace search and filtering.
- Secure payment and escrow integration.
- Automated quality-assessment workflows.
- More detailed warehouse inventory management.
- Location-aware logistics optimization.
- Real-time commodity pricing integrations.
- Advanced analytics and reporting.
- Additional language support.
- Push notifications.
- Enhanced mobile application support.
- Supply-chain audit trails.
- Cloud infrastructure improvements.

These are potential improvements rather than confirmed current functionality.

---

## Development

### Repository Maintainer

**Mashiel Khan**
BS Computer Science
Full-Stack Development | Web Applications | Digital Platforms

GitHub: [github.com/Mashielkhan](https://github.com/Mashielkhan)

---

## License

See the repository's [LICENSE](LICENSE) file for the applicable license and attribution requirements.

---

## Project Vision

KnitKraft demonstrates how a unified digital platform can improve coordination throughout agricultural and textile supply chains.

By bringing together production tracking, service management, logistics, quality assessment, marketplace operations, and education, the platform explores opportunities for making the wool industry more connected, accessible, and transparent.

**KnitKraft — Connecting the Wool Industry, From Farm to Fabric.**
