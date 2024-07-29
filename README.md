# Motlow Creek Baptist Church Website

Welcome to the repository for the Motlow Creek Baptist Church website. This project uses Vite-React for the frontend, Strapi CMS for the backend, DigitalOcean Managed PostgreSQL for the database, and DigitalOcean Spaces for storage.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Configuration](#configuration)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Usage](#usage)
  - [Development](#development)
  - [Production](#production)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

This website is designed to serve as the online presence for Motlow Creek Baptist Church. It provides information about the church, sermons, events, and other relevant content.

## Features

- Dynamic content management using Strapi CMS
- Responsive design using Vite-React
- Secure and scalable PostgreSQL database managed by DigitalOcean
- Cloud storage for media files using DigitalOcean Spaces
- User authentication and authorization

## Tech Stack

- **Frontend:** Vite-React
- **Backend:** Strapi CMS
- **Database:** DigitalOcean Managed PostgreSQL
- **Storage:** DigitalOcean Spaces

## Installation

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- Docker (for running Strapi CMS locally)

### Frontend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mcbc-website.git
   cd mcbc-website
   ```

2. Navigate to the frontend directory and install dependencies:

   ```bash
   cd frontend
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd ../backend
   ```

2. Create a `.env` file in the backend directory and add the necessary environment variables (see Configuration section).

3. Start the Strapi CMS using Docker:

   ```bash
   docker-compose up
   ```

4. Access the Strapi admin panel at `http://localhost:1337/admin` and create an admin user.

## Configuration

### Frontend

Create a `.env` file in the `frontend` directory with the following variables:

```env
VITE_API_URL=http://localhost:1337
VITE_STORAGE_URL=https://your-dospaces-url
DATABASE_CLIENT=postgres
DATABASE_HOST=your-db-host
DATABASE_PORT=5432
DATABASE_NAME=your-db-name
DATABASE_USERNAME=your-db-username
DATABASE_PASSWORD=your-db-password
DATABASE_SSL=true
DIGITALOCEAN_SPACES_ENDPOINT=https://nyc3.digitaloceanspaces.com
DIGITALOCEAN_SPACES_BUCKET=your-bucket-name
DIGITALOCEAN_SPACES_ACCESS_KEY=your-access-key
DIGITALOCEAN_SPACES_SECRET_KEY=your-secret-key
```

## Backend

## Usage

### Development

To run the project locally:

Start the backend (Strapi CMS):

```bash
cd backend
docker-compose up
Start the frontend (Vite-React):
```

```bash
Copy code
cd frontend
npm run dev
or
yarn dev
```

### Production

For production deployment, you'll need to set up your hosting environment to run the frontend and backend services. Consider using DigitalOcean for deployment and storage.

### Contributing

We welcome contributions to improve the Motlow Creek Baptist Church website. To contribute:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with clear messages.
- Push your changes to your fork and submit a pull request.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgements

Thanks to the developers of Vite, React, Strapi, PostgreSQL, and DigitalOcean for their excellent tools and services.
Special thanks to the members of Motlow Creek Baptist Church for their support and feedback.
