import axios from "axios";

const API_URL = "http://localhost:8000";

export const blendImages = async (img1, img2) => {
  const formData = new FormData();
  formData.append("img1", img1);
  formData.append("img2", img2);

  const response = await axios.post(`${API_URL}/blend-images/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    responseType: "blob",
  });

  const url = URL.createObjectURL(new Blob([response.data]));
  return url;
};

export const resizeImage = async (file, width, height) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("width", width);
  formData.append("height", height);

  const response = await axios.post(`${API_URL}/resize-image/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    responseType: "blob",
  });

  const url = URL.createObjectURL(new Blob([response.data]));
  return url;
};

export const drawShapes = async (shape) => {
  const response = await axios.get(`${API_URL}/draw-shapes/`, {
    params: { shape: shape },
    headers: {
      "Content-Type": "multipart/form-data",
    },
    responseType: "blob",
  });

  const url = URL.createObjectURL(new Blob([response.data]));

  return url;
};
