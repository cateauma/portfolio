import React, { useState } from "react";

export default function ImageWithFallback({ src, alt = "image", className = "", fallback = "/assets/fallback.png" }) {
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={hasError ? fallback : src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
