import React from "react";

const VideoBG = () => {
  return (
    <>
      <div className="h-full">
        <video autoPlay className="w-screen h-screen object-cover" loop muted>
          <source src="/videos/bg-video.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default VideoBG;
