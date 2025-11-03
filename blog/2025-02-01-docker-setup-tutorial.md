---
slug: docker-setup-tutorial
title: "Tutorial: Setting Up Enthusiast with Docker in 5 Minutes"
authors: [karmen87]
tags: [tutorials, docker, getting-started]
image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tbsdbe3bthx1pptigm0m.png
---

A hands-on, step-by-step tutorial for getting Enthusiast running locally using Docker. Perfect for developers who want to test RAG-powered e-commerce workflows without complex setup.

<!-- truncate -->

## What You'll Build

By the end of this 5-minute tutorial, you'll have:
- ✅ Enthusiast running in Docker containers
- ✅ PostgreSQL database configured with pgvector extension
- ✅ Django backend API accessible
- ✅ React frontend UI at localhost:8000

## Prerequisites

Before starting, ensure you have:

- **Docker Desktop** installed and running ([Download here](https://www.docker.com/get-started))
  - Windows: Docker Desktop with WSL2 backend
  - Mac: Docker Desktop for Mac
  - Linux: Docker Engine + Docker Compose
- **Git** for cloning the repository
- **At least 4GB RAM** available for containers
- **5-10 minutes** of your time

:::tip Quick Check
Verify Docker is running by opening your terminal and typing:
```bash
docker --version
docker-compose --version
```
You should see version numbers for both commands.
:::

---

## Step 1: Clone the Repository

Open your terminal and clone the Enthusiast repository:

```bash
git clone https://github.com/upsidelab/enthusiast.git
cd enthusiast
```

**What's happening:** You're downloading the entire Enthusiast codebase, including:
- Django backend application
- React frontend
- Docker configuration files
- Database migration scripts

---

## Step 2: Review the Docker Configuration

Before running anything, let's understand what Docker will set up:

```bash
# Take a quick look at the docker-compose file
cat docker-compose.yml
```

You'll see services for:
- **PostgreSQL database** with pgvector extension (for vector search)
- **Django backend** with API endpoints
- **React frontend** with UI components
- **Redis** (optional, for caching)

:::note
The `docker-compose.development.yml` file contains additional development-specific settings like volume mounts for live code reloading.
:::

---

## Step 3: Start the Containers

Now the magic happens. Run this single command:

```bash
docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build -d
```

**Breaking down this command:**
- `-f docker-compose.yml` - Uses the main configuration
- `-f docker-compose.development.yml` - Overlays development settings
- `up` - Starts all services
- `--build` - Rebuilds images if needed
- `-d` - Runs in detached mode (background)

**Expected output:**
```bash
[+] Building 34.2s (18/18) FINISHED
[+] Running 4/4
 ✔ Container enthusiast-db-1       Started
 ✔ Container enthusiast-backend-1  Started
 ✔ Container enthusiast-frontend-1 Started
 ✔ Container enthusiast-redis-1    Started
```

:::tip First Run Tip
The first build takes 2-5 minutes as Docker downloads base images and installs dependencies. Subsequent starts are much faster (10-20 seconds).
:::

---

## Step 4: Wait for Services to Initialize

The containers are running, but Django needs to:
1. Run database migrations
2. Collect static files
3. Start the development server

**Check the logs to confirm everything is ready:**

```bash
docker-compose logs -f backend
```

Look for this line:
```
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
Django version 4.2, using settings 'enthusiast.settings'
Starting development server at http://0.0.0.0:8000/
```

**Press `Ctrl+C`** to exit the logs (containers keep running).

---

## Step 5: Access the Application

Open your browser and navigate to:

🌐 **Frontend UI:** [http://localhost:8000](http://localhost:8000)

You should see the Enthusiast dashboard with:
- Navigation menu
- Workflow creation interface
- Settings panel

🔧 **API Documentation:** [http://localhost:8000/api/docs/](http://localhost:8000/api/docs/)

The Swagger/OpenAPI docs show all available endpoints.

---

## Step 6: Verify the Installation

Let's make sure everything works by checking the API:

```bash
curl http://localhost:8000/api/health/
```

**Expected response:**
```json
{
  "status": "healthy",
  "database": "connected",
  "redis": "connected",
  "version": "1.0.0"
}
```

✅ **Success!** Your Enthusiast instance is fully operational.

---

## Common Issues & Solutions

### Issue 1: Port Already in Use

**Error:** `Bind for 0.0.0.0:8000 failed: port is already allocated`

**Solution:** Another service is using port 8000. Stop it or change Enthusiast's port:

```bash
# Edit docker-compose.yml and change ports:
ports:
  - "8001:8000"  # Use 8001 instead of 8000
```

### Issue 2: Containers Exit Immediately

**Error:** `enthusiast-backend-1 exited with code 1`

**Solution:** Check the logs for the specific error:

```bash
docker-compose logs backend
```

Common causes:
- Missing environment variables
- Database connection issues
- Python dependency conflicts

### Issue 3: Database Connection Failed

**Error:** `django.db.utils.OperationalError: could not connect to server`

**Solution:** Ensure PostgreSQL container is fully started:

```bash
docker-compose ps
# Wait until db shows "healthy" status
docker-compose restart backend
```

---

## Next Steps: Configure Your First Workflow

Now that Enthusiast is running, let's create a simple RAG workflow:

1. **Navigate to Workflows** in the UI
2. **Click "Create New Workflow"**
3. **Configure:**
   - Name: "Product Search"
   - Retriever: PGVector
   - LLM Provider: OpenAI (you'll need an API key)
4. **Test the workflow** with a sample query

:::info API Keys Required
To use LLM features, you'll need to configure:
- OpenAI API key for cloud LLMs
- OR local model endpoints (Ollama, LM Studio)

Add these to `.env` file in the project root.
:::

---

## Stopping and Restarting

**Stop all containers:**
```bash
docker-compose down
```

**Stop and remove volumes (fresh start):**
```bash
docker-compose down -v
```

**Restart everything:**
```bash
docker-compose up -d
```

---

## What You Learned

In this tutorial, you:
- ✅ Set up a complex multi-container application with Docker
- ✅ Configured PostgreSQL with pgvector for AI embeddings
- ✅ Started a Django + React application stack
- ✅ Verified API health and connectivity
- ✅ Troubleshot common Docker issues

## Resources

- 📖 [Enthusiast Official Docs](https://upsidelab.io/tools/enthusiast/docs/)
- 💻 [GitHub Repository](https://github.com/upsidelab/enthusiast)
- 🐳 [Docker Compose Documentation](https://docs.docker.com/compose/)
- 🔍 [pgvector Extension Guide](https://github.com/pgvector/pgvector)

---

**Questions or issues?** Drop a comment below or open an issue on the [GitHub repo](https://github.com/upsidelab/enthusiast/issues).

Happy building! 🚀
