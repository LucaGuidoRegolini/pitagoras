from flask import Flask, request
import math

app = Flask('calculator')


@app.route("/", methods=["POST"])
def calcula():
    body = request.get_json()
    print(body)
    a = body["a"]
    b = body["b"]
    c = body["c"]

    if (a == "NULL" and b == "NULL") or (a == "NULL" and c == "NULL") or (b == "NULL" and c == "NULL"):
        resp = "erro"

    elif a == "NULL":
        x = math.sqrt(int(b)**2 + int(c)**2)
        resp = {"a": x, "b": b, "c": c}

    elif b == "NULL":
        x = math.sqrt(int(a)**2 - int(c)**2)
        resp = {"a": a, "b": x, "c": c}

    elif c == "NULL":
        x = math.sqrt(int(a)**2 - int(b)**2)
        resp = {"a": a, "b": b, "c": x}
        
    else:
        resp = {"a": a, "b": b, "c": c}
    
    return resp


app.run()
