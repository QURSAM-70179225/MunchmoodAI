export default function Lighting() {
  return (
    <group>
      <pointLight position={[0, 5, 4]} intensity={50} distance={12} castShadow color="#ffcc80" />
      <pointLight position={[-4, 5, -4]} intensity={40} distance={10} castShadow color="#ffcc80" />
      <pointLight position={[4, 5, -4]} intensity={40} distance={10} castShadow color="#ffcc80" />
      <pointLight position={[0, 5, -4]} intensity={40} distance={10} castShadow color="#ffcc80" />
    </group>
  )
}