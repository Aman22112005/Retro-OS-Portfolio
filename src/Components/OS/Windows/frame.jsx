import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import { Resizable } from "react-resizable";

const WindowFrame = () => {
  const [Dimensions, setDimensions] = useState({
    width: 200,
    height: 200,
  });

  const onResize = (event, { node, size, handle }) => {
    setDimensions({ width: size.width, height: size.height });
  };
  const noderef = useRef(null);
  return (
    <div>
      <Draggable nodeRef={noderef} handle=".window-titlebar">
        <Resizable
          height={Dimensions.height}
          width={Dimensions.width}
          onResize={onResize}
        >
          <div
            className="absolute top-10 left-10 z-50 flex flex-col shadow-md"
            ref={noderef}
            style={{ width: Dimensions.width, height: Dimensions.height }}
          >
            <div className="window-titlebar bg-os-muted border-os-taskbar flex cursor-move flex-row justify-between border px-2 py-1 select-none">
              <div className="text-sm font-bold">Title</div>
              <div className="cursor-pointer font-bold">X</div>
            </div>

            <div className="h-full w-full border bg-white p-2">
              Window Content
            </div>
          </div>
        </Resizable>
      </Draggable>
    </div>
  );
};

export default WindowFrame;
