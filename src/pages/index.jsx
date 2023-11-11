import { ToyotaSupra } from "@/components/Models/ToyotaSupra";

import {
  AccumulativeShadows,
  Center,
  Environment,
  OrbitControls,
  RandomizedLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";

export default function Home() {
  const { body } = useControls({
    body: "#d3d3d3",
  });

  return (
    <div className="main">
      <Canvas shadows camera={{ position: [-2, 1, -3], fov: 40 }}>
        <group>
          <Center top>
            <ToyotaSupra body={body} />
          </Center>
          <AccumulativeShadows>
            <RandomizedLight position={[2, 5, 1]} />
          </AccumulativeShadows>
        </group>
        <Environment preset="forest" background blur={1} />
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
