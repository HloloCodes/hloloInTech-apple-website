import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { yellowImg } from "@/utils";
import * as THREE from 'three';

// Error Boundary Component to catch errors in Model
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error in Model component: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong with the model display!</h1>;
    }
    return this.props.children;
  }
}

const Model = () => {
  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'iPhone 15Pro in Natural Titanium',
    color: ['#8H8A81', '#FFE7B9', '#6f6c64'],
    img: yellowImg,
  });

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    if (size === 'large') {
      animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
        transform: 'translateX(-100%)',
        duration: 2
      });
    }

    if (size === 'small') {
      animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
        transform: 'translateX(0)',
        duration: 2
      });
    }
  }, [size]);

  useEffect(() => {
    gsap.to('#heading', { y: 0, opacity: 1 });
  }, []);

  return (
    <ErrorBoundary>
      <section className="common-padding">
        <div className="screen-max-width">
          <h1 className="section">Take a closer look.</h1>
          <div className="flex flex-col items-center mt-5">
            <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
              <ModelView
                index={1}
                groupRef={small}
                gsapType="view1"
                controlRef={cameraControlSmall}
                setRotation={setSmallRotation}
                item={model}
                size={size}
              />

              <ModelView
                index={2}
                groupRef={large}
                gsapType="view2"
                controlRef={cameraControlLarge}
                setRotation={setLargeRotation}
                item={model}
                size={size}
              />

              <canvas
                className="w-full h-full"
                style={{
                  position: 'fixed',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  overflow: 'hidden',
                }}
              />
            </div>

            <div className="mx-auto w-full">
              <p className="text-sm font-light text-center mb-5">{model.title}</p>

              <div className="flex-center">
                <ul className="color-container">
                  {model.color.map((color, i) => (
                    <li
                      key={i}
                      className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                      style={{ backgroundColor: color }}
                      onClick={() => setModel({ ...model, color })}
                    />
                  ))}
                </ul>

                <button className="size-btn-container">
                  {['small', 'large'].map((value) => (
                    <span
                      key={value}
                      className="size-btn"
                      style={{
                        backgroundColor: size === value ? 'white' : 'transparent',
                        color: size === value ? 'black' : 'white'
                      }}
                      onClick={() => setSize(value)}
                    >
                      {value}
                    </span>
                  ))}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Model;
