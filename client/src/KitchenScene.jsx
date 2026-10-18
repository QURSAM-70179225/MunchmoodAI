// Accept orders prop:
export default function KitchenScene({ onBack, orders = [] }) {

// Add this right before your bottom button:
<div style={{
  position: "absolute", top: "80px", right: "20px", zIndex: 80,
  background: "rgba(255,255,255,0.96)", borderRadius: "16px",
  padding: "15px", width: "260px", boxShadow: "0 4px 15px rgba(0,0,0,0.15)"
}}>
  <h4 style={{ margin: "0 0 10px 0", color: "#f44336" }}>🍳 Kitchen Queue</h4>
  {orders.length === 0 ? (
    <p style={{ fontSize: "13px", color: "#888" }}>No orders yet — waiting...</p>
  ) : (
    orders.filter(o => o.status !== "delivered").map((order) => (
      <div key={order.id} style={{
        padding: "8px", marginBottom: "6px", borderRadius: "8px",
        background: order.status === "cooking" ? "#fff3e0" : "#f5f5f5",
        fontSize: "12px", borderLeft: order.status === "cooking" ? "3px solid #f44336" : "none"
      }}>
        <div style={{ fontWeight: "bold" }}>{order.item}</div>
        <div>Table {order.tableId || "Drive-Thru"}</div>
        <div style={{ color: "#ff9800", marginTop: "2px" }}>
          {order.status === "placed" && "⏳ Queued"}
          {order.status === "preparing" && "📝 Prepping"}
          {order.status === "cooking" && "🔥 COOKING"}
          {order.status === "ready" && "✅ Ready"}
        </div>
      </div>
    ))
  )}
</div>