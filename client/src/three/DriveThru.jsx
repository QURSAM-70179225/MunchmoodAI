export default function DriveThru({ visible }) {
  if (!visible) return null
  
  return (
    <group position={[14, 0, -4]}>
      {/* Lane Surface */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 22]} />
        <meshStandardMaterial color="#616161" />
      </mesh>
      {/* Lane Border */}
      {[-3.1, 3.1].map((x, i) => (
        <mesh key={i} position={[x, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.2, 22]} />
          <meshStandardMaterial color="#ffeb3b" />
        </mesh>
      ))}
      {/* Order Station */}
      <group position={[0, 0, -6]}>
        <mesh position={[0, 2, 0]}>
          <boxGeometry args={[3, 4, 0.4]} />
          <meshStandardMaterial color="#ff6f00" />
        </mesh>
        <Html position={[0, 2.5, 0.3]} center>
          <div style={{ color: 'white', textAlign: 'center', fontSize: '0.7rem' }}>
            🎤 ORDER HERE
          </div>
        </Html>
        <mesh position={[0, 1.2, 1.5]}>
          <sphereGeometry args={[0.25, 12, 12]} />
          <meshStandardMaterial color="#424242" />
        </mesh>
      </group>
      {/* Payment Window */}
      <group position={[0, 0, 2]}>
        <mesh position={[0, 1.8, 0]}>
          <boxGeometry args={[3, 3.5, 0.4]} />
          <meshStandardMaterial color="#ff9800" />
        </mesh>
        <Html position={[0, 2, 0.3]} center>
          <div style={{ color: 'white', fontSize: '0.7rem' }}>💳 PAY</div>
        </Html>
      </group>
      {/* Pickup Window */}
      <group position={[0, 0, 8]}>
        <mesh position={[0, 1.8, 0]}>
          <boxGeometry args={[3, 3.5, 0.4]} />
          <meshStandardMaterial color="#e65100" />
        </mesh>
        <Html position={[0, 2, 0.3]} center>
          <div style={{ color: 'white', fontSize: '0.7rem' }}>🍔 FOOD</div>
        </Html>
      </group>
      {/* Exit Arrow */}
      <Html position={[0, 0.3, 12]} center>
        <div style={{ fontSize: '1.5rem' }}>➡️ EXIT</div>
      </Html>
    </group>
  )
}