from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# ✅ CORS FIX (very important for Vercel frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "charan-portfolio-q59i.vercel.app",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- Model ----------
class Contact(BaseModel):
    name: str
    email: str
    message: str


# ---------- Home Route ----------
@app.get("/")
def home():
    return {"message": "Hello Charan"}


# ---------- Projects API ----------
@app.get("/projects")
def get_projects():
    return [
        {
            "id": 1,
            "title": "Portfolio Website",
            "description": "A full-stack portfolio built using React and FastAPI.",
            "technologies": "React, FastAPI, MySQL",
            "github": "https://github.com/",
            "live": "#"
        },
        {
            "id": 2,
            "title": "Face Emotion Recognition",
            "description": "AI based project that detects human emotions using camera.",
            "technologies": "Python, OpenCV, Machine Learning",
            "github": "https://github.com/",
            "live": "#"
        }
    ]


# ---------- Contact API ----------
@app.post("/contact")
def save_contact(contact: Contact):
    print("New Message:", contact)
    return {"message": "Message received successfully"}