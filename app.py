from flask import Flask, render_template, request, redirect, url_for, session
import sqlite3

app = Flask(__name__, static_folder='.', template_folder='templates')
app.secret_key = 'your_secret_key'

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    print(f"Attempting login with username: {username}, password: {password}")

    conn = get_db_connection()
    user = conn.execute('SELECT * FROM users WHERE username = ? AND password = ?', (username, password)).fetchone()
    conn.close()

    if user:
        session['user_id'] = user['id']
        print("Login successful")
        return redirect(url_for('dashboard'))
    else:
        print("Login failed: Invalid credentials")
        return 'Invalid credentials'

@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        return redirect(url_for('home'))
    return render_template('dashboard.html')

if __name__ == '__main__':
    app.run(debug=True)
