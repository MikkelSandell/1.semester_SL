from fastapi import FastAPI
import requests

#hvis man kallder den my_app skal der stå main:my_app
app = FastAPI()
EXPRESS_URL = "http://localhost:8080/expressData"

@app.get("/fastapiData")
def getFastAPIData():
    return {"data": "data from FastAPI"}

@app.get("/requestExpressData")
#kan add await for at få det asyncon
def getRequestExpressData():
    try:
        #.json() kan addes here
        response = requests.get(EXPRESS_URL)
        response.raise_for_status()  # Raise an error for bad responses (4xx, 5xx)

        #man kan sætte de her sammen
        data = response.json()
        return data  # Return the fetched data from Express
    except requests.exceptions.RequestException as e:
        return {"error": f"Failed to fetch data: {str(e)}"}