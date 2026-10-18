// Accept addOrder prop:
export default function DriveThruScene({ addOrder }) {

// Inside your step logic, when order confirmed:
{step === 1 && (
  <button
    onClick={() => {
      addOrder("🍔 Zinger Meal + 🥤 Oreo Shake", 670, "Drive-Thru");
    }}
    style={{
      marginTop: "10px", padding: "10px 20px",
      background: "#4caf50", color: "white", border: "none",
      borderRadius: "20px", cursor: "pointer", fontWeight: "bold"
    }}
  >
    ✅ Confirm Order
  </button>
)}