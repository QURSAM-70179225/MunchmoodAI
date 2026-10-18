export default function Tables() {
  const tablePositions = [
    [-4, 0, -4], [4, 0, -4], [0, 0, 4],
    [-3, 0, 1], [3, 0, 1], [-6, 0, -1], [6, 0, -1]
  ]
  return (
    <group>
      {tablePositions.map((pos, i) => (
        <group key={i} position={pos}>
          <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[1.2, 1.2, 0.15, 32]} />
            <meshStandardMaterial color="#5d4037" />
          </mesh>
          <mesh position={[0, 0.35, 0]} castShadow>
            <cylinderGeometry args={[0.12, 0.12, 0.8, 16]} />
            <meshStandardMaterial color="#4e342e" />
          </mesh>
        </group>
      ))}
    </group>
  )
}