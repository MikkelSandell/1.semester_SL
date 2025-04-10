from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_methods=["GET"],  # Allows GET
    # allow_headers=["*"],  # Allows all headers
    # allow_credentials=True,  # Allows cookies to be sent
)


@app.get("/timestamp")
def timestamp():
    return { "data": datetime.now() }

