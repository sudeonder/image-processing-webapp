import cv2
import numpy as np
import matplotlib.pyplot as plt
from io import BytesIO


def resize_img(img, width, height):
    resized_img = cv2.resize(img, (width, height))
    return resized_img


def draw_shape(img, shape='circle'):
    if shape == 'circle':
        cv2.circle(img, (100, 100), 50, (255, 0, 0), -1)
    elif shape == 'rectangle':
        cv2.rectangle(img, (50, 50), (150, 150), (0, 255, 0), -1)
    elif shape == 'line':
        cv2.line(img, (0, 0), (100, 100), (0, 0, 255), 5)
    elif shape == 'ellipse':
        cv2.ellipse(img, (100, 100), (100, 50), 0, 0, 360, (255, 255, 0), -1)
    elif shape == 'triangle':
        pts = np.array([[10, 5], [20, 30], [70, 20]], np.int32)
        pts = pts.reshape((-1, 1, 2))
        cv2.polylines(img, [pts], True, (0, 255, 255), 3)

    else:
        raise ValueError(f"Shape {shape} not recognized")
    return img


def blank_image(width, height):
    img = np.zeros((height, width, 3), np.uint8)
    # plt.imshow(img)
    # plt.show()
    return img



