import React, { useEffect, useRef } from 'react'
import Image from 'next/image';

import VanillaTilt from 'vanilla-tilt';
function CardImages(props) {
    const { options, image } = props;
    const tilt = useRef(null);

    useEffect(() => {
        if (window?.innerWidth > 768) {
            VanillaTilt.init(tilt.current, options);
        }
    }, [options]);

    return (
        <div ref={tilt}>
            <Image  src={image} alt="svg" />
        </div>
    );
}

export default CardImages
