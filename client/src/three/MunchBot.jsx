export default function MunchBot({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* Body */}
      <mesh position={[0, 0.9, 0]} castShadow>
        <capsuleGeometry args={[0.45, 0.7, 8, 16]} />
        <meshStandardMaterial color="#ff9800" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.75, 0]} castShadow>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color="#ffb74d" metalness={0.2} roughness={0.5} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.12, 1.8, 0.28]}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial color="#212121" />
      </mesh>
      <mesh position={[0.12, 1.8, 0.28]}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial color="#212121" />
      </mesh>

      {/* Smile */}
      <mesh position={[0, 1.65, 0.3]} rotation={[Math.PI * 0.1, 0, 0]}>
        <torusGeometry args={[0.12, 0.02, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#e64a19" />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, 2.15, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.25, 8]} />
        <meshStandardMaterial color="#795548" />
      </mesh>
      <mesh position={[0, 2.3, 0]}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial color="#ffeb3b" emissive="#ffc107" emissiveIntensity={0.8} />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.55, 1.1, 0]} rotation={[0, 0, Math.PI / 5]} castShadow>
        <capsuleGeometry args={[0.08, 0.4, 6, 12]} />
        <meshStandardMaterial color="#ff9800" />
      </mesh>
      <mesh position={[0.55, 1.1, 0]} rotation={[0, 0, -Math.PI / 5]} castShadow>
        <capsuleGeometry args={[0.08, 0.4, 6, 12]} />
        <meshStandardMaterial color="#ff9800" />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.2, 0.3, 0]} castShadow>
        <capsuleGeometry args={[0.1, 0.4, 6, 12]} />
        <meshStandardMaterial color="#e65100" />
      </mesh>
      <mesh position={[0.2, 0.3, 0]} castShadow>
        <capsuleGeometry args={[0.1, 0.4, 6, 12]} />
        <meshStandardMaterial color="#e65100" />
      </mesh>
    </group>
  )
}