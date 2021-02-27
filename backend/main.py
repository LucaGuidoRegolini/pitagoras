from flask import Flask, request
from flask_cors import CORS, cross_origin
import math

app = Flask('calculator')
CORS(app)

@app.route("/", methods=["POST"])
def calcula():
    body = request.get_json()
    print(body)
    a = body["a"]
    b = body["b"]
    c = body["c"]

    if (a == "" and b == "") or (a == "" and c == "") or (b == "" and c == ""):
        resp = "erro"
    elif a == "":
        x = math.sqrt(int(b)**2 + int(c)**2)
        resp = {"a": x, "b": b, "c": c}

    elif b == "":
        if a<c: resp= "invalido"
        else:
            x = math.sqrt(int(a)**2 - int(c)**2)
            resp = {"a": a, "b": x, "c": c}

    elif c == "":
        if a<b: resp= "invalido"
        else:
            x = math.sqrt(int(a)**2 - int(b)**2)
            resp = {"a": a, "b": b, "c": x}
        
    else:
        resp = {"a": a, "b": b, "c": c}
    
    print(resp)
    return resp


app.run()
