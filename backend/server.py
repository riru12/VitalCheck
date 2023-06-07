from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def predict():
    x = 'test'
    return {
        'value1':x
    }
 
     
# Running app
if __name__ == "__main__":
    app.run(port=8000, debug=True)