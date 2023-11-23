from flask import Flask, render_template, request, redirect, url_for, send_from_directory

app = Flask(__name__)
app.secret_key = '21112003'

@app.route('/')
def index():
    return render_template('login.html',
                           username_error="",
                           password_error="",
                           registration_success='')
    
@app.route('/images/<filename>')
def get_image(filename):
    return send_from_directory('image', filename)


    
if __name__ == "__main__":
    app.run(debug=True)