import { Environment, Lightformer } from "@react-three/drei";

const Lights = () => {
  return (
    // Group different lights and lightformers for better organization in the scene
    <group name="lights">
      
      {/* Environment creates a background environment for the scene */}
      <Environment resolution={256}>
        <group>
          {/* Lightformer creates custom lights with various shapes and properties */}
          <Lightformer
            form="rect"
            intensity={10}
            position={[-1, 0, -10]}
            scale={10}
            color="#495057"
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[-10, 2, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>

      {/* SpotLight simulates a focused light source with a direction */}
      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        penumbra={1} // softer shadow edge
        decay={0}     // no dimming effect over distance
        intensity={Math.PI * 0.2} // moderate intensity
        color="#f8f9fa"
      />
      <spotLight
        position={[0, -25, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.2}
        color="#f8f9fa"
      />
      <spotLight
        position={[0, 15, 5]}
        angle={0.15}
        penumbra={1}
        decay={0.1} // slight dimming effect
        intensity={Math.PI * 3} // higher intensity
      />
    </group>
  );
};

export default Lights;
