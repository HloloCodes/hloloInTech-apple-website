import { useGSAP } from "gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView3";
import { yellowImg } from "../utils";
import * as THREE from 'three';

const Model = () => {
  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'iPhone 15Pro in Natural Titanium',
    color: ['#8H8A81', '#FFE7B9', '#6f6c64'],
    img: yellowImg,
  })

  // camera control for the model view

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  //model
  const small = useREf(new THREE.Group());
  const large = useRef(new THREE.Group()); 

  //.rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);


  const tl = gsap.timeline();

  useEffect(() => {
    if(size === 'large') {
        animateWithGsapTimeline(tl, small, smallRotation,
           '#view1', '#view2'{
          transform: 'translateX(-100%)',
          duration: 2
        }) 
       
    }

    if(size === 'small'){
      animateWithGsapTimeline(tl, large, largeRotation,
         '#view2', '#view1'{
        transform: 'translateX(0)',
        duration: 2
       })
      }
    }, [size])

   useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1 })
    }, []);

    return (
       <section className="common-padding">
     <div className="screen-max-width">
       <h1 className="section">Take a closer look.</h1>
     <div className="flex flex-col items-center mt-5">
      <div className="w-ful h-[75vh] md:h-[90vh] overflow-hidden relative">
        <ModelView
        index = {1}
        groupRef={small}
        gsapType="view1" 
        controlRef={cameraControlSmall}
        setRotation={setSmallRotation}
        item={model}
        size={size} 
        />

<ModelView
        index = {2}
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
       eventSource={document.getElementById('root')};

       >
        <View.Port />
       </canvas>
      </div>

      <div className="mx-aut w-full">
        <p
        className="text-sm font-light text-center mb-5"
        >{model.title}</p>

    <div className="flex-center">
      <ul className="color-container">
     {models.map((item, i) => (
      <li key={i} className="w-6 h-6 
      rounded-full mx-2 cursor-pointer" dtyle={{
        backgroundColor: item.color[0] }}
        onClick={() => setModel(item)} />
     ))}
      </ul>

      <button className="size-btn-container">
       {size.map(({ label, value }) => (
        <span key={label} className="size-btn"
        style={{ backgroundColor: size === value
          ? 'white' : 'transparent',
          color: size === value ? 'black' : 'white'
          }} onClick={() => setSize(value)}>
          {label}
        </span>
       ))}

      </button>
    </div>

      </div>

     </div>
   </div>
    </section>
    
  )
}

export default Model
