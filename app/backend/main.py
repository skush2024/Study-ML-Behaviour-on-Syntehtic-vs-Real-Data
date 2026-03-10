import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import router as stress_router

app = FastAPI(title="Stress Level Classifier API")

# Professional CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # Restrict to your React app
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the routes from the api folder
app.include_router(stress_router, prefix="/api", tags=["Assessment"])

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
