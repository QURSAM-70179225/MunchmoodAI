import { useState } from "react";
import ExteriorScene from "./ExteriorScene";
import InteriorScene from "./InteriorScene";
import KitchenScene from "./KitchenScene";
import DriveThruScene from "./DriveThruScene";

export default function App() {
  const [currentView, setCurrentView] = useState("exterior");
  const [orders, setOrders] = useState([]);

  const addOrder = (item, price, tableId = null) => {
    const newOrder = {
      id: Date.now(),
      item,
      price,
      tableId,
      status: "placed", // placed → preparing → cooking → ready → delivered
      timestamp: new Date().toLocaleTimeString(),
    };
    setOrders((prev) => [...prev, newOrder]);
    
    // Auto-progress status
    setTimeout(() => updateOrderStatus(newOrder.id, "preparing"), 2500);
    setTimeout(() => updateOrderStatus(newOrder.id, "cooking"), 5500);
    setTimeout(() => updateOrderStatus(newOrder.id, "ready"), 9000);
    setTimeout(() => updateOrderStatus(newOrder.id, "delivered"), 13000);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
  };

  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden", fontFamily: "system-ui, sans-serif" }}>
      {/* Top Navigation Bar */}
      {currentView !== "exterior" && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, zIndex: 100,
          background: "linear-gradient(90deg, #e53935, #ff7043)",
          padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
        }}>
          <button
            onClick={() => setCurrentView("exterior")}
            style={{
              background: "rgba(255,255,255,0.2)", color: "white", border: "none",
              padding: "8px 16px", borderRadius: "20px", cursor: "pointer", fontWeight: "bold"
            }}
          >
            🏠 Home
          </button>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => setCurrentView("interior")}
              style={{
                background: currentView === "interior" ? "white" : "rgba(255,255,255,0.2)",
                color: currentView === "interior" ? "#e53935" : "white", border: "none",
                padding: "8px 16px", borderRadius: "20px", cursor: "pointer", fontWeight: "bold"
              }}
            >
              🪑 Dine-In
            </button>
            <button
              onClick={() => setCurrentView("drive-thru")}
              style={{
                background: currentView === "drive-thru" ? "white" : "rgba(255,255,255,0.2)",
                color: currentView === "drive-thru" ? "#e53935" : "white", border: "none",
                padding: "8px 16px", borderRadius: "20px", cursor: "pointer", fontWeight: "bold"
              }}
            >
              🚗 Drive-Thru
            </button>
            <button
              onClick={() => setCurrentView("kitchen")}
              style={{
                background: currentView === "kitchen" ? "white" : "rgba(255,255,255,0.2)",
                color: currentView === "kitchen" ? "#e53935" : "white", border: "none",
                padding: "8px 16px", borderRadius: "20px", cursor: "pointer", fontWeight: "bold"
              }}
            >
              🍳 Kitchen
            </button>
          </div>
        </div>
      )}

      {/* Order Status Panel — Always Visible */}
      {orders.length > 0 && currentView !== "exterior" && (
        <div style={{
          position: "absolute", top: "70px", right: "20px", zIndex: 90,
          background: "rgba(255,255,255,0.96)", borderRadius: "16px",
          padding: "15px", width: "280px", boxShadow: "0 4px 15px rgba(0,0,0,0.15)"
        }}>
          <h4 style={{ margin: "0 0 12px 0", color: "#e53935" }}>📋 Active Orders</h4>
          {orders.slice(-3).reverse().map((order) => (
            <div key={order.id} style={{
              padding: "8px 10px", marginBottom: "8px", borderRadius: "10px",
              background: order.status === "delivered" ? "#e8f5e9" : "#fff3e0",
              fontSize: "13px"
            }}>
              <div style={{ fontWeight: "bold" }}>
                {order.tableId ? `Table ${order.tableId}` : "Drive-Thru"}
              </div>
              <div>{order.item} — Rs.{order.price}</div>
              <div style={{ marginTop: "4px", fontSize: "11px", color: "#666" }}>
                {order.timestamp}
              </div>
              <div style={{
                marginTop: "4px", fontSize: "12px", fontWeight: "bold",
                color: order.status === "delivered" ? "#2e7d32" : "#ff9800"
              }}>
                {order.status === "placed" && "✅ Order Placed"}
                {order.status === "preparing" && "📝 Being Prepared"}
                {order.status === "cooking" && "🔥 Cooking Now"}
                {order.status === "ready" && "🍔 Ready for Pickup"}
                {order.status === "delivered" && "✅ Delivered — Enjoy!"}
              </div>
            </div>
          ))}
          <button
            onClick={() => setOrders([])}
            style={{
              marginTop: "10px", width: "100%", padding: "6px",
              background: "#f5f5f5", border: "none", borderRadius: "8px",
              cursor: "pointer", fontSize: "12px", color: "#666"
            }}
          >
            Clear All
          </button>
        </div>
      )}

      {/* Scene Content */}
      {currentView === "exterior" && (
        <ExteriorScene
          onEnterRestaurant={() => setCurrentView("interior")}
          onEnterDriveThru={() => setCurrentView("drive-thru")}
        />
      )}
      {currentView === "interior" && (
        <InteriorScene
          onEnterKitchen={() => setCurrentView("kitchen")}
          addOrder={addOrder}
        />
      )}
      {currentView === "kitchen" && (
        <KitchenScene
          onBack={() => setCurrentView("interior")}
          orders={orders}
        />
      )}
      {currentView === "drive-thru" && (
        <DriveThruScene
          addOrder={addOrder}
        />
      )}
    </div>
  );
}