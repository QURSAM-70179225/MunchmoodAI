export default function Chairs() {
  const chairPositions = [
    [-4, 0.5, -2.5], [4, 0.5, -2.5], [0, 0.5, 5.5],
    [-1.5, 0.5, 4], [1.5, 0.5, 4], [-5.5, 0.5, 1], [5.5, 0.5, 1],
    [-3, 0.5, -5.5], [3, 0.5, -5.5], [-6, 0.5, -2.5], [6, 0.5, -2.5]
  ]
  return (
    <group>
      {chairPositions.map((pos, i) => (
        <group key={i} position={pos}>
          <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.7, 0.08, 0.7]} />
            <meshStandardMaterial color="#8d6e63" />
          </mesh>
          <mesh position={[0, 0.85, -0.32]} castShadow>
            <boxGeometry args={[0.7, 0.9, 0.08]} />
            <meshStandardMaterial color="#795548" />
          </mesh>
        </group>
      ))}
    </group>
  )
}