import {
  AbsoluteFill,
  Img,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { Annotation } from "./Annotation";

type AnnotationData = {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
  anchorX: number;
  anchorY: number;
  labelPosition: "left" | "right" | "top" | "bottom";
  startFrame: number;
  highlighted?: boolean;
};

type Language = "pt" | "es" | "en";

type Translations = {
  title: string;
  annotations: {
    [key: string]: {
      label: string;
      description: string;
    };
  };
};

const translations: Record<Language, Translations> = {
  pt: {
    title: "Interface do Claude",
    annotations: {
      "nova-conversa": { label: "Nova Conversa", description: "Clique para iniciar um novo bate-papo com Claude" },
      "input": { label: "Campo de Mensagem", description: "Digite sua pergunta ou instrucao aqui" },
      "anexo": { label: "Anexar Arquivo", description: "Adicione imagens, PDFs ou documentos" },
      "modelo": { label: "Seletor de Modelo", description: "Escolha entre Opus, Sonnet ou Haiku" },
      "logo": { label: "Logo Claude", description: "Identidade visual" },
      "busca": { label: "Procurar", description: "Pesquisar conversas" },
      "projetos": { label: "Projetos", description: "Organizar em projetos" },
      "recentes": { label: "Recentes", description: "Conversas recentes" },
      "config": { label: "Configuracoes", description: "Conta e preferencias" },
      "voice": { label: "Entrada de Voz", description: "Conversar por audio" },
      "anonimizar": { label: "Anonimizar", description: "Ocultar dados pessoais" },
    },
  },
  es: {
    title: "Interfaz de Claude",
    annotations: {
      "nova-conversa": { label: "Nueva Conversacion", description: "Haz clic para iniciar un nuevo chat con Claude" },
      "input": { label: "Campo de Mensaje", description: "Escribe tu pregunta o instruccion aqui" },
      "anexo": { label: "Adjuntar Archivo", description: "Agrega imagenes, PDFs o documentos" },
      "modelo": { label: "Selector de Modelo", description: "Elige entre Opus, Sonnet o Haiku" },
      "logo": { label: "Logo Claude", description: "Identidad visual" },
      "busca": { label: "Buscar", description: "Buscar conversaciones" },
      "projetos": { label: "Proyectos", description: "Organizar en proyectos" },
      "recentes": { label: "Recientes", description: "Conversaciones recientes" },
      "config": { label: "Configuracion", description: "Cuenta y preferencias" },
      "voice": { label: "Entrada de Voz", description: "Conversar por audio" },
      "anonimizar": { label: "Anonimizar", description: "Ocultar datos personales" },
    },
  },
  en: {
    title: "Claude Interface",
    annotations: {
      "nova-conversa": { label: "New Chat", description: "Click to start a new conversation with Claude" },
      "input": { label: "Message Field", description: "Type your question or instruction here" },
      "anexo": { label: "Attach File", description: "Add images, PDFs or documents" },
      "modelo": { label: "Model Selector", description: "Choose between Opus, Sonnet or Haiku" },
      "logo": { label: "Claude Logo", description: "Visual identity" },
      "busca": { label: "Search", description: "Search conversations" },
      "projetos": { label: "Projects", description: "Organize into projects" },
      "recentes": { label: "Recent", description: "Recent conversations" },
      "config": { label: "Settings", description: "Account and preferences" },
      "voice": { label: "Voice Input", description: "Talk by audio" },
      "anonimizar": { label: "Anonymize", description: "Hide personal data" },
    },
  },
};

// Coordenadas base (sem traducao)
const baseAnnotations: Omit<AnnotationData, "label" | "description">[] = [
  // === CAMPOS PRINCIPAIS (destacados) ===
  { id: "nova-conversa", x: 32, y: 112, anchorX: 32, anchorY: 112, labelPosition: "right", startFrame: 45, highlighted: true },
  { id: "input", x: 868, y: 475, anchorX: 868, anchorY: 475, labelPosition: "top", startFrame: 105, highlighted: true },
  { id: "anexo", x: 706, y: 570, anchorX: 706, anchorY: 570, labelPosition: "bottom", startFrame: 165, highlighted: true },
  { id: "modelo", x: 1554, y: 570, anchorX: 1554, anchorY: 570, labelPosition: "bottom", startFrame: 225, highlighted: true },
  // === CAMPOS SECUNDARIOS (sutis) ===
  { id: "logo", x: 61, y: 33, anchorX: 61, anchorY: 33, labelPosition: "right", startFrame: 255, highlighted: false },
  { id: "busca", x: 32, y: 163, anchorX: 32, anchorY: 163, labelPosition: "right", startFrame: 270, highlighted: false },
  { id: "projetos", x: 32, y: 220, anchorX: 32, anchorY: 220, labelPosition: "right", startFrame: 285, highlighted: false },
  { id: "recentes", x: 32, y: 339, anchorX: 32, anchorY: 339, labelPosition: "right", startFrame: 300, highlighted: false },
  { id: "config", x: 190, y: 800, anchorX: 190, anchorY: 800, labelPosition: "top", startFrame: 315, highlighted: false },
  { id: "voice", x: 1629, y: 570, anchorX: 1629, anchorY: 570, labelPosition: "bottom", startFrame: 330, highlighted: false },
  { id: "anonimizar", x: 1840, y: 33, anchorX: 1840, anchorY: 33, labelPosition: "left", startFrame: 345, highlighted: false },
];

const getAnnotations = (lang: Language): AnnotationData[] => {
  const t = translations[lang].annotations;
  return baseAnnotations.map((ann) => ({
    ...ann,
    label: t[ann.id].label,
    description: t[ann.id].description,
  }));
};

export type ClaudeInterfaceAnimationProps = {
  language?: Language;
};

export const ClaudeInterfaceAnimation = ({ language = "pt" }: ClaudeInterfaceAnimationProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const annotations = getAnnotations(language);
  const title = translations[language].title;

  const imageOpacity = interpolate(frame, [0, fps * 0.5], [0, 1], {
    extrapolateRight: "clamp",
  });

  const imageScale = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const scaledImageScale = interpolate(imageScale, [0, 1], [0.95, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1a1a2e",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Background gradient */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, #2d2d44 0%, #1a1a2e 70%)",
        }}
      />

      {/* Image container */}
      <div
        style={{
          position: "relative",
          opacity: imageOpacity,
          transform: `scale(${scaledImageScale})`,
          boxShadow: "0 25px 80px rgba(0, 0, 0, 0.5)",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <Img
          src={staticFile("claude-interface.png")}
          style={{
            width: 1900,
            height: "auto",
            display: "block",
          }}
        />

        {/* Overlay for annotations */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {annotations.map((annotation) => (
            <Sequence
              key={annotation.id}
              from={annotation.startFrame}
              premountFor={fps}
            >
              <Annotation
                label={annotation.label}
                description={annotation.description}
                x={annotation.x}
                y={annotation.y}
                anchorX={annotation.anchorX}
                anchorY={annotation.anchorY}
                labelPosition={annotation.labelPosition}
                highlighted={annotation.highlighted ?? true}
              />
            </Sequence>
          ))}
        </div>
      </div>

      {/* Title */}
      <Sequence from={0} durationInFrames={fps * 3} layout="none">
        <Title title={title} />
      </Sequence>
    </AbsoluteFill>
  );
};

const Title = ({ title }: { title: string }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, fps * 0.5, fps * 2.5, fps * 3], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
  });

  const titleY = interpolate(frame, [0, fps * 0.5], [30, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        opacity: titleOpacity,
        transform: `translateY(${titleY}px)`,
      }}
    >
      <h1
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: 42,
          fontWeight: 600,
          color: "#ffffff",
          margin: 0,
          textShadow: "0 2px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        {title}
      </h1>
    </div>
  );
};
