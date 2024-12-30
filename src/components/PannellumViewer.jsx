import React, { useEffect, useRef } from "react";

const PannellumViewer = ({ config, panorama }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    // const viewer = new Pannellum.Viewer(viewerRef.current, {
    //   ...config,
    //   // panorama,
    // });
    // return () => {
    //   viewer.destroy();
    // };
    console.log(
      window.pannellum.viewer("pannellum", {
        ...config,
        autoLoad: true,
        haov: 1000,
        hfov: 1000,
      })
    );
    // pannellum.viewer(viewerRef, ...config);
  }, [config, panorama]);

  return (
    <div
      id="pannellum"
      ref={viewerRef}
      style={{
        width: "100%",
        height: "100vh",
      }}
    />
  );
};

export default PannellumViewer;