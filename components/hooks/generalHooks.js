import { useState, useRef, useEffect } from "react";

export const useOutsideClick = (initialIsVisible) => {
     const [isVisible, setIsVisible] = useState(initialIsVisible);
     const ref = useRef(null);

     const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
               setIsVisible(false);
          }
     };
     useEffect(() => {
          document.addEventListener("click", handleClickOutside, true);
          return () => {
               document.removeEventListener("click", handleClickOutside, true);
          };
     }, []);
     return { ref, isVisible, setIsVisible };
};

export const useToggle = (initial = false) => {
     const [isActive, setIsActive] = useState(initial)
     const toggle = () => setIsActive(!isActive)
     return { isActive, toggle }
}

export const useDimensions = ref => {
     const dimensions = useRef({ width: 0, height: 0 });

     useEffect(() => {
          dimensions.current.width = ref.current.offsetWidth;
          dimensions.current.height = ref.current.offsetHeight;
     }, []);

     return dimensions.current;
};

export const useWindowWidth = () => {

     const [width, setWidth] = useState(0);

     function getWindowWidth() {
          setWidth(window.innerWidth)
     }

     useEffect(() => {
          getWindowWidth()
          window.addEventListener('resize', getWindowWidth);
          return () => {
               window.removeEventListener('resize', getWindowWidth);
          };
     }, []);

     return width
}