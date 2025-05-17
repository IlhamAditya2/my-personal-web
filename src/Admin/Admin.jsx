import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Admin() {
  const navigate = useNavigate();
  const [portfolios, setPortfolios] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", image: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      fetchPortfolios(token);
    }
  }, [navigate]);

  const fetchPortfolios = async (token) => {
    try {
      const response = await axios.get("http://localhost:8000/api/portfolios", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPortfolios(response.data);
    } catch (error) {
      console.error("Gagal fetch portfolios:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      if (form.id) {
        await axios.put(
          `http://localhost:8000/api/portfolios/${form.id}`,
          form,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        await axios.post("http://localhost:8000/api/portfolios", form, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      setForm({ title: "", description: "", image: "" });
      fetchPortfolios(token);
    } catch (error) {
      console.error("Submit gagal:", error.response?.data || error.message);
    }
  };

  const handleEdit = (portfolio) => {
    setForm(portfolio);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:8000/api/portfolios/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchPortfolios(token);
    } catch (error) {
      console.error("Delete gagal:", error);
    }
  };

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:8000/api/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.error("Logout gagal:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h1>Admin - Kelola Portofolio</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Deskripsi"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="URL Gambar"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <button type="submit">{form.id ? "Update" : "Tambah"}</button>
      </form>

      <ul>
        {portfolios.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} width="100" />
            <br />
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Hapus</button>
          </li>
        ))}
      </ul>

      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
