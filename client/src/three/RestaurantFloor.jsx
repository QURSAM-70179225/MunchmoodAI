export default function RestaurantFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[32, 28]} />
      <meshStandardMaterial color="#d7ccc8" />
      {[-12, -8, -4, 4, 8, 12].map((x, i) => (
        <mesh key={`v${i}`} position={[x, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.05, 28]} />
          <meshStandardMaterial color="#bcaaa4" />
        </mesh>
      ))}
      {[-10, -5, 0, 5, 10].map((z, i) => (
        <mesh key={`h${i}`} position={[0, 0.01, z]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[32, 0.05]} />
          <meshStandardMaterial color="#bcaaa4" />
        </mesh>
      ))}
    </mesh>
  )
}