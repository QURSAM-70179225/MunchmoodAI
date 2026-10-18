// Add this inside InteriorScene(), right after the useState hooks:
const [showMenu, setShowMenu] = useState(false);
const [activeTable, setActiveTable] = useState(null);

const menuItems = [
  { name: "Zinger Burger", price: 350, emoji: "🍔" },
  { name: "Double Burger", price: 450, emoji: "🍔" },
  { name: "Loaded Fries", price: 300, emoji: "🍟" },
  { name: "Oreo Shake", price: 320, emoji: "🥤" },
  { name: "Coke", price: 120, emoji: "🥤" },
  { name: "Nachos", price: 350, emoji: "🌮" },
];

const handleTableClick = (id) => {
  setActiveTable(id);
  setShowMenu(true);
};

// Then replace your tables group click handler with:
<group key={table.id} position={[table.pos[0], 0, table.pos[1]]} onClick={() => handleTableClick(table.id)}>

// And add the Menu Panel right before the closing </div> at the bottom:
{showMenu && activeTable && (
  <div style={{
    position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
    background: "white", borderRadius: "20px", padding: "25px", zIndex: 200,
    boxShadow: "0 8px 30px rgba(0,0,0,0.25)", width: "340px"
  }}>
    <h3 style={{ margin: "0 0 15px 0", color: "#e53935" }}>
      📋 Table {activeTable} — Place Your Order
    </h3>
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {menuItems.map((item, i) => (
        <button
          key={i}
          onClick={() => {
            addOrder(`${item.emoji} ${item.name}`, item.price, activeTable);
            setShowMenu(false);
          }}
          style={{
            padding: "12px 15px", border: "none", borderRadius: "12px",
            background: "#f5f5f5", cursor: "pointer", textAlign: "left",
            fontSize: "15px", display: "flex", justifyContent: "space-between",
            alignItems: "center"
          }}
          onMouseOver={(e) => e.currentTarget.style.background = "#ffccbc"}
          onMouseOut={(e) => e.currentTarget.style.background = "#f5f5f5"}
        >
          <span>{item.emoji} {item.name}</span>
          <span style={{ fontWeight: "bold", color: "#e53935" }}>Rs.{item.price}</span>
        </button>
      ))}
    </div>
    <button
      onClick={() => setShowMenu(false)}
      style={{
        marginTop: "15px", width: "100%", padding: "10px",
        background: "#e0e0e0", border: "none", borderRadius: "10px",
        cursor: "pointer", fontSize: "14px"
      }}
    >
      Cancel
    </button>
  </div>
)}