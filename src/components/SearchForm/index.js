import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCars } from "../Layout";

export default function SearchForm() {
  const push = useNavigate();
  const { setCars } = useCars();

  const [form, setForm] = useState({
    type: "",
    date: "",
    time: "",
    totalPassenger: "",
  });

  const setValue = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const getCars = () => {
    return new Promise((resolve, reject) => {
      fetch("https://rent-cars-api.herokuapp.com/customer/car")
        .then((response) => response.json())
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      push("/");
      const cars = await getCars();
      setCars(cars);
    } catch (error) {
      console.log("something went wrong");
    }
  };

  return (
    <form onSubmit={(e) => submit(e)}>
      <div className="label-input">
        <label>Tipe Driver</label>
        <select
          name="type"
          value={form.type || "default"}
          onChange={(e) => setValue(e)}
        >
          <option value={"Dengan Sopir"}>Dengan Sopir</option>
          <option value={"Tanpa Sopir (Lepas Kunci)"}>
            Tanpa Sopir (Lepas Kunci)
          </option>
          <option disabled value="default">
            Pilih Tipe Driver
          </option>
        </select>
      </div>
      <div className="label-input">
        <label htmlFor="date">Tanggal</label>
        <input
          id="date"
          name="date"
          type="date"
          value={form.date}
          onChange={(e) => setValue(e)}
        />
      </div>
      <div className="label-input">
        <label htmlFor="time">Waktu Jemput/Ambil</label>
        <input
          id="time"
          name="time"
          type="time"
          value={form.time}
          onChange={(e) => setValue(e)}
        />
      </div>
      <div className="label-input">
        <label htmlFor="totalPassenger">Jumlah Penumpang (optional)</label>
        <input
          id="totalPassenger"
          name="totalPassenger"
          placeholder="Jumlah Penumpang (optional)"
          type="number"
          value={form.totalPassenger}
          onChange={(e) => setValue(e)}
        />
      </div>
      <div>
        <button type="submit" className="green-button">
          Cari Mobil
        </button>
      </div>
    </form>
  );
}
