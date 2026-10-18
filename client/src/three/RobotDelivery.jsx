import MunchBot from './MunchBot'

export default function RobotDelivery({ position, active }) {
  return (
    <group position={position}>
      <MunchBot position={[0, 0, 0]} />
      {/* Food Tray when active */}
      {active && (
        <group position={[0, 1.05, 0.6]}>
          <mesh>
            <boxGeometry args={[0.8, 0.06, 0.5]} />
            <meshStandardMaterial color="#fff" />
          </mesh>
          {/* Burger on tray */}
          <mesh position={[0, 0.12, 0]}>
            <boxGeometry args={[0.35, 0.15, 0.35]} />
            <meshStandardMaterial color="#8d6e63" />
          </mesh>
          <mesh position={[0, 0.22, 0]}>
            <boxGeometry args={[0.3, 0.08, 0.3]} />
            <meshStandardMaterial color="#ffcc80" />
          </mesh>
          <mesh position={[0.25, 0.15, 0]}>
            <boxGeometry args={[0.15, 0.25, 0.15]} />
            <meshStandardMaterial color="#ffcc80" />
          </mesh>
        </group>
      )}
    </group>
  )
}