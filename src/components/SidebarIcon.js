import React from 'react';

const SidebarIcon = ({ path, viewBox = "0 0 64 64", width = "18", height = "18" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} style={{ enableBackground: "new 0 0 512 512" }}>
            <g>
                <path d={path} fill="#000000" opacity="1" data-original="#000000"></path>
            </g>
        </svg>
    );
};

export default SidebarIcon;
