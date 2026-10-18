export default function TableQR({ onScan, active }) {
  const tables = [
    { id: 1, pos: [-4, 0.76, -4] },
    { id: 2, pos: [4, 0.76, -4] },
    { id: 3, pos: [0, 0.76, 4] },
    { id: 4, pos: [-3, 0.76, 1] },
    { id: 5, pos: [3, 0.76, 1] },
  ]

  return (
    <group>
      {tables.map(table => (
        <group key={table.id} position={table.pos}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[0.5, 0.5]} />
            <meshStandardMaterial color={active ? '#e65100' : '#f5f5f5'} />
          </mesh>
          <Html position={[0, 0.02, 0]} center>
            <div style={{ 
              fontSize: '0.5rem', 
              color: active ? 'white' : '#666',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              QR{table.id}
            </div>
          </Html>
        </group>
      ))}
    </group>
  )
}