from flask import Flask, render_template, Request
from markupsafe import escape
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text
import sqlite3

app = Flask(__name__)
db_path = 'react-app-real/backend/mock.db'
connection = sqlite3.connect(db_path)

with open('react-app-real/backend/schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()
cur.execute("INSERT INTO posts (userID, albumCoverLink, journalEntry, emotion) VALUES (?, ?, ?, ?)",
            (1, 'www.google.com', 'Content for the first post', 'sad')
            )
cur.execute("INSERT INTO posts (userID, albumCoverLink, journalEntry, emotion) VALUES (?, ?, ?, ?)",
            (1, 'www.google.com', 'Content for the first post', 'sad')
            )
connection.commit()
connection.close()

def get_db_connection():
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    return conn

# for later
@app.route("/")
def index():
    conn = get_db_connection()
    posts = conn.execute('SELECT * FROM posts').fetchall()
    conn.close()
    return render_template('index.html', posts=posts)

# for later use
@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return f'User {escape(username)}'