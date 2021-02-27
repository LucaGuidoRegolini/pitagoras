from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask('calculator')
CORS(app)

@app.route("/", methods=["POST"])
def teste():
    body = request.get_json()

    print(body)
    return body
app.run()