import axios from "axios";

const API_URL = "http://localhost:8000";

export const resizeImage = async (file, width, height) => {
  console.log("Resizing image...");
  console.log(file.type);
  console.log(file.name);
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
