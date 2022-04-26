import random
import time

sensor_data = {
    "time": 123,
    "weather": {
        "precipitation": 0.0,
        "fog": 0.0,
        "wetness": 0.0,
        "precipitation": 0.0,
    },
    "vehicle_details": {
        "car_brand": "TESLA",
        "model": "Model 3",
        "vehicle_id": ""
    }
}

dist = 0
while True:
    d = sensor_data.get("vehicle_details")
    dist += random.randint(1, 9)
    d["distance"] = dist
    sensor_data["vehicle_details"] = d
    print(sensor_data)
    time.sleep(1)
