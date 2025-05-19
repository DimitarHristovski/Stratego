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
  
import { MdSecurity } from "react-icons/md";

  const getIconComponent = (IconComponent: React.ElementType) => () => <IconComponent />;

// Function to generate random stats based on role
const generateRandomStats = (role: string) => {
  let hp, maxHp, attack;

  switch (role) {
    //Good
    case "Coder":
      hp = Math.floor(Math.random() * (1500 - 750) + 750);
      maxHp = hp;
      attack = Math.floor(Math.random() * (270 - 140) + 140);
      break;
     
    case "Support":
      hp = Math.floor(Math.random() * (150 - 80) + 80);
      maxHp = hp;
      attack = Math.floor(Math.random() * (100 - 50) + 50);
      break;
    case "Fighter":
      hp = Math.floor(Math.random() * (300 - 250) + 250);
      maxHp = hp;
      attack = Math.floor(Math.random() * (150 - 100) + 100);
      break;
    case "Tank":
      hp = Math.floor(Math.random() * (550 - 350) + 350);
      maxHp = hp;
      attack = Math.floor(Math.random() * (50 - 10) + 10);
      break;
      //Bad
    case "Small Bug":
      hp = Math.floor(Math.random() * (500 - 50) + 50);
      maxHp = hp;
      attack = Math.floor(Math.random() * (50 - 1) + 1);
      break;
      case "Medium Bug":
        hp = Math.floor(Math.random() * (200 - 50) + 50);
        maxHp = hp;
        attack = Math.floor(Math.random() * (100 - 50) + 50);
        break;
      case "Big Bug":
        hp = Math.floor(Math.random() * (300 - 200) + 200);
        maxHp = hp;
        attack = Math.floor(Math.random() * (100 - 50) + 50);
        break;
        case "Huge Bug":
          hp = Math.floor(Math.random() * (400 - 300) + 300);
          maxHp = hp;
          attack = Math.floor(Math.random() * (100 - 75) + 75);
          break;
       
      case "God Bug":
        hp = Math.floor(Math.random() * (2000 - 1250) + 1250);
        maxHp = hp;
        attack = Math.floor(Math.random() * (270 - 140) + 140);
        break;
    default:
      hp = 1;
      maxHp = 1;
      attack = 1;
  }

  return { hp, maxHp, attack };
};

  export const formations = {
    Phalanx: [
        // FRONTEND UNITS (Up front)
    { id: "react", team: "player", name: "React", ...generateRandomStats("Support"), x: 1, y: 0, range: 1, move: 5,  role: "Support C", Icon: getIconComponent(SiReact) },
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 2, y: 0, range: 5, move: 1,  role: "Support A", Icon: getIconComponent(SiFigma) },
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 3, y: 0, range: 1, move: 2,  role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 4, y: 0, range: 1, move: 2,  role: "Fighter", Icon: getIconComponent(SiTailwindcss) },
    { id: "nextjs", team: "player", name: "Next.js", ...generateRandomStats("Support"), x: 5, y: 0, range: 5, move: 1,  role: "Support A", Icon: getIconComponent(SiNextdotjs) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 6, y: 0, range: 1, move: 5,  role: "Support C", Icon: getIconComponent(SiShadcnui) },
    
        // BACKEND UNITS (Behind front line)
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 1, y: 1, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "postgresql", team: "player", name: "PostgreSQL", ...generateRandomStats("Tank"), x: 2, y: 1, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiPostgresql) },
    { id: "mongodb", team: "player", name: "MongoDB", ...generateRandomStats("Tank"), x: 3, y: 1, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiMongodb) },
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Tank"), x: 4, y: 1, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiSupabase) },
    { id: "n8n", team: "player", name: "n8n", ...generateRandomStats("Tank"), x: 5, y: 1, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiN8N) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 6, y: 1, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiNodedotjs) },
    
        // Enemy Units (Standard Formation)
    { id: "Small Bug1", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 1, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug2", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 2, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug3", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 3, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    
    { id: "Medium Bug01", team: "enemy", name: "Huge Bug", ...generateRandomStats("Huge Bug"), x: 4, y: 7, range: 1, move: 1,  role: "Huge Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug02", team: "enemy", name: "Huge Bug", ...generateRandomStats("Huge Bug"), x: 5, y: 7, range: 1, move: 1,  role: "Huge Bug", Icon: getIconComponent(FaBug) },

    { id: "Small Bug7", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 6, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug8", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 1, y: 6, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug9", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 2, y: 6, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug10", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 3, y: 6, range: 1, move: 1,  role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug1", team: "enemy", name: "Huge Bug", ...generateRandomStats("Huge Bug"), x: 4, y: 6, range: 1, move: 1,  role: "Huge Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug2", team: "enemy", name: "Big Bug", ...generateRandomStats("Big Bug"), x: 5, y: 6, range: 1, move: 1,  role: "Big Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("Medium Bug"), x: 6, y: 6, range: 1, move: 1,  role: "Medium Bug", Icon: getIconComponent(FaBug) }
  ],
  Spearhead: [
    // FRONTLINE
    { id: "react", team: "player", name: "React", ...generateRandomStats("Support"), x: 3, y: 0, range: 1, move: 5,  role: "Support C", Icon: getIconComponent(SiReact) },
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 2, y: 1, range: 1, move: 1,  role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 4, y: 1, range: 1, move: 1,  role: "Fighter", Icon: getIconComponent(SiTailwindcss) },

    // MIDFIELD
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 1, y: 2, range: 1, move: 5,  role: "Support C", Icon: getIconComponent(SiFigma) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 5, y: 2, range: 1, move: 5,  role: "Support C", Icon: getIconComponent(SiShadcnui) },
    { id: "nextjs", team: "player", name: "Next.js", ...generateRandomStats("Support"), x: 3, y: 2, range: 5, move: 1, role: "Support A", Icon: getIconComponent(SiNextdotjs) },

    // BACKEND
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 1, y: 3, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "postgresql", team: "player", name: "PostgreSQL", ...generateRandomStats("Tank"), x: 2, y: 3, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiPostgresql) },
    { id: "mongodb", team: "player", name: "MongoDB", ...generateRandomStats("Tank"), x: 3, y: 3, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiMongodb) },
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Tank"), x: 4, y: 3, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiSupabase) },
    { id: "n8n", team: "player", name: "n8n", ...generateRandomStats("Tank"), x: 5, y: 3, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiN8N) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 6, y: 3, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiNodedotjs) },

    { id: "Small Bug1", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 3, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug2", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 2, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug3", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 4, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug4", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 3, y: 6, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug1", team: "enemy", name: "Huge Bug", ...generateRandomStats("Huge Bug"), x: 1, y: 6, range: 1, move: 2,  role: "Huge Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug2", team: "enemy", name: "Big Bug", ...generateRandomStats("Big Bug"), x: 6, y: 6, range: 1, move: 2,  role: "Big Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug3", team: "enemy", name: "Ransomware", ...generateRandomStats("Medium Bug"), x: 2, y: 6, range: 1, move: 1,  role: "Medium Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug4", team: "enemy", name: "Huge Bug", ...generateRandomStats("Huge Bug"), x: 0, y: 7, range: 1, move: 2,  role: "Huge Bug", Icon: getIconComponent(FaBug) },

  ],
  Ambush: [
    // Ambush units and support in staggered flank
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 2, y: 1, range: 1, move: 1,  role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 1, y: 2, range: 5, move: 1, role: "Support A", Icon: getIconComponent(SiFigma) },
    { id: "react", team: "player", name: "React", ...generateRandomStats("Support"), x: 3, y: 1, range: 5, move: 1, role: "Support A", Icon: getIconComponent(SiReact) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 5, y: 1, range: 1, move: 5, role: "Support C", Icon: getIconComponent(SiShadcnui) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 6, y: 2, range: 1, move: 1,  role: "Fighter", Icon: getIconComponent(SiTailwindcss) },

    // Backend cover
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 2, y: 3, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 4, y: 3, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiNodedotjs) },
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Tank"), x: 3, y: 2, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiSupabase) },

    // Enemies
    { id: "Small Bug5", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 4, y: 7, range: 1, move: 1,  role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug6", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 5, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug1", team: "enemy", name: "Huge Bug", ...generateRandomStats("Huge Bug"), x: 1, y: 6, range: 1, move: 2,  role: "Huge Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug2", team: "enemy", name: "Big Bug", ...generateRandomStats("Big Bug"), x: 6, y: 6, range: 1, move: 2,  role: "Big Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug3", team: "enemy", name: "Ransomware", ...generateRandomStats("Medium Bug"), x: 2, y: 6, range: 1, move: 1,  role: "Medium Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug4", team: "enemy", name: "Huge Bug", ...generateRandomStats("Huge Bug"), x: 0, y: 0, range: 1, move: 2,  role: "Huge Bug", Icon: getIconComponent(FaBug) },

  ], 
  GodBug: [
    // FRONTEND UNITS (Up front)
    { id: "react", team: "player", name: "React", ...generateRandomStats("Support"), x: 1, y: 0, range: 1, move: 5,  role: "Support C", Icon: getIconComponent(SiReact) },
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 2, y: 0, range: 5, move: 1,  role: "Support A", Icon: getIconComponent(SiFigma) },
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 3, y: 0, range: 1, move: 2,  role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 4, y: 0, range: 1, move: 2,  role: "Fighter", Icon: getIconComponent(SiTailwindcss) },
    { id: "nextjs", team: "player", name: "Next.js", ...generateRandomStats("Support"), x: 5, y: 0, range: 5, move: 1,  role: "Support A", Icon: getIconComponent(SiNextdotjs) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 6, y: 0, range: 1, move: 5,  role: "Support C", Icon: getIconComponent(SiShadcnui) },

    // BACKEND UNITS (Behind front line)
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 1, y: 1, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "postgresql", team: "player", name: "PostgreSQL", ...generateRandomStats("Tank"), x: 2, y: 1, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiPostgresql) },
    { id: "mongodb", team: "player", name: "MongoDB", ...generateRandomStats("Tank"), x: 3, y: 1, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiMongodb) },
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Tank"), x: 4, y: 1, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiSupabase) },
    { id: "n8n", team: "player", name: "n8n", ...generateRandomStats("Tank"), x: 5, y: 1, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiN8N) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 6, y: 1, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiNodedotjs) },

    // Enemy Units (Standard Formation)
    { id: "God Bug", team: "enemy", name: "God Bug", ...generateRandomStats("God Bug"), x: 1, y: 7, range: 1, move: 3, role: "God Bug", Icon: getIconComponent(FaBug) },
  ], 
  Encircle: [
    // Flanking units
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 0, y: 3, range: 1, move: 1,  role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 6, y: 3, range: 1, move: 1,  role: "Fighter", Icon: getIconComponent(SiTailwindcss) },

    // Core tank line
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 2, y: 4, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 3, y: 4, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiNodedotjs) },
    { id: "postgresql", team: "player", name: "PostgreSQL", ...generateRandomStats("Tank"), x: 4, y: 4, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiPostgresql) },

    // Support
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 1, y: 5, range: 1, move: 5,  role: "Support C", Icon: getIconComponent(SiFigma) },
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Support"), x: 5, y: 5, range: 1, move: 5,  role: "Support C", Icon: getIconComponent(SiSupabase) },

    // Enemy core (7 enemies to match 7 players)
    { id: "Medium Bug5", team: "enemy", name: "Spyware", ...generateRandomStats("Medium Bug"), x: 3, y: 7, range: 1, move: 1,  role: "Medium Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug9", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 2, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug10", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 4, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug6", team: "enemy", name: "Keylogger", ...generateRandomStats("Medium Bug"), x: 1, y: 6, range: 1, move: 1,  role: "Medium Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug7", team: "enemy", name: "Rootkit", ...generateRandomStats("Medium Bug"), x: 5, y: 6, range: 1, move: 1, role: "Medium Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug11", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 0, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug12", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 6, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
  ], 
  KingsGuard: [
    // Center control
    { id: "Coder", team: "player", name: "Coder", ...generateRandomStats("Coder"), x: 3, y: 3, range: 2, move: 2,  role: "Coder", Icon: getIconComponent(MdSecurity) },

    // Enemy flanking sides (6 enemies to match 1 player)
    { id: "Medium Bug1", team: "enemy", name: "Big Bug", ...generateRandomStats("Big Bug"), x: 0, y: 0, range: 1, move: 2,  role: "Big Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug1", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 6, y: 0, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug2", team: "enemy", name: "Huge Bug", ...generateRandomStats("Huge Bug"), x: 0, y: 6, range: 1, move: 2,  role: "Huge Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug2", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 6, y: 6, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug3", team: "enemy", name: "Ransomware", ...generateRandomStats("Medium Bug"), x: 3, y: 7, range: 1, move: 1,  role: "Medium Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug4", team: "enemy", name: "Spyware", ...generateRandomStats("Medium Bug"), x: 1, y: 7, range: 1, move: 1,  role: "Medium Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug5", team: "enemy", name: "Rootkit", ...generateRandomStats("Medium Bug"), x: 5, y: 7, range: 1, move: 1,  role: "Medium Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug3", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 2, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug4", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 4, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug6", team: "enemy", name: "Keylogger", ...generateRandomStats("Medium Bug"), x: 3, y: 6, range: 1, move: 1,  role: "Medium Bug", Icon: getIconComponent(FaBug) },
  ], 
  Vanguard: [
    // Aggressive forward units
    { id: "react", team: "player", name: "React", ...generateRandomStats("Fighter"), x: 3, y: 0, range: 1, move: 1,  role: "Fighter", Icon: getIconComponent(SiReact) },
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 2, y: 0, range: 1, move: 1,  role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 4, y: 0, range: 1, move: 1,  role: "Fighter", Icon: getIconComponent(SiTailwindcss) },

    // Shielded backend
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 3, y: 1, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 2, y: 1, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiNodedotjs) },
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Support"), x: 4, y: 1, range: 5, move: 1,  role: "Support A", Icon: getIconComponent(SiSupabase) },

    // Enemies packed at the back (6 enemies to match 6 players)
    { id: "Small Bug11", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 3, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug6", team: "enemy", name: "Keylogger", ...generateRandomStats("Medium Bug"), x: 2, y: 6, range: 1, move: 1,  role: "Medium Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug7", team: "enemy", name: "Rootkit", ...generateRandomStats("Medium Bug"), x: 4, y: 6, range: 1, move: 1,  role: "Medium Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug12", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 1, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug13", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 5, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug8", team: "enemy", name: "Malware", ...generateRandomStats("Medium Bug"), x: 3, y: 6, range: 1, move: 1,  role: "Medium Bug", Icon: getIconComponent(FaBug) },
  ], 
  Wall: [
    // Tank Frontline
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 1, y: 0, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "postgresql", team: "player", name: "PostgreSQL", ...generateRandomStats("Tank"), x: 2, y: 0, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiPostgresql) },
    { id: "mongodb", team: "player", name: "MongoDB", ...generateRandomStats("Tank"), x: 3, y: 0, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiMongodb) },
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Tank"), x: 4, y: 0, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiSupabase) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 5, y: 0, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiNodedotjs) },

    // Support Behind Tanks
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 2, y: 1, range: 5, move: 1, role: "Support A", Icon: getIconComponent(SiFigma) },
    { id: "nextjs", team: "player", name: "Next.js", ...generateRandomStats("Support"), x: 3, y: 1, range: 5, move: 1, role: "Support A", Icon: getIconComponent(SiNextdotjs) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 4, y: 1, range: 1, move: 5, role: "Support C", Icon: getIconComponent(SiShadcnui) },

    // Enemies advancing (8 enemies to match 8 players)
    { id: "Small Bug1", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 3, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug1", team: "enemy", name: "Big Bug", ...generateRandomStats("Big Bug"), x: 2, y: 6, range: 1, move: 2, role: "Big Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug2", team: "enemy", name: "Huge Bug", ...generateRandomStats("Huge Bug"), x: 4, y: 6, range: 1, move: 2, role: "Huge Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug2", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 1, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug3", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 5, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug3", team: "enemy", name: "Ransomware", ...generateRandomStats("Medium Bug"), x: 2, y: 7, range: 1, move: 1, role: "Medium Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug4", team: "enemy", name: "Spyware", ...generateRandomStats("Medium Bug"), x: 4, y: 7, range: 1, move: 1, role: "Medium Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug4", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 3, y: 6, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
  ], 
  Blitz: [
    // Fast Fighters
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 2, y: 0, range: 1, move: 1,  role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "react", team: "player", name: "React", ...generateRandomStats("Fighter"), x: 3, y: 0, range: 1, move: 1,  role: "Fighter", Icon: getIconComponent(SiReact) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 4, y: 0, range: 1, move: 1,  role: "Fighter", Icon: getIconComponent(SiTailwindcss) },

    // Speed Buffers
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 3, y: 1, range: 5, move: 1,  role: "Support A", Icon: getIconComponent(SiFigma) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 2, y: 1, range: 5, move: 1,  role: "Support A", Icon: getIconComponent(SiShadcnui) },

    // Minimal defense
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 3, y: 2, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiTypescript) },

    // Exposed enemies (6 enemies to match 6 players)
    { id: "Small Bug1", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 2, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug1", team: "enemy", name: "Ransomware", ...generateRandomStats("Medium Bug"), x: 3, y: 6, range: 1, move: 1,  role: "Medium Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug2", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 4, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug2", team: "enemy", name: "Keylogger", ...generateRandomStats("Medium Bug"), x: 1, y: 7, range: 1, move: 1,  role: "Medium Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug3", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 5, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug3", team: "enemy", name: "Rootkit", ...generateRandomStats("Medium Bug"), x: 3, y: 7, range: 1, move: 1,  role: "Medium Bug", Icon: getIconComponent(FaBug) },
  ], 
  Wedge: [
    // Spearhead
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 3, y: 0, range: 1, move: 1,  role: "Fighter", Icon: getIconComponent(SiTailwindcss) },

    // Second line
    { id: "react", team: "player", name: "React", ...generateRandomStats("Fighter"), x: 2, y: 1, range: 1, move: 1,  role: "Fighter", Icon: getIconComponent(SiReact) },
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 4, y: 1, range: 1, move: 1,  role: "Fighter", Icon: getIconComponent(SiVercel) },

    // Support flank
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 1, y: 2, range: 5, move: 1,  role: "Support A", Icon: getIconComponent(SiFigma) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 5, y: 2, range: 5, move: 1,  role: "Support A", Icon: getIconComponent(SiShadcnui) },

    // Backend tanks
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Tank"), x: 3, y: 3, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiSupabase) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 2, y: 3, range: 1, move: 1,  role: "Tank", Icon: getIconComponent(SiNodedotjs) },

    // Enemy wall (7 enemies to match 7 players)
    { id: "Small Bug1", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 3, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug1", team: "enemy", name: "Huge Bug", ...generateRandomStats("Huge Bug"), x: 2, y: 6, range: 1, move: 2,  role: "Huge Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug2", team: "enemy", name: "Big Bug", ...generateRandomStats("Big Bug"), x: 4, y: 6, range: 1, move: 2,  role: "Big Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug2", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 1, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug3", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 5, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug3", team: "enemy", name: "Ransomware", ...generateRandomStats("Medium Bug"), x: 2, y: 7, range: 1, move: 1,  role: "Medium Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug4", team: "enemy", name: "Spyware", ...generateRandomStats("Medium Bug"), x: 4, y: 7, range: 1, move: 1,  role: "Medium Bug", Icon: getIconComponent(FaBug) },
  ], 
  Fortress: [
    // Outer Tank Shell
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 2, y: 1, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 1, y: 2, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiNodedotjs) },
    { id: "postgresql", team: "player", name: "PostgreSQL", ...generateRandomStats("Tank"), x: 3, y: 2, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiPostgresql) },
    { id: "mongodb", team: "player", name: "MongoDB", ...generateRandomStats("Tank"), x: 2, y: 3, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiMongodb) },

    // Inner Support Core
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Support"), x: 2, y: 2, range: 5, move: 1, role: "Support A", Icon: getIconComponent(SiSupabase) },
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 1, y: 1, range: 5, move: 1, role: "Support A", Icon: getIconComponent(SiFigma) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 3, y: 1, range: 1, move: 5, role: "Support C", Icon: getIconComponent(SiShadcnui) },

    // Enemies trying to penetrate the wall (7 enemies to match 7 players)
    { id: "Medium Bug1", team: "enemy", name: "Ransomware", ...generateRandomStats("Medium Bug"), x: 2, y: 7, range: 1, move: 1, role: "Medium Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug1", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 1, y: 6, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug2", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 3, y: 6, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug2", team: "enemy", name: "Huge Bug", ...generateRandomStats("Huge Bug"), x: 0, y: 7, range: 1, move: 2, role: "Huge Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug3", team: "enemy", name: "Big Bug", ...generateRandomStats("Big Bug"), x: 4, y: 7, range: 1, move: 2, role: "Big Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug3", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 1, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug4", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 3, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
  ], 
  Storm: [
    // Random scattered fighters
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 1, y: 0, range: 1, move: 1, role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 4, y: 0, range: 1, move: 1, role: "Fighter", Icon: getIconComponent(SiTailwindcss) },
    { id: "react", team: "player", name: "React", ...generateRandomStats("Fighter"), x: 6, y: 1, range: 1, move: 1, role: "Fighter", Icon: getIconComponent(SiReact) },

    // Staggered supports
    { id: "nextjs", team: "player", name: "Next.js", ...generateRandomStats("Support"), x: 2, y: 2, range: 5, move: 1, role: "Support A", Icon: getIconComponent(SiNextdotjs) },
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 5, y: 2, range: 5, move: 1, role: "Support A", Icon: getIconComponent(SiFigma) },

    // Center tanks
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 3, y: 3, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "n8n", team: "player", name: "n8n", ...generateRandomStats("Tank"), x: 2, y: 4, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiN8N) },

    // Enemies caught off guard (7 enemies to match 7 players)
    { id: "Medium Bug1", team: "enemy", name: "Huge Bug", ...generateRandomStats("Huge Bug"), x: 3, y: 7, range: 1, move: 2, role: "Huge Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug1", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 2, y: 6, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug2", team: "enemy", name: "Big Bug", ...generateRandomStats("Big Bug"), x: 4, y: 6, range: 1, move: 2, role: "Big Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug2", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 1, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug3", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 5, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug3", team: "enemy", name: "Ransomware", ...generateRandomStats("Medium Bug"), x: 2, y: 7, range: 1, move: 1, role: "Medium Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug4", team: "enemy", name: "Spyware", ...generateRandomStats("Medium Bug"), x: 4, y: 7, range: 1, move: 1, role: "Medium Bug", Icon: getIconComponent(FaBug) },
  ],
  Cross: [
    // Center control
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Support"), x: 3, y: 3, range: 5, move: 1, role: "Support A", Icon: getIconComponent(SiSupabase) },

    // North arm
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 3, y: 1, range: 1, move: 1, role: "Fighter", Icon: getIconComponent(SiVercel) },

    // South arm
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 3, y: 5, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiTypescript) },

    // East arm
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 5, y: 3, range: 5, move: 1, role: "Support A", Icon: getIconComponent(SiFigma) },

    // West arm
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 1, y: 3, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiNodedotjs) },

    // Enemy flanking sides (5 enemies to match 5 players)
    { id: "Medium Bug1", team: "enemy", name: "Big Bug", ...generateRandomStats("Big Bug"), x: 0, y: 0, range: 1, move: 2, role: "Big Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug1", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 6, y: 0, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug2", team: "enemy", name: "Huge Bug", ...generateRandomStats("Huge Bug"), x: 0, y: 6, range: 1, move: 2, role: "Huge Bug", Icon: getIconComponent(FaBug) },
    { id: "Small Bug2", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 6, y: 6, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug) },
    { id: "Medium Bug3", team: "enemy", name: "Ransomware", ...generateRandomStats("Medium Bug"), x: 3, y: 7, range: 1, move: 1, role: "Medium Bug", Icon: getIconComponent(FaBug) },
  ], 
  
  Hive: [
    // Player Units
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Support"), x: 3, y: 3, range: 5, move: 1, role: "Support A", Icon: getIconComponent(SiSupabase) },
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 2, y: 3, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "postgresql", team: "player", name: "PostgreSQL", ...generateRandomStats("Tank"), x: 4, y: 3, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiPostgresql) },
    { id: "mongodb", team: "player", name: "MongoDB", ...generateRandomStats("Tank"), x: 3, y: 2, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiMongodb) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 3, y: 4, range: 1, move: 1, role: "Tank", Icon: getIconComponent(SiNodedotjs) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 2, y: 2, range: 1, move: 5, role: "Support C", Icon: getIconComponent(SiShadcnui) },
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 4, y: 2, range: 5, move: 1, role: "Support A", Icon: getIconComponent(SiFigma) },

    // Enemies
    { id: "Small Bug1", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 3, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug),  },
    { id: "Small Bug2", team: "enemy", name: "Small Bug", ...generateRandomStats("Huge Bug"), x: 2, y: 6, range: 1, move: 1, role: "Huge Bug", Icon: getIconComponent(FaBug),  },
    { id: "Medium Bug1", team: "enemy", name: "Huge Bug", ...generateRandomStats("Big Bug"), x: 4, y: 6, range: 1, move: 1, role: "Big Bug", Icon: getIconComponent(FaBug), },
    { id: "Medium Bug2", team: "enemy", name: "Big Bug", ...generateRandomStats("Medium Bug"), x: 1, y: 5, range: 1, move: 1, role: "Medium Bug", Icon: getIconComponent(FaBug),  },
    { id: "Medium Bug3", team: "enemy", name: "Ransomware", ...generateRandomStats("Small Bug"), x: 5, y: 5, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug),  },
    { id: "Medium Bug4", team: "enemy", name: "Spyware", ...generateRandomStats("Huge Bug"), x: 0, y: 4, range: 1, move: 1, role: "Huge Bug", Icon: getIconComponent(FaBug),  },
    { id: "Medium Bug5", team: "enemy", name: "Rootkit", ...generateRandomStats("Big Bug"), x: 6, y: 4, range: 1, move: 1, role: "Big Bug", Icon: getIconComponent(FaBug), }
  ], 
  Snipers: [
    // Player Units
    { id: "react", team: "player", name: "React", ...generateRandomStats("Fighter"), x: 2, y: 1, range: 1, move: 1, role: "Fighter", Icon: getIconComponent(SiReact) },
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 3, y: 1, range: 1, move: 1, role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 4, y: 1, range: 1, move: 1, role: "Fighter", Icon: getIconComponent(SiTailwindcss) },
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 2, y: 0, range: 7, move: 1, role: "Support A", Icon: getIconComponent(SiFigma) },
    { id: "nextjs", team: "player", name: "Next.js", ...generateRandomStats("Support"), x: 3, y: 0, range: 7, move: 1, role: "Support A", Icon: getIconComponent(SiNextdotjs) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 4, y: 0, range: 7, move: 1, role: "Support A", Icon: getIconComponent(SiShadcnui) },

    // Enemies
    { id: "Small Bug1", team: "enemy", name: "Small Bug", ...generateRandomStats("Small Bug"), x: 3, y: 7, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug), },
    { id: "Small Bug2", team: "enemy", name: "Small Bug", ...generateRandomStats("Huge Bug"), x: 2, y: 6, range: 1, move: 1, role: "Huge Bug", Icon: getIconComponent(FaBug),  },
    { id: "Medium Bug1", team: "enemy", name: "Huge Bug", ...generateRandomStats("Big Bug"), x: 4, y: 6, range: 1, move: 1, role: "Big Bug", Icon: getIconComponent(FaBug),  },
    { id: "Medium Bug2", team: "enemy", name: "Big Bug", ...generateRandomStats("Medium Bug"), x: 1, y: 5, range: 1, move: 1, role: "Medium Bug", Icon: getIconComponent(FaBug),  },
    { id: "Medium Bug3", team: "enemy", name: "Ransomware", ...generateRandomStats("Small Bug"), x: 5, y: 5, range: 1, move: 1, role: "Small Bug", Icon: getIconComponent(FaBug),  },
    { id: "Medium Bug4", team: "enemy", name: "Spyware", ...generateRandomStats("Huge Bug"), x: 0, y: 4, range: 1, move: 1, role: "Huge Bug", Icon: getIconComponent(FaBug),  },
    { id: "Medium Bug5", team: "enemy", name: "Rootkit", ...generateRandomStats("Big Bug"), x: 6, y: 4, range: 1, move: 1, role: "Big Bug", Icon: getIconComponent(FaBug),}
  ]

  };
  