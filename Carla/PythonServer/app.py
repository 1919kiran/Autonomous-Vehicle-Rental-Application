import os

from flask import Flask, request, Response
from flask_cors import CORS

app = Flask(__name__)


@app.route('/start_ride', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'GET':
        start_location = request.args.get('startLocation')
        end_location = request.args.get('endLocation')
        vehicle = request.args.get('vehicle')
        payment = request.args.get('payment')
        os.system(
            "start cmd /K python C:\\carla\\av-cloud-rental\\Carla\\PythonClient\\av_launcher.py --car "
            + '"' + vehicle + '"')
        print(request.args)
        data = {
            "startLocation": start_location,
            "endLocation": end_location,
            "vehicle": vehicle
        }
        print(data)
        return data

    app.config['CORS_HEADERS'] = 'Content-Type'
    return {
        "start_location": "",
        "end_location": "",
        "vehicle": ""
    }


@app.route("/hello", methods=['GET'])
def hello():
    return "Hello"


if __name__ == '__main__':
    CORS(app)
    app.run(host="0.0.0.0", port=5401)
