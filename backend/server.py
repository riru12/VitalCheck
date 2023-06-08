from flask import Flask
from flask_cors import CORS
import json
import joblib

app = Flask(__name__)
CORS(app)

@app.route('/<string:name>')
def predict(name):
    name = json.loads(name)
    scaler = joblib.load('scaler.pkl')
    svc_model = joblib.load('svc.pkl')
    
    x = scaler.transform([[name["age"], name["sex"], name["cp"], name["trtbps"], name["chol"], name["fbs"], name["restecg"], name["thalachh"], name["exng"], name["oldpeak"], name["slp"], name["caa"], name["thall"]]])
    y = svc_model.predict(x)
    return{'output' : str(y[0])}
 
     
# Running app
if __name__ == "__main__":
    app.run(port=8000, debug=True)