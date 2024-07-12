import React from "react";
import { NexLoaderProps } from "./NexLoader.types";
import "./NexLoader.scss"

/**
 * NexLoader component
 *
 * A customizable loader component that displays a spinning circle.
 *
 * @param {number} [size] - The size of the loader in pixels.
 * @param {string} [color] - The color of the loader circle.
 */
const NexLoader: React.FC<NexLoaderProps> = ({ size, color }) => {
  return (
    <svg className="nex-loader" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" />
    </svg>
  );
};

export default NexLoader;