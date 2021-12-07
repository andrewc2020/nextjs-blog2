import React, { useEffect, useRef, useState, ReactNode, ReactPropTypes } from 'react';
import { useLayer, useHover, Arrow } from 'react-laag';
import dynamic from 'next/dynamic'

    
    function Tooltip({ children, content }:any) {
      const [isOver, hoverProps] = useHover();
    
      const {
        triggerProps,
        layerProps,
        arrowProps,
        renderLayer
      } = useLayer({
        isOpen: isOver
      });
    
      return (
        <>
          <span {...triggerProps} {...hoverProps}>
            {children}
          </span>
          {isOver &&
            renderLayer(
              <div className="tooltip" {...layerProps}>
                {content}
                <Arrow {...arrowProps} />
              </div>
            )}
        </>
      );
    }

    export default dynamic(() => Promise.resolve(Tooltip), {
      ssr: false
    })