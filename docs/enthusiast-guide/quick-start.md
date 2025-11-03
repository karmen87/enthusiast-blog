---
sidebar_position: 1
sidebar_label: 'Quick Start'
---

# Quick Start: Get a Local Instance Running

Get your local Enthusiast development environment running in under 5 minutes.

## Prerequisites

Before you begin, make sure you have:
- [Docker](https://www.docker.com/get-started) installed and running
- [Git](https://git-scm.com/) installed

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/upsidelab/enthusiast.git
cd enthusiast
```

### 2. Start with Docker Compose

The repository ships with `docker-compose.yml` and `docker-compose.development.yml`:

```bash
docker-compose up --build -d
```

This command will:
- Build the necessary Docker containers
- Start all services in the background (`-d` flag)
- Set up the PostgreSQL database, Django backend, and React frontend

### 3. Access the Application

Once the containers are running, you can:
- Open the UI at `http://localhost:8000`
- Access the API documentation
- Follow the Getting Started guide in the repo/docs

:::tip Configuration

Check the repo README and docs for environment variables to configure:
- **LLM Provider:** OpenAI API key or self-hosted model endpoints
- **Connectors:** Enable integrations with PIM/CMS/Shopify

:::

## Next Steps

Now that you have Enthusiast running locally, you can:
- Index your first product catalog
- Configure RAG (Retrieval-Augmented Generation) workflows
- Set up validation rules
- Connect to your e-commerce platform

:::info Need Help?

For detailed documentation, visit the [official Enthusiast docs](https://upsidelab.io/tools/enthusiast/docs/) or check the [GitHub repository](https://github.com/upsidelab/enthusiast).

:::
