'use client';

import React, { useEffect, useState } from 'react';

function Gallary() {
    const [gallaryImage, setGallaryImage] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/Gallary_api')
            .then(res => res.json())
            .then(data => setGallaryImage(data));
    }, []);

    return (
        <div className="max-w-[1596px] mx-auto bg-white pt-20 px-4">
            <div className="grid grid-cols-12 gap-4 pb-16">
                {gallaryImage.map((item, index) => (
                    <React.Fragment key={item._id || index}>
                        {/* Main Image */}
                        <div
                            style={{ gridColumn: `span ${item.Image_Width} / span ${item.Image_Width}` }}
                            className="rounded-xl"
                        >
                            <img
                                src={item.Gallary_Image}
                                alt="main"
                                className="w-full h-[450px]  rounded-2xl"
                            />
                        </div>

                        {/* Dynamic Sections */}
                        {item.dynamicDescriptions?.map((desc, i) => (
                            <div
                                key={i}
                                style={{ gridColumn: `span ${desc.image_width} / span ${desc.image_width}` }}
                                className="rounded-xl"
                            >
                                <img
                                    src={desc.gallary_image}
                                    alt="dynamic"
                                    className="w-full h-[450px]  rounded-2xl"
                                />
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>

        </div>
    );
}

export default Gallary;
