
from fastapi import FastAPI, File, UploadFile, Form, Query
from fastapi.responses import JSONResponse, StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
import cv2
import numpy as np
from io import BytesIO

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# import image_processing
from image_processing import resize_img, blank_image, draw_shape

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {"Hello": "World"}
   
@app.post("/resize-image/")
async def resize_image_endpoint(
    file: UploadFile = File(...),
    width: int = Form(...), 
    height: int = Form(...)
):
    print("here")
    contents = await file.read()
    nparr = np.frombuffer(contents, np.uint8)


    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # Resize the image
    resized_img = resize_img(img, width, height)


    # Convert the image to bytes
    _, buffer = cv2.imencode('.jpg', resized_img)
    io_buf = BytesIO(buffer)

    # Return the resized image
    return StreamingResponse(io_buf, media_type="image/jpeg")

@app.get("/draw-shapes/")
async def draw_shapes(shape: str = Query(...)):

    
    blank = blank_image(300, 300)
    print(shape)
    shaped = draw_shape(blank, shape)

    # Convert the image to bytes
    _, buffer = cv2.imencode('.jpg', shaped)
    io_buf = BytesIO(buffer)

    # Return the resized image
    return StreamingResponse(io_buf, media_type="image/jpeg")

