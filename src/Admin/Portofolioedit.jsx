import React, { useEffect, useState } from "react";
import axios from "axios";

const PortfolioEdit = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);

  const token = localStorage.getItem("token");
  const API_URL = "http://localhost:8000/api/portfolio"; // Ubah sesuai URL backendmu

  // Ambil data portofolio yang ada dari API
  useEffect(() => {
    axios
      .get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data = res.data[0]; // Ambil data pertama dari API (jika hanya 1 portofolio)
        setPortfolio(data);
        setForm({
          title: data.title,
          description: data.description,
          image: null,
        });
        setPreview(`http://localhost:8000/storage/${data.image}`);
      })
      .catch((err) => console.error("Error fetching portfolio: ", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });

    // Preview image sebelum submit
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    if (form.image) {
      formData.append("image", form.image);
    }

    // Kirim data edit ke API
    axios
      .put(`${API_URL}/${portfolio.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // Untuk upload gambar
        },
      })
      .then(() => {
        alert("Portofolio berhasil diupdate!");
      })
      .catch((err) => {
        console.error("Error updating portfolio: ", err);
      });
  };

  if (!portfolio) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Portofolio</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Judul:</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Deskripsi:</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gambar:</label>
          <input type="file" onChange={handleImage} />
        </div>
        {preview && (
          <div>
            <p>Preview Gambar:</p>
            <img src={preview} alt="Preview" width="150" />
          </div>
        )}
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
};

export default PortfolioEdit;
