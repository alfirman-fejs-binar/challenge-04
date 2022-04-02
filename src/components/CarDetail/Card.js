export default function Card({ car }) {
  return (
    <div>
      <div>
        <img src={car.image} alt={car.name} />
      </div>
      <div>
        <p>{car.name}</p>
        <ul>
          <li>
            <img src="/icons/fi_users.svg" alt="users" />
            <p>4 orang</p>
          </li>
          <li>
            <img src="/icons/fi_settings.svg" alt="settings" />
            <p>Manual</p>
          </li>
          <li>
            <img src="/icons/fi_calendar.svg" alt="settings" />
            <p>Tahun 2020</p>
          </li>
        </ul>
        <div>
          <p>Total</p>
          <p>Rp {car.price?.toLocaleString("id-ID")}</p>
        </div>
        <button>Lanjutkan Pembayaran</button>
      </div>
    </div>
  );
}
