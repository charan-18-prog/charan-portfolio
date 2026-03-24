from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import mysql.connector

# ✅ Email imports
from fastapi_mail import FastMail, MessageSchema
from mail_config import conf

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

cursor = conn.cursor(dictionary=True)

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


# 👉 Save contact + Send Email
@app.post("/contact")
async def save_contact(contact: Contact):
    print("Received data:")
    print(contact.name, contact.email, contact.message)

    # ✅ Save to DB
    query = "INSERT INTO contacts (name, email, message) VALUES (%s, %s, %s)"
    values = (contact.name, contact.email, contact.message)

    cursor.execute(query, values)
    conn.commit()

    # ✅ Send Email
    message = MessageSchema(
        subject="New Contact Form Submission",
        recipients=["muraricharan2@gmail.com"],  # 👉 nee email pettu
        body=f"""
Name: {contact.name}
Email: {contact.email}
Message: {contact.message}
        """,
        subtype="plain"
    )

    fm = FastMail(conf)
    await fm.send_message(message)

    return {"message": "Contact saved & Email sent successfully ✅"}


# 👉 Get all contacts
@app.get("/contacts")
def get_contacts():
    cursor.execute("SELECT * FROM contacts")
    return cursor.fetchall()