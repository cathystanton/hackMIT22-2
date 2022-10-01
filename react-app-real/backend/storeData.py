from flask import Flask, render_template, Request
from markupsafe import escape
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text
import sqlite3
import hashlib

app = Flask(__name__)
db_path = 'react-app-real/backend/mock.db'
connection = sqlite3.connect(db_path)

def get_db_connection():
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    return conn

# anonymizes username into unique hash
def processUsername(username):
    m = hashlib.md5()
    m.update(username)
    return str(int(m.hexdigest(), 16))[0:12]



# index page. Should filter for user
@app.route("/")
def index():
    conn = get_db_connection()
    posts = conn.execute('SELECT * FROM posts').fetchall()
    conn.close()
    return render_template('index.html', posts=posts)

# adds a post to the database. User is hardcoded as 1, add later when we get 
# multi-user functionality - is this the right app.route approach?
@app.route('/<username>/<songID>/<journalEntry>/<emotion>')
def add_post(username, songID, journalEntry, emotion):
    with open('react-app-real/backend/schema.sql') as f:
        connection.executescript(f.read())
    cur = connection.cursor()
    cur.execute("INSERT INTO posts (userID, songID, journalEntry, emotion) VALUES (?, ?, ?, ?)",
            (processUsername(username), songID, journalEntry, emotion))
    connection.commit()
    connection.close()
