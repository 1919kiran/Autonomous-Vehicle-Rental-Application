import os
import pymongo

from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return redirect(url_for('select'))


@app.route('/select', methods=['GET', 'POST'])
def select():
    error = None
    if request.method == 'POST':
        car = request.form.get('cars')
        os.system("start cmd /K python PythonAPI/examples/automatic_control.py --car " + '"' + car + '"')
        return render_template('sensor.html', error=error)
    return render_template('av-select.html', error=error)


@app.route('/get_data', methods=['GET', 'POST'])
def get_data():
    client = pymongo.MongoClient(
        "mongodb+srv://admin:adminuser@281avcloud.cspsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    sensor_db = client["SensorData"]
    sensor_collection = sensor_db["Sensor"]
    x = sensor_collection.find()
    sensor_data = []
    for i in x:
        sensor_data.append(i)
    print()
    return render_template("sensor.html", sensor_data=sensor_data, error=None)


if __name__ == '__main__':
    app.run(debug=True)
