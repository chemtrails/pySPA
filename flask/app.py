from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def one():
    return render_template('one.html')

@app.route('/two')
def two():
    return render_template('two.html')

@app.route('/three')
def three():
    return render_template('three.html')

app.run()
