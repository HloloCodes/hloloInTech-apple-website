import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap'; // Import GSAP for animations
import Loader from './Loader';
import Lights from './Lights';
import IPhone from './IPhone';
import { Suspense, useEffect } from 'react';

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  // Animation using GSAP to rotate the model continuously
  useEffect(() => {
    // Animate the group rotation based on the ref
    if (groupRef.current) {
      gsap.to(groupRef.current.rotation, {
        x: Math.PI * 2,
        duration: 5,
        repeat: -1,  // This will repeat the animation infinitely
        ease: 'linear', // Smooth continuous rotation
      });
    }
  }, [groupRef]);

  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.8} />

      {/* Perspective Camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      {/* Lighting */}
      <Lights />

      {/* Orbit Controls */}
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      {/* Group with Conditional Name */}
      <group
        ref={groupRef}
        name={index === 1 ? 'small' : 'large'} // Corrected ternary logic
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
