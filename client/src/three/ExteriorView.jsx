export default function ExteriorView() {
  return (
    <group>
      {/* Large Front Window Pane */}
      <mesh position={[0, 2.5, -11.9]}>
        <planeGeometry args={[22, 5]} />
        <meshStandardMaterial color="#e3f2fd" transparent opacity={0.2} />
      </mesh>

      {/* Building Facade */}
      <mesh position={[0, 5.2, -12.1]}>
        <boxGeometry args={[24, 1.5, 0.15]} />
        <meshStandardMaterial color="#ff6f00" emissive="#e65100" emissiveIntensity={0.2} />
      </mesh>

      {/* Main Sign */}
      <group position={[0, 6.2, -12]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[14, 1.8, 0.2]} />
          <meshStandardMaterial color="#e65100" emissive="#ff9800" emissiveIntensity={0.4} />
        </mesh>
        <Html position={[0, 0, 0.15]} center>
          <h2 style={{ 
            color: 'white', 
            margin: 0, 
            fontSize: '1.5rem', 
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            🍔 MOOD MUNCH 🍔
          </h2>
        </Html>
      </group>

      {/* Street & Sky Background */}
      <mesh position={[0, -1, -35]}>
        <planeGeometry args={[80, 40]} />
        <meshStandardMaterial color="#87ceeb" side={2} />
      </mesh>
      <mesh position={[0, -0.5, -32]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[40, 20]} />
        <meshStandardMaterial color="#424242" />
      </mesh>
      {/* Road Markings */}
      {[-6, -2, 2, 6].map((offset, i) => (
        <mesh key={i} position={[offset, 0.02, -32]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.5, 6]} />
          <meshStandardMaterial color="#ffeb3b" />
        </mesh>
      ))}
    </group>
  )
}