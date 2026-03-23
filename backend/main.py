from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import mysql.connector

app = FastAPI()

# ✅ CORS (React ki permission)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ MySQL connection
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Muraricharan@3208",
    database="portfolio"
)

cursor = conn.cursor(dictionary=True)  # 👈 important change

# ---------- Model ----------
class Contact(BaseModel):
    name: str
    email: str
    message: str

# ---------- Routes ----------

@app.get("/")
def home():
    return {"message": "Hello Charan"}

@app.get("/projects")
def get_projects():
    cursor.execute("SELECT * FROM projects")
    return cursor.fetchall()

# 👉 Save contact
@app.post("/contact")
def save_contact(contact: Contact):
    print("Received data:")
    print(contact.name, contact.email, contact.message)

    query = "INSERT INTO contacts (name, email, message) VALUES (%s, %s, %s)"
    values = (contact.name, contact.email, contact.message)

    cursor.execute(query, values)
    conn.commit()

    return {"message": "Contact saved successfully"}

# 👉 NEW: Get all contacts (VERY IMPORTANT)
@app.get("/contacts")
def get_contacts():
    cursor.execute("SELECT * FROM contacts")
    result = cursor.fetchall()
    return result