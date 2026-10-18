export default function Counter() {
  return (
    <group position={[0, 0, 7]}>
      {/* Counter Base */}
      <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
        <boxGeometry args={[12, 1.2, 2.5]} />
        <meshStandardMaterial color="#d7ccc8" />
      </mesh>
      {/* Counter Top */}
      <mesh position={[0, 1.55, 0.3]} castShadow receiveShadow>
        <boxGeometry args={[12.5, 0.15, 2.8]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
      {/* Back Wall / Kitchen */}
      <mesh position={[0, 2.2, -1]} castShadow receiveShadow>
        <boxGeometry args={[11.5, 2, 0.3]} />
        <meshStandardMaterial color="#eceff1" />
      </mesh>
      {/* Menu Board */}
      <mesh position={[0, 3.2, -0.8]}>
        <boxGeometry args={[8, 1.5, 0.1]} />
        <meshStandardMaterial color="#212121" emissive="#424242" emissiveIntensity={0.3} />
      </mesh>
      <Html position={[0, 3.2, -0.7]} center>
        <div style={{ color: 'white', textAlign: 'center', fontSize: '0.6rem', padding: '5px' }}>
          <div style={{ fontWeight: 'bold', color: '#ff9800' }}>MENU</div>
          <div>Zinger Burger — Rs. 350</div>
          <div>Loaded Fries — Rs. 300</div>
          <div>Pepperoni Pizza — Rs. 850</div>
          <div>Oreo Shake — Rs. 320</div>
        </div>
      </Html>
      {/* POS Terminal */}
      <mesh position={[4, 1.8, 0.5]} castShadow>
        <boxGeometry args={[0.8, 0.6, 0.2]} />
        <meshStandardMaterial color="#424242" />
      </mesh>
      {/* Pickup Zone Marker */}
      <mesh position={[0, 1.56, 1.2]}>
        <boxGeometry args={[3, 0.02, 1.5]} />
        <meshStandardMaterial color="#ffcc80" transparent opacity={0.4} />
      </mesh>
      <Html position={[0, 1.7, 1.2]} center>
        <span style={{ fontSize: '0.6rem', color: '#e65100', fontWeight: 'bold' }}>
          PICKUP
        </span>
      </Html>
    </group>
  )
}