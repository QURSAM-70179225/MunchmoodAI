export default function RestaurantWalls() {
  return (
    <group>
      <mesh position={[0, 2.8, -14]} receiveShadow>
        <boxGeometry args={[32, 5.6, 0.3]} />
        <meshStandardMaterial color="#8d6e63" />
      </mesh>
      <mesh position={[-16, 2.8, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[28, 5.6, 0.3]} />
        <meshStandardMaterial color="#a1887f" />
      </mesh>
      <mesh position={[16, 2.8, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[28, 5.6, 0.3]} />
        <meshStandardMaterial color="#a1887f" />
      </mesh>
      {/* Entrance Doors */}
      <mesh position={[0, 1.8, 14]} receiveShadow>
        <boxGeometry args={[4, 3.6, 0.2]} />
        <meshStandardMaterial color="#6d4c41" transparent opacity={0.7} />
      </mesh>
      <Html position={[0, 3.8, 14.2]} center>
        <span style={{ fontSize: '0.8rem', color: '#e65100', fontWeight: 'bold' }}>
          ← ENTRANCE →
        </span>
      </Html>
    </group>
  )
}