from flask import Flask, render_template, Request, redirect
from markupsafe import escape
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text
import sqlite3
import hashlib

app = Flask(__name__)
db_path = 'react-app-real/backend/mock.db'

# anonymizes username into unique hash
def processUsername(username):
    m = hashlib.md5()
    m.update(username.encode("UTF-8"))
    return str(int(m.hexdigest(), 16))[0:12]

# index page. Should filter for user
@app.route("/")
def index():
    conn = sqlite3.connect(db_path, isolation_level=None)
    conn.row_factory = sqlite3.Row
    posts = conn.execute('SELECT * FROM posts').fetchall()
    conn.close()
    return render_template('index.html', posts=posts)

# adds entry to DB, refreshes page
@app.route('/<username>/<songID>/<journalEntry>/<emotion>')
def add_post(username, songID, journalEntry, emotion):
    connection = sqlite3.connect(db_path, isolation_level=None)
    cur = connection.cursor()
    cur.execute("INSERT INTO posts (userID, songID, journalEntry, emotion) VALUES (?, ?, ?, ?)",
            (processUsername(username), songID, journalEntry, emotion))
    connection.commit()
    connection.close()

    # refreshes page
    return redirect('/')


# DEV only - initializes SQL if it is empty
def new_SQL():
    connection = sqlite3.connect(db_path, isolation_level=None)
    connection.row_factory = sqlite3.Row
    with open('react-app-real/backend/schema.sql') as f:
        connection.executescript(f.read())
    connection.commit()
    connection.close()

