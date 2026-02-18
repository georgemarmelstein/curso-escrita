import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";

type AnnotationProps = {
  label: string;
  description: string;
  x: number;
  y: number;
  anchorX: number;
  anchorY: number;
  labelPosition: "left" | "right" | "top" | "bottom";
  highlighted?: boolean;
};

export const Annotation = ({
  label,
  description,
  x,
  y,
  anchorX,
  anchorY,
  labelPosition,
  highlighted = true,
}: AnnotationProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Spring animation for entrance
  const progress = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  // Pulse animation for the dot (only for highlighted)
  const pulseProgress = spring({
    frame: frame % (fps * 2),
    fps,
    config: { damping: 200 },
  });

  const pulseScale = interpolate(pulseProgress, [0, 1], [1, 1.3]);
  const pulseOpacity = interpolate(pulseProgress, [0, 1], [0.6, 0]);

  // Calculate label offset based on position
  const labelOffsets = {
    left: { x: highlighted ? -220 : -160, y: 0 },
    right: { x: 30, y: 0 },
    top: { x: 0, y: highlighted ? -80 : -55 },
    bottom: { x: 0, y: highlighted ? 50 : 35 },
  };

  const offset = labelOffsets[labelPosition];

  // Line coordinates
  const labelX = x + offset.x;
  const labelY = y + offset.y;

  // Animation values
  const dotScale = interpolate(progress, [0, 1], [0, 1]);
  const lineProgress = interpolate(progress, [0.2, 0.7], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const labelOpacity = interpolate(progress, [0.5, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const labelTranslateY = interpolate(progress, [0.5, 1], [10, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Colors - diferentes para highlighted e nao-highlighted
  const primaryColor = highlighted ? "#BE9C6D" : "#888888";
  const secondaryColor = highlighted ? "#194A68" : "#666666";
  const bgColor = highlighted ? "rgba(25, 74, 104, 0.95)" : "rgba(80, 80, 80, 0.85)";
  const borderColor = highlighted ? "#BE9C6D" : "#aaaaaa";

  // Tamanhos - menores para nao-highlighted
  const dotSize = highlighted ? 16 : 10;
  const pulseSize = highlighted ? 30 : 20;
  const fontSize = highlighted ? 15 : 12;
  const descFontSize = highlighted ? 12 : 10;
  const padding = highlighted ? "10px 16px" : "6px 10px";
  const minWidth = highlighted ? 160 : 100;
  const maxWidth = highlighted ? 200 : 140;

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
      {/* SVG for line */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <defs>
          <linearGradient id={`gradient-${label}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>
        <line
          x1={anchorX}
          y1={anchorY}
          x2={anchorX + (labelX - anchorX) * lineProgress}
          y2={anchorY + (labelY - anchorY) * lineProgress}
          stroke={primaryColor}
          strokeWidth={highlighted ? 2 : 1}
          strokeDasharray={highlighted ? "4,4" : "3,3"}
          opacity={highlighted ? 0.8 : 0.5}
        />
      </svg>

      {/* Pulse ring - only for highlighted */}
      {highlighted && (
        <div
          style={{
            position: "absolute",
            left: anchorX - pulseSize / 2,
            top: anchorY - pulseSize / 2,
            width: pulseSize,
            height: pulseSize,
            borderRadius: "50%",
            border: `2px solid ${primaryColor}`,
            transform: `scale(${pulseScale})`,
            opacity: pulseOpacity * dotScale,
          }}
        />
      )}

      {/* Anchor dot */}
      <div
        style={{
          position: "absolute",
          left: anchorX - dotSize / 2,
          top: anchorY - dotSize / 2,
          width: dotSize,
          height: dotSize,
          backgroundColor: primaryColor,
          borderRadius: "50%",
          transform: `scale(${dotScale})`,
          boxShadow: highlighted ? `0 0 20px ${primaryColor}80` : "none",
        }}
      />

      {/* Label card */}
      <div
        style={{
          position: "absolute",
          left: labelPosition === "left" ? labelX - (highlighted ? 180 : 120) : labelX,
          top: labelPosition === "top" ? labelY - (highlighted ? 60 : 40) : labelY,
          opacity: labelOpacity,
          transform: `translateY(${labelTranslateY}px)`,
        }}
      >
        <div
          style={{
            backgroundColor: bgColor,
            borderRadius: highlighted ? 8 : 6,
            padding: padding,
            borderLeft: `${highlighted ? 4 : 3}px solid ${borderColor}`,
            boxShadow: highlighted ? "0 4px 20px rgba(0, 0, 0, 0.4)" : "0 2px 10px rgba(0, 0, 0, 0.3)",
            minWidth: minWidth,
            maxWidth: maxWidth,
          }}
        >
          <div
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: fontSize,
              fontWeight: highlighted ? 600 : 500,
              color: "#ffffff",
              marginBottom: highlighted ? 4 : 2,
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: descFontSize,
              color: highlighted ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.6)",
              lineHeight: 1.4,
            }}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
