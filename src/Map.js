import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'
import Model from './components/Fish'



export default function Scene() {

    const colorMap = useLoader(TextureLoader, 'anime_art_style_a_water_based_pokemon_like_environ.jpg')

    

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight />
      
      {/* 맵 */}
      <mesh scale={1}>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial
                map={colorMap}
                side={THREE.BackSide}
            />
      </mesh>
      <Model scale={0.6} position={[0, -1, 0]} />
      
    </>
  )
}