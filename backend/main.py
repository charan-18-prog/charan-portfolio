from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# ✅ CORS (React ki permission)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- Model ----------
class Contact(BaseModel):
    name: str
    email: str
    message: str


# ---------- Routes ----------

@app.get("/")
def home():
    return {"message": "Hello Charan"}


# ✅ WORKING PROJECTS API (without database)
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


# 👉 Contact API (temporary without DB)
@app.post("/contact")
def save_contact(contact: Contact):
    print(contact)
    return {"message": "Message received successfully"}