from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"data": "hello world"}

@app.get("/greetings")
def root(): #navet kan være havd jeg har løst til skal ikke være root
    return {"data": "welcome to my server"}

