import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

function Model(props) {
  const { nodes, materials } = useGLTF('/models/scene.glb');
  const texture = useTexture(props.item.img);

  useEffect(() => {
    // Update materials color based on props.item.color
    Object.entries(materials).forEach(([name, material]) => {
      if (!["zFdeDaGNRwzccye", "ujsvqBWRMnqdwPx", "hUlRcbieVuIiOXG", "jlzuBkUzuJqgiAK", "xNrofRCqOXXHVZt"].includes(name)) {
        material.color.set(props.item.color[0]);
        material.needsUpdate = true;
      }
    });
  }, [materials, props.item]);

  return (
    <group {...props} dispose={null}>
      {/* Set up each mesh, using texture on specific materials */}
      {Object.entries(nodes).map(([name, node]) => (
        <mesh
          key={name}
          castShadow
          receiveShadow
          geometry={node.geometry}
          material={materials[node.material.name]}
          scale={0.01}
        >
          {node.material.name === "specificMaterialName" && (
            <meshStandardMaterial attach="material" roughness={1} map={texture} />
          )}
        </mesh>
      ))}
    </group>
  );
}

export default Model;
useGLTF.preload('/models/scene.glb');

