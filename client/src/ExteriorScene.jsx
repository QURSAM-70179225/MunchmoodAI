import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'

export default function ExteriorScene({ onEnterRestaurant, onEnterDriveThru }) {
  return (
    <div style={{ width: '100%', height: '85vh', position: 'relative', background: 'linear-gradient(180deg, #87ceeb 0%, #b3e5fc 100%)' }}>
      <Canvas camera={{ position: [0, 10, 22], fov: 42 }} shadows>
        <ambientLight intensity={0.65} />
        <directionalLight position={[12, 20, 8]} intensity={0.85} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />

        {/* GROUND */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
          <planeGeometry args={[80, 80]} />
          <meshStandardMaterial color="#81c784" />
        </mesh>

        {/* SIDEWALK */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 7]} receiveShadow>
          <planeGeometry args={[40, 4]} />
          <meshStandardMaterial color="#b0bec5" />
        </mesh>

        {/* ROAD */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 16]} receiveShadow>
          <planeGeometry args={[80, 12]} />
          <meshStandardMaterial color="#37474f" />
        </mesh>
        {/* Road markings */}
        {[-25, -15, -5, 5, 15, 25].map((x, i) => (
          <mesh key={i} position={[x, 0.03, 16]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[4, 0.35]} />
            <meshStandardMaterial color="#ffeb3b" />
          </mesh>
        ))}

        {/* RESTAURANT BUILDING */}
        <group position={[0, 0, 0]}>
          {/* Main body */}
          <mesh position={[0, 3.5, 0]} castShadow receiveShadow>
            <boxGeometry args={[18, 7, 14]} />
            <meshStandardMaterial color="#ff7043" />
          </mesh>
          {/* Brick lower trim */}
          <mesh position={[0, 0.8, 7.1]}>
            <boxGeometry args={[18.5, 1.6, 0.3]} />
            <meshStandardMaterial color="#6d4c41" />
          </mesh>
          {/* Flat roof with parapet */}
          <mesh position={[0, 7.2, 0]} castShadow>
            <boxGeometry args={[19, 0.5, 15]} />
            <meshStandardMaterial color="#5d4037" />
          </mesh>
          {/* AC units on roof */}
          {[-5, 0, 5].map((x, i) => (
            <mesh key={i} position={[x, 7.7, -3]} castShadow>
              <boxGeometry args={[2, 0.8, 1.5]} />
              <meshStandardMaterial color="#90a4ae" />
            </mesh>
          ))}

          {/* MAIN SIGN — glowing */}
          <group position={[0, 6.2, 7.2]}>
            <mesh>
              <boxGeometry args={[12, 1.8, 0.4]} />
              <meshStandardMaterial color="#e53935" emissive="#b71c1c" emissiveIntensity={0.35} />
            </mesh>
            <mesh position={[0, 0, 0.22]}>
              <boxGeometry args={[11.5, 1.6, 0.05]} />
              <meshStandardMaterial color="#ffeb3b" emissive="#ffc107" emissiveIntensity={0.2} />
            </mesh>
            <Html position={[0, 0, 0.3]} center>
              <h1 style={{ color: '#e53935', margin: 0, fontSize: '1.6rem', fontWeight: '900', letterSpacing: '1px', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>🍔 MOOD MUNCH 🍟</h1>
            </Html>
          </group>

          {/* FRONT WINDOWS — 3 large */}
          {[-6, 0, 6].map((x, i) => (
            <group key={i} position={[x, 3.2, 7.15]}>
              <mesh><boxGeometry args={[4, 3, 0.15]} /><meshStandardMaterial color="#37474f" /></mesh>
              <mesh position={[0, 0, 0.09]}><boxGeometry args={[3.7, 2.7, 0.05]} /><meshStandardMaterial color="#81d4fa" transparent opacity={0.55} /></mesh>
              {/* Window cross frame */}
              <mesh position={[0, 0, 0.12]}><boxGeometry args={[0.08, 2.7, 0.03]} /><meshStandardMaterial color="#37474f" /></mesh>
              <mesh position={[0, 0, 0.12]}><boxGeometry args={[3.7, 0.08, 0.03]} /><meshStandardMaterial color="#37474f" /></mesh>
            </group>
          ))}

          {/* ENTRANCE DOORS — double glass */}
          <group onClick={onEnterRestaurant} style={{ cursor: 'pointer' }}>
            <mesh position={[0, 1.8, 7.15]} castShadow>
              <boxGeometry args={[3.5, 3.6, 0.2]} />
              <meshStandardMaterial color="#455a64" />
            </mesh>
            <mesh position={[-0.85, 1.8, 7.28]}><boxGeometry args={[1.5, 3.2, 0.05]} /><meshStandardMaterial color="#b3e5fc" transparent opacity={0.6} /></mesh>
            <mesh position={[0.85, 1.8, 7.28]}><boxGeometry args={[1.5, 3.2, 0.05]} /><meshStandardMaterial color="#b3e5fc" transparent opacity={0.6} /></mesh>
            {/* Door handles */}
            <mesh position={[-0.2, 1.8, 7.35]}><boxGeometry args={[0.08, 0.8, 0.08]} /><meshStandardMaterial color="#ffd54f" metalness={0.8} roughness={0.2} /></mesh>
            <mesh position={[0.2, 1.8, 7.35]}><boxGeometry args={[0.08, 0.8, 0.08]} /><meshStandardMaterial color="#ffd54f" metalness={0.8} roughness={0.2} /></mesh>
            {/* Awning */}
            <mesh position={[0, 4.2, 7.8]} castShadow rotation={[0.3, 0, 0]}>
              <boxGeometry args={[5, 0.15, 1.8]} />
              <meshStandardMaterial color="#e53935" />
            </mesh>
            <Html position={[0, 4.8, 7.9]} center>
              <div style={{ background: '#e53935', color: 'white', padding: '8px 18px', borderRadius: '25px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 12px rgba(229,57,53,0.4)' }}>🚪 ENTER RESTAURANT</div>
            </Html>
          </group>

          {/* Drive-thru menu board on side */}
          <group position={[-9.5, 0, 2]}>
            <mesh position={[0, 2.5, 0]} castShadow><boxGeometry args={[0.3, 5, 0.3]} /><meshStandardMaterial color="#5d4037" /></mesh>
            <mesh position={[0, 4, 0.3]} castShadow><boxGeometry args={[2.5, 2.5, 0.2]} /><meshStandardMaterial color="#212121" emissive="#424242" emissiveIntensity={0.3} /></mesh>
            <Html position={[0, 4, 0.45]} center>
              <div style={{ color: 'white', fontSize: '8px', lineHeight: 1.5, textAlign: 'center' }}>
                <div style={{ color: '#ff9800', fontWeight: 'bold', fontSize: '10px' }}>DRIVE-THRU</div>
                <div>🍔 Zinger Rs.350</div>
                <div>🍟 Fries Rs.300</div>
                <div>🍕 Pizza Rs.850</div>
                <div>🥤 Shake Rs.320</div>
              </div>
            </Html>
          </group>
        </group>

        {/* DRIVE-THRU LANE on right side */}
        <group position={[15, 0, 0]}>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]} receiveShadow>
            <planeGeometry args={[7, 28]} />
            <meshStandardMaterial color="#455a64" />
          </mesh>
          {[-3.6, 3.6].map((x, i) => (
            <mesh key={i} position={[x, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[0.25, 28]} />
              <meshStandardMaterial color="#ffeb3b" />
            </mesh>
          ))}
          {/* Order station */}
          <group position={[0, 0, -8]}>
            <mesh position={[0, 2.2, 0]} castShadow><boxGeometry args={[3, 4.4, 0.6]} /><meshStandardMaterial color="#ff9800" /></mesh>
            <mesh position={[0, 3.2, 0.35]}><boxGeometry args={[2.5, 1.5, 0.1]} /><meshStandardMaterial color="#212121" emissive="#424242" emissiveIntensity={0.3} /></mesh>
            <Html position={[0, 3.2, 0.45]} center><div style={{ color: 'white', fontSize: '9px', textAlign: 'center' }}><div style={{ fontWeight: 'bold', color: '#ffeb3b' }}>ORDER HERE</div><div>Speak into mic 🎤</div></div></Html>
            <mesh position={[0.8, 1.2, 0.6]}><sphereGeometry args={[0.22, 12, 12]} /><meshStandardMaterial color="#424242" /></mesh>
          </group>
          {/* Pay window */}
          <group position={[0, 0, 1]}>
            <mesh position={[0, 2.2, 0]} castShadow><boxGeometry args={[3, 4.4, 0.6]} /><meshStandardMaterial color="#ff5722" /></mesh>
            <Html position={[0, 2.2, 0.4]} center><span style={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}>💳 PAY</span></Html>
          </group>
          {/* Pickup window */}
          <group position={[0, 0, 9]}>
            <mesh position={[0, 2.2, 0]} castShadow><boxGeometry args={[3, 4.4, 0.6]} /><meshStandardMaterial color="#e53935" /></mesh>
            <Html position={[0, 2.2, 0.4]} center><span style={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}>🍔 PICKUP</span></Html>
          </group>
          {/* Exit sign */}
          <Html position={[0, 0.8, 14]} center>
            <div style={{ background: '#4caf50', color: 'white', padding: '6px 14px', borderRadius: '15px', fontSize: '11px', fontWeight: 'bold' }}>➡️ EXIT</div>
          </Html>
          {/* Clickable entry */}
          <group onClick={onEnterDriveThru} style={{ cursor: 'pointer' }}>
            <Html position={[0, 1, -14]} center>
              <div style={{ background: '#e53935', color: 'white', padding: '10px 20px', borderRadius: '25px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 12px rgba(229,57,53,0.4)' }}>🚗 ENTER DRIVE-THRU →</div>
            </Html>
          </group>
        </group>

        {/* PARKING LOT with lines */}
        {[-8, -4.5, -1, 2.5, 6].map((x, i) => (
          <mesh key={i} position={[x, 0.02, 11]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[2.8, 5.5]} />
            <meshStandardMaterial color="#78909c" />
          </mesh>
        ))}
        {/* Parked cars */}
        {[-8, 2.5].map((x, i) => (
          <group key={i} position={[x, 0, 11]}>
            <mesh position={[0, 0.5, 0]} castShadow><boxGeometry args={[2, 0.6, 3.2]} /><meshStandardMaterial color={i === 0 ? '#c62828' : '#2e7d32'} /></mesh>
            <mesh position={[0, 0.95, -0.3]} castShadow><boxGeometry args={[1.7, 0.5, 1.8]} /><meshStandardMaterial color={i === 0 ? '#b71c1c' : '#1b5e20'} /></mesh>
          </group>
        ))}

        {/* STREET LIGHTS */}
        {[-12, 12].map((x, i) => (
          <group key={i} position={[x, 0, 13]}>
            <mesh position={[0, 3, 0]} castShadow><cylinderGeometry args={[0.08, 0.1, 6, 8]} /><meshStandardMaterial color="#455a64" /></mesh>
            <mesh position={[0, 6, 0.5]} castShadow><boxGeometry args={[1.2, 0.15, 0.4]} /><meshStandardMaterial color="#455a64" /></mesh>
            <mesh position={[0, 5.9, 0.7]}><sphereGeometry args={[0.2, 8, 8]} /><meshStandardMaterial color="#fff9c4" emissive="#ffeb3b" emissiveIntensity={0.6} /></mesh>
          </group>
        ))}

        {/* TREES & BUSHES */}
        {[-14, -11, 11, 14].map((x, i) => (
          <group key={i} position={[x, 0, i < 2 ? -6 : 10]}>
            <mesh position={[0, 1.2, 0]} castShadow><cylinderGeometry args={[0.25, 0.35, 2.4, 8]} /><meshStandardMaterial color="#5d4037" /></mesh>
            <mesh position={[0, 3.2, 0]} castShadow><sphereGeometry args={[1.5, 12, 12]} /><meshStandardMaterial color="#388e3c" /></mesh>
            <mesh position={[0.8, 2.8, 0.3]} castShadow><sphereGeometry args={[0.9, 12, 12]} /><meshStandardMaterial color="#43a047" /></mesh>
          </group>
        ))}
        {/* Bushes along building */}
        {[-7, -4, 4, 7].map((x, i) => (
          <mesh key={i} position={[x, 0.4, 6.5]} castShadow>
            <sphereGeometry args={[0.5, 10, 10]} />
            <meshStandardMaterial color="#66bb6a" />
          </mesh>
        ))}

        {/* DUMPSTER */}
        <group position={[-12, 0, -5]}>
          <mesh position={[0, 0.8, 0]} castShadow><boxGeometry args={[2.5, 1.6, 1.8]} /><meshStandardMaterial color="#00695c" /></mesh>
          <mesh position={[0, 1.7, 0]} castShadow><boxGeometry args={[2.7, 0.15, 2]} /><meshStandardMaterial color="#004d40" /></mesh>
        </group>

        <pointLight position={[0, 8, 8]} intensity={30} distance={20} color="#fff8e1" />

        <OrbitControls enablePan={false} minDistance={12} maxDistance={35} minPolarAngle={Math.PI / 6} maxPolarAngle={Math.PI / 2.3} enableDamping dampingFactor={0.05} />
      </Canvas>

      <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.95)', padding: '12px 24px', borderRadius: '20px', fontSize: '14px', color: '#555', boxShadow: '0 4px 15px rgba(0,0,0,0.15)' }}>
        👆 Click <strong style={{ color: '#e53935' }}>🚪 ENTER RESTAURANT</strong> or <strong style={{ color: '#e53935' }}>🚗 ENTER DRIVE-THRU</strong>
      </div>
    </div>
  )
}