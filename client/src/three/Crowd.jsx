export default function Crowd({ density = 'normal' }) {
  const people = [
    { pos: [-4, 0, -4], sitting: true, color: '#f44336' },
    { pos: [4, 0, -4], sitting: true, color: '#2196f3' },
    { pos: [0, 0, 3], sitting: true, color: '#4caf50' },
  ]
  
  if (density === 'busy') {
    people.push(
      { pos: [-3, 0, 1], sitting: true, color: '#9c27b0' },
      { pos: [3, 0, 1], sitting: true, color: '#ff9800' },
      { pos: [-5, 0, 0], sitting: false, color: '#3f51b5' },
    )
  }

  return (
    <group>
      {people.map((p, i) => (
        <group key={i} position={p.pos}>
          {/* Head */}
          <mesh position={[0, p.sitting ? 1.1 : 1.6, 0]}>
            <sphereGeometry args={[0.22, 12, 12]} />
            <meshStandardMaterial color="#ffcc80" />
          </mesh>
          {/* Body */}
          <mesh position={[0, p.sitting ? 0.7 : 1.1, 0]}>
            <capsuleGeometry args={[0.2, p.sitting ? 0.25 : 0.6, 4, 8]} />
            <meshStandardMaterial color={p.color} />
          </mesh>
          {/* Plate on table if sitting */}
          {p.sitting && (
            <mesh position={[0, 0.86, 0.5]}>
              <cylinderGeometry args={[0.25, 0.25, 0.03, 16]} />
              <meshStandardMaterial color="#fff" />
            </mesh>
          )}
        </group>
      ))}
    </group>
  )
}