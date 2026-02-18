import { Composition, Folder } from "remotion";
import { ClaudeInterfaceAnimation } from "./ClaudeInterfaceAnimation";

export const RemotionRoot = () => {
  return (
    <Folder name="ClaudeInterface">
      <Composition
        id="ClaudeInterface-PT"
        component={ClaudeInterfaceAnimation}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ language: "pt" as const }}
      />
      <Composition
        id="ClaudeInterface-ES"
        component={ClaudeInterfaceAnimation}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ language: "es" as const }}
      />
      <Composition
        id="ClaudeInterface-EN"
        component={ClaudeInterfaceAnimation}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ language: "en" as const }}
      />
    </Folder>
  );
};
