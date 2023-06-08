from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/<string:name>')
def predict(name):
    return {
        'value1':name
    }
 
     
# Running app
if __name__ == "__main__":
    app.run(port=8000, debug=True)