import './App.css';
import Header from './Header';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import Scene from './Map';
import * as THREE from 'three'
import { MeshPortalMaterial, OrbitControls, RoundedBox, Text} from '@react-three/drei'

function App() {

  

  return (
    <>
      <Header></Header>
      <div className="App">
          <Canvas shadows camera={{ position: [0, 0, 10], fov:30 }}>
              <color attach="background" args={ ["#ececec"] } />
              <Suspense fallback={null}>
              <OrbitControls />

                  <StageNodel/>
                              
              </Suspense>
          </Canvas>
      </div>
    </>
  )
}

let StageNodel = ()=> {
  let [clickMove, setClickMove] = useState(false)
  return(
      <>
        <Text fontSize={0.3} position={[0, -1.5, 0.5]} color={'#121212'}>Hi</Text>
        <RoundedBox args={clickMove == true ? [10,10,1] : [2, 3, 0.1]} onClick={()=> { setClickMove(!clickMove) }}>
            <MeshPortalMaterial side={THREE.DoubleSide}>
                <ambientLight intensity={2} />
                <Scene  />    
            </MeshPortalMaterial>
        </RoundedBox>
      </>
  )
}

export default App;

