import sqlite3

def update_user():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()

    # Update user credentials
    c.execute("UPDATE users SET username = ?, password = ? WHERE username = ?", ('TSWRNI', '1234', 'admin'))

    conn.commit()
    conn.close()

if __name__ == '__main__':
    update_user()
    print("User updated successfully.")
