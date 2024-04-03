# Welcome to Nextjs+Strapi+Postgres+Docker boilerplate
    

## What for?

This project was implemented for a simple deployment to the server
Some of the ideas of the implementation were taken from the [this repo](https://github.com/buraste/strapi-nextjs-docker-boilerplate)(I have nothing to do with this repository)


## Features & Stacks

### Backend
- [x] Strapi 4.21.1
- [x] Node.js 18
- [x] Yarn package manager

### Frontend

- [x] Next.js 14.1.4
- [x] React 18
- [x] Tailwind CSS
- [x] TypeScript
- [x] Npm package manager

### Database

- [x] Postgres 16.2-alpine

### Reverse Proxy

- [x] Nginx Latest

The proxy is split into a domain for Next.js and a subdomain for Strapi

### Containerization
- [x] Docker 26.0.0🐳
- [x] Docker Compose 2.26.0
- [x] Seperated Dockerfiles for development and production

### Environment Variables Management
- One file for backend + frontend + database + nginx


## How to start

1. Clone the repository
2. Add Environment Variables from ```.env.example``` to your sever or CI/CD
3. Change credentials with secure and strong ones
4. If you are on development, be sure ENVIRONMENT=development
5. If you are on production or want to production build, change with ENVIRONMENT=production
6. Be sure localhost:443 is accesible and not using from another process (Nginx runs on 443). You need have SSL on your server.
7. Change the domain names in the nginx configuration files and ``` backend/config/server.js ```

I Recommend to use CI/CD for easy deploy this project to your server.
You can use Gitlab CI/CD or Github Actions for this.

For Gitlab CI/CD, you can rename ```.gitlab-ci.yml.example``` file add [runner](https://docs.gitlab.com/runner/install/docker.html) and deploy this project to your server.

## Author

- [x] [Telegram](https://t.me/maposia)
- [x] [Email](maposia@gmail.com)
