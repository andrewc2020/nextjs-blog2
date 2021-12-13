import React, { useEffect, useRef, useState, ReactNode, ReactPropTypes } from 'react';
import { useLayer, useHover, Arrow } from 'react-laag';
import { motion, AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic';


    
    function Tooltip({ children, content }:any) {
      const [isOver, hoverProps] = useHover();
      const BG_COLOR="rgb(51,51,51)"
      const BORDER_COLOR="#FFFFFF"
    
      const {
        triggerProps,
        layerProps,
        arrowProps,
        renderLayer
      } = useLayer({
        isOpen: isOver,
        placement: 'bottom-start'
        

      });
    
      return (
        <>
          <span {...triggerProps} {...hoverProps}>
            {children}
          </span>
          {isOver &&
            renderLayer(
              <AnimatePresence>
              {isOver && (
                <motion.div
                  className="tooltip-box"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.1 }}
                  {...layerProps}
                >
                  {content}
                  <Arrow
                    {...arrowProps}
                    backgroundColor={BG_COLOR}
                    borderColor={BORDER_COLOR}
                    borderWidth={1}
                    size={6}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            )}
        </>
      );
    }
    function isReactText(children: any) {
      return ["string", "number"].includes(typeof children);
    }
    export default dynamic(() => Promise.resolve(Tooltip), {
      ssr: false
    })