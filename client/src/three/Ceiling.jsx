export default function Ceiling() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 5.6, 0]}>
      <planeGeometry args={[32, 28]} />
      <meshStandardMaterial color="#efebe9" />
    </mesh>
  )
}