from typing import Union,Optional
from datetime import datetime
from uuid import UUID

from fastapi import FastAPI
from pydantic import BaseModel
from enum import Enum
from fastapi.middleware.cors import CORSMiddleware

from api.attendance import router

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(router)