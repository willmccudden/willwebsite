import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({ children, width = "fit-content" }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        } else {
            mainControls.start("hidden")
        }
    }, [isInView]);

    return (
        <div ref = {ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 0 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition= {{duration : 1, delay: 0.25}}
            >
                {children}
            </motion.div>
        </div>
    )
}