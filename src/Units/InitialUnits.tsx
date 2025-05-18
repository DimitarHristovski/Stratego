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
  import { FaWorm } from "react-icons/fa6";
  import { GiTrojanHorse } from "react-icons/gi";
  import { PiVirusFill } from "react-icons/pi";
import { MdSecurity } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

  const getIconComponent = (IconComponent: React.ElementType) => () => <IconComponent />;

// Function to generate random stats based on role
const generateRandomStats = (role: string) => {
  let hp, maxHp, attack;

  switch (role) {
    //Good
    case "Security":
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
    case "Bug":
      hp = Math.floor(Math.random() * (500 - 50) + 50);
      maxHp = hp;
      attack = Math.floor(Math.random() * (50 - 1) + 1);
      break;
      case "Virus":
        hp = Math.floor(Math.random() * (200 - 50) + 50);
        maxHp = hp;
        attack = Math.floor(Math.random() * (100 - 50) + 50);
        break;
      case "Trojan":
        hp = Math.floor(Math.random() * (300 - 200) + 200);
        maxHp = hp;
        attack = Math.floor(Math.random() * (100 - 50) + 50);
        break;
        case "Worm":
          hp = Math.floor(Math.random() * (400 - 300) + 300);
          maxHp = hp;
          attack = Math.floor(Math.random() * (100 - 75) + 75);
          break;
       
      case "Hacker":
        hp = Math.floor(Math.random() * (2000 - 1250) + 1250);
        maxHp = hp;
        attack = Math.floor(Math.random() * (270 - 140) + 140);
        break;
    default:
      hp = 100;
      maxHp = 100;
      attack = 50;
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
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 1, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 2, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG3", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 3, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    
    { id: "VIRUS01", team: "enemy", name: "Trojan", ...generateRandomStats("Trojan"), x: 4, y: 7, range: 1, move: 1,  role: "Trojan", Icon: getIconComponent(GiTrojanHorse) },
    { id: "VIRUS02", team: "enemy", name: "Trojan", ...generateRandomStats("Trojan"), x: 5, y: 7, range: 1, move: 1,  role: "Trojan", Icon: getIconComponent(GiTrojanHorse) },

    { id: "BUG7", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 6, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG8", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 1, y: 6, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG9", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 2, y: 6, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG10", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 3, y: 6, range: 1, move: 1,  role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS1", team: "enemy", name: "Trojan", ...generateRandomStats("Trojan"), x: 4, y: 6, range: 1, move: 1,  role: "Trojan", Icon: getIconComponent(GiTrojanHorse) },
    { id: "VIRUS2", team: "enemy", name: "Worm", ...generateRandomStats("Worm"), x: 5, y: 6, range: 1, move: 1,  role: "Worm", Icon: getIconComponent(FaWorm) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("Virus"), x: 6, y: 6, range: 1, move: 1,  role: "Virus", Icon: getIconComponent(PiVirusFill) }
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

    // ENEMIES
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 3, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 2, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG3", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 4, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG4", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 3, y: 6, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS1", team: "enemy", name: "Trojan", ...generateRandomStats("Trojan"), x: 1, y: 6, range: 1, move: 2,  role: "Trojan", Icon: getIconComponent(GiTrojanHorse) },
    { id: "VIRUS2", team: "enemy", name: "Worm", ...generateRandomStats("Worm"), x: 6, y: 6, range: 1, move: 2,  role: "Worm", Icon: getIconComponent(FaWorm) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("Virus"), x: 2, y: 6, range: 1, move: 1,  role: "Virus", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS4", team: "enemy", name: "Trojan", ...generateRandomStats("Trojan"), x: 0, y: 7, range: 1, move: 2,  role: "Trojan", Icon: getIconComponent(GiTrojanHorse) },

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
    { id: "BUG5", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 4, y: 7, range: 1, move: 1,  role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG6", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 5, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS1", team: "enemy", name: "Trojan", ...generateRandomStats("Trojan"), x: 1, y: 6, range: 1, move: 2,  role: "Trojan", Icon: getIconComponent(GiTrojanHorse) },
    { id: "VIRUS2", team: "enemy", name: "Worm", ...generateRandomStats("Worm"), x: 6, y: 6, range: 1, move: 2,  role: "Worm", Icon: getIconComponent(FaWorm) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("Virus"), x: 2, y: 6, range: 1, move: 1,  role: "Virus", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS4", team: "enemy", name: "Trojan", ...generateRandomStats("Trojan"), x: 0, y: 0, range: 1, move: 2,  role: "Trojan", Icon: getIconComponent(GiTrojanHorse) },

  ], 
  Hacker: [
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
    { id: "Hacker", team: "enemy", name: "Hacker", ...generateRandomStats("Hacker"), x: 1, y: 7, range: 1, move: 3, role: "Hacker", Icon: getIconComponent(IoMdPerson) },
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
    { id: "VIRUS5", team: "enemy", name: "Spyware", ...generateRandomStats("Virus"), x: 3, y: 7, range: 1, move: 1,  role: "Virus", Icon: getIconComponent(PiVirusFill) },
    { id: "BUG9", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 2, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG10", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 4, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS6", team: "enemy", name: "Keylogger", ...generateRandomStats("Virus"), x: 1, y: 6, range: 1, move: 1,  role: "Virus", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS7", team: "enemy", name: "Rootkit", ...generateRandomStats("Virus"), x: 5, y: 6, range: 1, move: 1, role: "Virus", Icon: getIconComponent(PiVirusFill) },
    { id: "BUG11", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 0, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG12", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 6, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
  ], 
  KingsGuard: [
    // Center control
    { id: "Security", team: "player", name: "Security", ...generateRandomStats("Security"), x: 3, y: 3, range: 2, move: 2,  role: "Security", Icon: getIconComponent(MdSecurity) },

    // Enemy flanking sides (6 enemies to match 1 player)
    { id: "VIRUS1", team: "enemy", name: "Worm", ...generateRandomStats("Worm"), x: 0, y: 0, range: 1, move: 2,  role: "Worm", Icon: getIconComponent(FaWorm) },
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 6, y: 0, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS2", team: "enemy", name: "Trojan", ...generateRandomStats("Trojan"), x: 0, y: 6, range: 1, move: 2,  role: "Trojan", Icon: getIconComponent(GiTrojanHorse) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 6, y: 6, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("Virus"), x: 3, y: 7, range: 1, move: 1,  role: "Virus", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS4", team: "enemy", name: "Spyware", ...generateRandomStats("Virus"), x: 1, y: 7, range: 1, move: 1,  role: "Virus", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS5", team: "enemy", name: "Rootkit", ...generateRandomStats("Virus"), x: 5, y: 7, range: 1, move: 1,  role: "Virus", Icon: getIconComponent(PiVirusFill) },
    { id: "BUG3", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 2, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG4", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 4, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS6", team: "enemy", name: "Keylogger", ...generateRandomStats("Virus"), x: 3, y: 6, range: 1, move: 1,  role: "Virus", Icon: getIconComponent(PiVirusFill) },
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
    { id: "BUG11", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 3, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS6", team: "enemy", name: "Keylogger", ...generateRandomStats("Virus"), x: 2, y: 6, range: 1, move: 1,  role: "Virus", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS7", team: "enemy", name: "Rootkit", ...generateRandomStats("Virus"), x: 4, y: 6, range: 1, move: 1,  role: "Virus", Icon: getIconComponent(PiVirusFill) },
    { id: "BUG12", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 1, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG13", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 5, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS8", team: "enemy", name: "Malware", ...generateRandomStats("Virus"), x: 3, y: 6, range: 1, move: 1,  role: "Virus", Icon: getIconComponent(PiVirusFill) },
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
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 3, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS1", team: "enemy", name: "Worm", ...generateRandomStats("Worm"), x: 2, y: 6, range: 1, move: 2, role: "Worm", Icon: getIconComponent(FaWorm) },
    { id: "VIRUS2", team: "enemy", name: "Trojan", ...generateRandomStats("Trojan"), x: 4, y: 6, range: 1, move: 2, role: "Trojan", Icon: getIconComponent(GiTrojanHorse) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 1, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG3", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 5, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("Virus"), x: 2, y: 7, range: 1, move: 1, role: "Virus", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS4", team: "enemy", name: "Spyware", ...generateRandomStats("Virus"), x: 4, y: 7, range: 1, move: 1, role: "Virus", Icon: getIconComponent(PiVirusFill) },
    { id: "BUG4", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 3, y: 6, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
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
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 2, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS1", team: "enemy", name: "Ransomware", ...generateRandomStats("Virus"), x: 3, y: 6, range: 1, move: 1,  role: "Virus", Icon: getIconComponent(PiVirusFill) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 4, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS2", team: "enemy", name: "Keylogger", ...generateRandomStats("Virus"), x: 1, y: 7, range: 1, move: 1,  role: "Virus", Icon: getIconComponent(PiVirusFill) },
    { id: "BUG3", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 5, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS3", team: "enemy", name: "Rootkit", ...generateRandomStats("Virus"), x: 3, y: 7, range: 1, move: 1,  role: "Virus", Icon: getIconComponent(PiVirusFill) },
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
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 3, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS1", team: "enemy", name: "Trojan", ...generateRandomStats("Trojan"), x: 2, y: 6, range: 1, move: 2,  role: "Trojan", Icon: getIconComponent(GiTrojanHorse) },
    { id: "VIRUS2", team: "enemy", name: "Worm", ...generateRandomStats("Worm"), x: 4, y: 6, range: 1, move: 2,  role: "Worm", Icon: getIconComponent(FaWorm) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 1, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG3", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 5, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("Virus"), x: 2, y: 7, range: 1, move: 1,  role: "Virus", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS4", team: "enemy", name: "Spyware", ...generateRandomStats("Virus"), x: 4, y: 7, range: 1, move: 1,  role: "Virus", Icon: getIconComponent(PiVirusFill) },
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
    { id: "VIRUS1", team: "enemy", name: "Ransomware", ...generateRandomStats("Virus"), x: 2, y: 7, range: 1, move: 1, role: "Virus", Icon: getIconComponent(PiVirusFill) },
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 1, y: 6, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 3, y: 6, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS2", team: "enemy", name: "Trojan", ...generateRandomStats("Trojan"), x: 0, y: 7, range: 1, move: 2, role: "Trojan", Icon: getIconComponent(GiTrojanHorse) },
    { id: "VIRUS3", team: "enemy", name: "Worm", ...generateRandomStats("Worm"), x: 4, y: 7, range: 1, move: 2, role: "Worm", Icon: getIconComponent(FaWorm) },
    { id: "BUG3", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 1, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG4", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 3, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
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
    { id: "VIRUS1", team: "enemy", name: "Trojan", ...generateRandomStats("Trojan"), x: 3, y: 7, range: 1, move: 2, role: "Trojan", Icon: getIconComponent(GiTrojanHorse) },
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 2, y: 6, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS2", team: "enemy", name: "Worm", ...generateRandomStats("Worm"), x: 4, y: 6, range: 1, move: 2, role: "Worm", Icon: getIconComponent(FaWorm) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 1, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "BUG3", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 5, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("Virus"), x: 2, y: 7, range: 1, move: 1, role: "Virus", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS4", team: "enemy", name: "Spyware", ...generateRandomStats("Virus"), x: 4, y: 7, range: 1, move: 1, role: "Virus", Icon: getIconComponent(PiVirusFill) },
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
    { id: "VIRUS1", team: "enemy", name: "Worm", ...generateRandomStats("Worm"), x: 0, y: 0, range: 1, move: 2, role: "Worm", Icon: getIconComponent(FaWorm) },
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 6, y: 0, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS2", team: "enemy", name: "Trojan", ...generateRandomStats("Trojan"), x: 0, y: 6, range: 1, move: 2, role: "Trojan", Icon: getIconComponent(GiTrojanHorse) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("Bug"), x: 6, y: 6, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("Virus"), x: 3, y: 7, range: 1, move: 1, role: "Virus", Icon: getIconComponent(PiVirusFill) },
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
    { id: "BUG1", team: "enemy", name: "Bug", ...generateRandomStats("Bug"), x: 3, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug),  },
    { id: "BUG2", team: "enemy", name: "Bug", ...generateRandomStats("Trojan"), x: 2, y: 6, range: 1, move: 1, role: "Trojan", Icon: getIconComponent(GiTrojanHorse),  },
    { id: "VIRUS1", team: "enemy", name: "Trojan", ...generateRandomStats("Worm"), x: 4, y: 6, range: 1, move: 1, role: "Worm", Icon: getIconComponent(FaWorm), },
    { id: "VIRUS2", team: "enemy", name: "Worm", ...generateRandomStats("Virus"), x: 1, y: 5, range: 1, move: 1, role: "Virus", Icon: getIconComponent(PiVirusFill),  },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("Bug"), x: 5, y: 5, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug),  },
    { id: "VIRUS4", team: "enemy", name: "Spyware", ...generateRandomStats("Trojan"), x: 0, y: 4, range: 1, move: 1, role: "Trojan", Icon: getIconComponent(GiTrojanHorse),  },
    { id: "VIRUS5", team: "enemy", name: "Rootkit", ...generateRandomStats("Worm"), x: 6, y: 4, range: 1, move: 1, role: "Worm", Icon: getIconComponent(FaWorm), }
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
    { id: "BUG1", team: "enemy", name: "Bug", ...generateRandomStats("Bug"), x: 3, y: 7, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug), },
    { id: "BUG2", team: "enemy", name: "Bug", ...generateRandomStats("Trojan"), x: 2, y: 6, range: 1, move: 1, role: "Trojan", Icon: getIconComponent(GiTrojanHorse),  },
    { id: "VIRUS1", team: "enemy", name: "Trojan", ...generateRandomStats("Worm)"), x: 4, y: 6, range: 1, move: 1, role: "Worm)", Icon: getIconComponent(FaWorm),  },
    { id: "VIRUS2", team: "enemy", name: "Worm", ...generateRandomStats("Virus"), x: 1, y: 5, range: 1, move: 1, role: "Virus", Icon: getIconComponent(PiVirusFill),  },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("Bug"), x: 5, y: 5, range: 1, move: 1, role: "Bug", Icon: getIconComponent(FaBug),  },
    { id: "VIRUS4", team: "enemy", name: "Spyware", ...generateRandomStats("Trojan"), x: 0, y: 4, range: 1, move: 1, role: "Trojan", Icon: getIconComponent(GiTrojanHorse),  },
    { id: "VIRUS5", team: "enemy", name: "Rootkit", ...generateRandomStats("Worm)"), x: 6, y: 4, range: 1, move: 1, role: "Worm)", Icon: getIconComponent(FaWorm),}
  ]

  };
  