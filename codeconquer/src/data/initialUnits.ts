import {
  SiSupabase,
  SiReact,
  SiFigma,
  SiNextdotjs,
  SiVercel,
  SiN8N,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiShadcnui,
} from "react-icons/si";
import { FaBug } from "react-icons/fa";

const getIconComponent = (IconComponent: React.ElementType) => () => <IconComponent />;

const initialUnits = [
  { id: "react", team: "player", name: "React", hp: 100, x: 0, y: 0, range: 1, move: 1, attack: 30, special: "Double hit on first attack", Icon: getIconComponent(SiReact) },
  // More units here, truncated for brevity...
  { id: "bugA", team: "enemy", name: "Bug A", hp: 180, x: 5, y: 7, range: 1, move: 1, attack: 15, Icon: getIconComponent(FaBug) },
];

export default initialUnits;
