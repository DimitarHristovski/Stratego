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
    case "Security":
      hp = Math.floor(Math.random() * (1500 - 750) + 750);
      maxHp = hp;
      attack = Math.floor(Math.random() * (270 - 140) + 140);
      break;
      case "Hacker":
        hp = Math.floor(Math.random() * (1500 - 1250) + 1250);
        maxHp = hp;
        attack = Math.floor(Math.random() * (270 - 140) + 140);
        break;
    case "Support":
      hp = Math.floor(Math.random() * (150 - 80) + 80);
      maxHp = hp;
      attack = Math.floor(Math.random() * (70 - 40) + 40);
      break;
    case "Fighter":
      hp = Math.floor(Math.random() * (300 - 250) + 250);
      maxHp = hp;
      attack = Math.floor(Math.random() * (120 - 80) + 80);
      break;
    case "Tank":
      hp = Math.floor(Math.random() * (550 - 350) + 350);
      maxHp = hp;
      attack = Math.floor(Math.random() * (50 - 30) + 30);
      break;
    case "enemy":
      hp = Math.floor(Math.random() * (400 - 50) + 50);
      maxHp = hp;
      attack = Math.floor(Math.random() * (100 - 1) + 1);
      break;
    default:
      hp = 100;
      maxHp = 100;
      attack = 50;
  }

  return { hp, maxHp, attack };
};

export const formations = {
  phalanx: [
    // FRONTEND UNITS (Up front)
    { id: "react", team: "player", name: "React", ...generateRandomStats("Support"), x: 1, y: 0, range: 1, move: 5, special: "Double hit on first attack", role: "Support C", Icon: getIconComponent(SiReact) },
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 2, y: 0, range: 5, move: 1, special: "Can scan enemies in range", role: "Support A", Icon: getIconComponent(SiFigma) },
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 3, y: 0, range: 1, move: 1, special: "Fast deploy: can move twice", role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 4, y: 0, range: 1, move: 1, special: "Styles the board with power boosts", role: "Fighter", Icon: getIconComponent(SiTailwindcss) },
    { id: "nextjs", team: "player", name: "Next.js", ...generateRandomStats("Support"), x: 5, y: 0, range: 5, move: 1, special: "Server-side strike from distance", role: "Support A", Icon: getIconComponent(SiNextdotjs) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 6, y: 0, range: 1, move: 5, special: "Buffs UI-based units nearby", role: "Support C", Icon: getIconComponent(SiShadcnui) },

    // BACKEND UNITS (Behind front line)
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 1, y: 1, range: 1, move: 1, special: "Always hits for minimum damage", role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "postgresql", team: "player", name: "PostgreSQL", ...generateRandomStats("Tank"), x: 2, y: 1, range: 1, move: 1, special: "Data-driven defense aura", role: "Tank", Icon: getIconComponent(SiPostgresql) },
    { id: "mongodb", team: "player", name: "MongoDB", ...generateRandomStats("Tank"), x: 3, y: 1, range: 1, move: 1, special: "NoSQL scatter shot", role: "Tank", Icon: getIconComponent(SiMongodb) },
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Tank"), x: 4, y: 1, range: 1, move: 1, support: true, special: "Heals adjacent allies", role: "Tank", Icon: getIconComponent(SiSupabase) },
    { id: "n8n", team: "player", name: "n8n", ...generateRandomStats("Tank"), x: 5, y: 1, range: 1, move: 1, special: "Automates attacks every other turn", role: "Tank", Icon: getIconComponent(SiN8N) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 6, y: 1, range: 1, move: 1, special: "Area attack", role: "Tank", Icon: getIconComponent(SiNodedotjs) },

    // Enemy Units (Standard Formation)
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 1, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 2, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG3", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 3, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG4", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 4, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG6", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 5, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG7", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 5, y: 6, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG8", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 6, y: 7, range: 1, move: 1, special: "Fast scout", role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG9", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 3, y: 6, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG10", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 2, y: 6, range: 1, move: 1, special: "Resistant armor", role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS1", team: "enemy", name: "Trojan", ...generateRandomStats("enemy"), x: 4, y: 6, range: 1, move: 2, special: "Infects nearby units on hit", role: "enemy", Icon: getIconComponent(GiTrojanHorse) },
    { id: "VIRUS2", team: "enemy", name: "Worm", ...generateRandomStats("enemy"), x: 6, y: 6, range: 1, move: 2, special: "Spreads on attack", role: "enemy", Icon: getIconComponent(FaWorm) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("enemy"), x: 1, y: 6, range: 1, move: 1, special: "Disables healing", role: "enemy", Icon: getIconComponent(PiVirusFill) }
  ],
  spearhead: [
    // FRONTLINE
    { id: "react", team: "player", name: "React", ...generateRandomStats("Support"), x: 3, y: 0, range: 1, move: 1, special: "Double hit on first attack", role: "support", Icon: getIconComponent(SiReact) },
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 2, y: 1, range: 1, move: 1, special: "Fast deploy: can move twice", role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 4, y: 1, range: 1, move: 1, special: "Styles the board with power boosts", role: "Fighter", Icon: getIconComponent(SiTailwindcss) },

    // MIDFIELD
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 1, y: 2, range: 1, move: 1, special: "Can scan enemies in range", role: "support", Icon: getIconComponent(SiFigma) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 5, y: 2, range: 1, move: 1, special: "Buffs UI-based units nearby", role: "support", Icon: getIconComponent(SiShadcnui) },
    { id: "nextjs", team: "player", name: "Next.js", ...generateRandomStats("Support"), x: 3, y: 2, range: 1, move: 1, special: "Server-side strike from distance", role: "support", Icon: getIconComponent(SiNextdotjs) },

    // BACKEND
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 1, y: 3, range: 1, move: 1, special: "Always hits for minimum damage", role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "postgresql", team: "player", name: "PostgreSQL", ...generateRandomStats("Tank"), x: 2, y: 3, range: 1, move: 1, special: "Data-driven defense aura", role: "Tank", Icon: getIconComponent(SiPostgresql) },
    { id: "mongodb", team: "player", name: "MongoDB", ...generateRandomStats("Tank"), x: 3, y: 3, range: 1, move: 1, special: "NoSQL scatter shot", role: "Tank", Icon: getIconComponent(SiMongodb) },
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Tank"), x: 4, y: 3, range: 1, move: 1, support: true, special: "Heals adjacent allies", role: "tank", Icon: getIconComponent(SiSupabase) },
    { id: "n8n", team: "player", name: "n8n", ...generateRandomStats("Tank"), x: 5, y: 3, range: 1, move: 1, special: "Automates attacks every other turn", role: "Tank", Icon: getIconComponent(SiN8N) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 6, y: 3, range: 1, move: 1, special: "Area attack", role: "Tank", Icon: getIconComponent(SiNodedotjs) },

    // ENEMIES
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 3, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 2, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG3", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 4, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG4", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 3, y: 6, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS1", team: "enemy", name: "Trojan", ...generateRandomStats("enemy"), x: 1, y: 6, range: 1, move: 2, special: "Infects nearby units on hit", role: "enemy", Icon: getIconComponent(GiTrojanHorse) },
    { id: "VIRUS2", team: "enemy", name: "Worm", ...generateRandomStats("enemy"), x: 6, y: 6, range: 1, move: 2, special: "Spreads on attack", role: "enemy", Icon: getIconComponent(FaWorm) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("enemy"), x: 2, y: 6, range: 1, move: 1, special: "Disables healing", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS4", team: "enemy", name: "Trojan", ...generateRandomStats("enemy"), x: 0, y: 7, range: 1, move: 2, special: "Infects nearby units on hit", role: "enemy", Icon: getIconComponent(GiTrojanHorse) },

  ],
  ambush: [
    // Ambush units and support in staggered flank
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 2, y: 1, range: 1, move: 1, special: "Fast deploy: can move twice", role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 1, y: 2, range: 1, move: 1, special: "Can scan enemies in range", role: "support", Icon: getIconComponent(SiFigma) },
    { id: "react", team: "player", name: "React", ...generateRandomStats("Support"), x: 3, y: 1, range: 1, move: 1, special: "Double hit on first attack", role: "support", Icon: getIconComponent(SiReact) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 5, y: 1, range: 1, move: 1, special: "Buffs UI-based units nearby", role: "support", Icon: getIconComponent(SiShadcnui) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 6, y: 2, range: 1, move: 1, special: "Styles the board with power boosts", role: "Fighter", Icon: getIconComponent(SiTailwindcss) },

    // Backend cover
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 2, y: 3, range: 1, move: 1, special: "Always hits for minimum damage", role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 4, y: 3, range: 1, move: 1, special: "Area attack", role: "Tank", Icon: getIconComponent(SiNodedotjs) },
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Tank"), x: 3, y: 2, range: 1, move: 1, support: true, special: "Heals adjacent allies", role: "tank", Icon: getIconComponent(SiSupabase) },

    // Enemies
    { id: "BUG5", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 4, y: 7, range: 1, move: 1, special: "Long-range ping", role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG6", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 5, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS1", team: "enemy", name: "Trojan", ...generateRandomStats("enemy"), x: 1, y: 6, range: 1, move: 2, special: "Infects nearby units on hit", role: "enemy", Icon: getIconComponent(GiTrojanHorse) },
    { id: "VIRUS2", team: "enemy", name: "Worm", ...generateRandomStats("enemy"), x: 6, y: 6, range: 1, move: 2, special: "Spreads on attack", role: "enemy", Icon: getIconComponent(FaWorm) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("enemy"), x: 2, y: 6, range: 1, move: 1, special: "Disables healing", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS4", team: "enemy", name: "Trojan", ...generateRandomStats("enemy"), x: 0, y: 0, range: 1, move: 2, special: "Infects nearby units on hit", role: "enemy", Icon: getIconComponent(GiTrojanHorse) },

  ], 
  hacker: [
    // FRONTEND UNITS (Up front)
    { id: "react", team: "player", name: "React", ...generateRandomStats("Support"), x: 1, y: 0, range: 1, move: 5, special: "Double hit on first attack", role: "Support C", Icon: getIconComponent(SiReact) },
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 2, y: 0, range: 5, move: 1, special: "Can scan enemies in range", role: "Support A", Icon: getIconComponent(SiFigma) },
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 3, y: 0, range: 1, move: 1, special: "Fast deploy: can move twice", role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 4, y: 0, range: 1, move: 1, special: "Styles the board with power boosts", role: "Fighter", Icon: getIconComponent(SiTailwindcss) },
    { id: "nextjs", team: "player", name: "Next.js", ...generateRandomStats("Support"), x: 5, y: 0, range: 5, move: 1, special: "Server-side strike from distance", role: "Support A", Icon: getIconComponent(SiNextdotjs) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 6, y: 0, range: 1, move: 5, special: "Buffs UI-based units nearby", role: "Support C", Icon: getIconComponent(SiShadcnui) },

    // BACKEND UNITS (Behind front line)
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 1, y: 1, range: 1, move: 1, special: "Always hits for minimum damage", role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "postgresql", team: "player", name: "PostgreSQL", ...generateRandomStats("Tank"), x: 2, y: 1, range: 1, move: 1, special: "Data-driven defense aura", role: "Tank", Icon: getIconComponent(SiPostgresql) },
    { id: "mongodb", team: "player", name: "MongoDB", ...generateRandomStats("Tank"), x: 3, y: 1, range: 1, move: 1, special: "NoSQL scatter shot", role: "Tank", Icon: getIconComponent(SiMongodb) },
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Tank"), x: 4, y: 1, range: 1, move: 1, support: true, special: "Heals adjacent allies", role: "Tank", Icon: getIconComponent(SiSupabase) },
    { id: "n8n", team: "player", name: "n8n", ...generateRandomStats("Tank"), x: 5, y: 1, range: 1, move: 1, special: "Automates attacks every other turn", role: "Tank", Icon: getIconComponent(SiN8N) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 6, y: 1, range: 1, move: 1, special: "Area attack", role: "Tank", Icon: getIconComponent(SiNodedotjs) },

    // Enemy Units (Standard Formation)
    { id: "Hacker", team: "enemy", name: "Hacker", ...generateRandomStats("Hacker"), x: 1, y: 7, range: 1, move: 3, role: "Hacker", Icon: getIconComponent(IoMdPerson) },
  ], 
  encircle: [
    // Flanking units
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 0, y: 3, range: 1, move: 2, special: "Fast deploy", role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 6, y: 3, range: 1, move: 2, special: "Boosts nearby", role: "Fighter", Icon: getIconComponent(SiTailwindcss) },

    // Core tank line
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 2, y: 4, range: 1, move: 1, special: "Code stability", role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 3, y: 4, range: 1, move: 1, special: "Area attack", role: "Tank", Icon: getIconComponent(SiNodedotjs) },
    { id: "postgresql", team: "player", name: "PostgreSQL", ...generateRandomStats("Tank"), x: 4, y: 4, range: 1, move: 1, special: "DB shield", role: "Tank", Icon: getIconComponent(SiPostgresql) },

    // Support
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 1, y: 5, range: 5, move: 1, special: "Vision grid", role: "Support", Icon: getIconComponent(SiFigma) },
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Support"), x: 5, y: 5, range: 1, move: 1, special: "DB heal", role: "Support", Icon: getIconComponent(SiSupabase) },

    // Enemy core (7 enemies to match 7 players)
    { id: "VIRUS5", team: "enemy", name: "Spyware", ...generateRandomStats("enemy"), x: 3, y: 7, range: 1, move: 1, special: "Reduces enemy range", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "BUG9", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 2, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG10", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 4, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS6", team: "enemy", name: "Keylogger", ...generateRandomStats("enemy"), x: 1, y: 6, range: 1, move: 1, special: "Leeches attack points", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS7", team: "enemy", name: "Rootkit", ...generateRandomStats("enemy"), x: 5, y: 6, range: 1, move: 1, special: "Hard to detect", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "BUG11", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 0, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG12", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 6, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
  ], 
  KingsGuard: [
    // Center control
    { id: "Security", team: "player", name: "Security", ...generateRandomStats("Secuirty"), x: 3, y: 3, range: 2, move: 2, special: "Secuirty Wrath", role: "Secuirty", Icon: getIconComponent(MdSecurity) },

    // Enemy flanking sides (6 enemies to match 1 player)
    { id: "VIRUS1", team: "enemy", name: "Worm", ...generateRandomStats("enemy"), x: 0, y: 0, range: 1, move: 2, special: "Spread corruption", role: "enemy", Icon: getIconComponent(FaWorm) },
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 6, y: 0, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS2", team: "enemy", name: "Trojan", ...generateRandomStats("enemy"), x: 0, y: 6, range: 1, move: 2, special: "Infect nearby", role: "enemy", Icon: getIconComponent(GiTrojanHorse) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 6, y: 6, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("enemy"), x: 3, y: 7, range: 1, move: 1, special: "Disable healing", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS4", team: "enemy", name: "Spyware", ...generateRandomStats("enemy"), x: 1, y: 7, range: 1, move: 1, special: "Reduces range", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS5", team: "enemy", name: "Rootkit", ...generateRandomStats("enemy"), x: 5, y: 7, range: 1, move: 1, special: "Hard to detect", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "BUG3", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 2, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG4", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 4, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS6", team: "enemy", name: "Keylogger", ...generateRandomStats("enemy"), x: 3, y: 6, range: 1, move: 1, special: "Leeches attack points", role: "enemy", Icon: getIconComponent(PiVirusFill) },
  ], 
  vanguard: [
    // Aggressive forward units
    { id: "react", team: "player", name: "React", ...generateRandomStats("Fighter"), x: 3, y: 0, range: 1, move: 2, special: "Double strike", role: "Fighter", Icon: getIconComponent(SiReact) },
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 2, y: 0, range: 1, move: 2, special: "Fast deploy", role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 4, y: 0, range: 1, move: 2, special: "Boost attack", role: "Fighter", Icon: getIconComponent(SiTailwindcss) },

    // Shielded backend
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 3, y: 1, range: 1, move: 1, special: "Type-safe tank", role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 2, y: 1, range: 1, move: 1, special: "AOE", role: "Tank", Icon: getIconComponent(SiNodedotjs) },
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Support"), x: 4, y: 1, range: 1, move: 1, special: "Heal frontline", role: "Support", Icon: getIconComponent(SiSupabase) },

    // Enemies packed at the back (6 enemies to match 6 players)
    { id: "BUG11", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 3, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS6", team: "enemy", name: "Keylogger", ...generateRandomStats("enemy"), x: 2, y: 6, range: 1, move: 1, special: "Leeches attack points", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS7", team: "enemy", name: "Rootkit", ...generateRandomStats("enemy"), x: 4, y: 6, range: 1, move: 1, special: "Hard to detect", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "BUG12", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 1, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG13", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 5, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS8", team: "enemy", name: "Malware", ...generateRandomStats("enemy"), x: 3, y: 6, range: 1, move: 1, special: "Reduces healing", role: "enemy", Icon: getIconComponent(PiVirusFill) },
  ], 
  wall: [
    // Tank Frontline
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 1, y: 0, range: 1, move: 1, special: "Reliable guard", role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "postgresql", team: "player", name: "PostgreSQL", ...generateRandomStats("Tank"), x: 2, y: 0, range: 1, move: 1, special: "Shield data line", role: "Tank", Icon: getIconComponent(SiPostgresql) },
    { id: "mongodb", team: "player", name: "MongoDB", ...generateRandomStats("Tank"), x: 3, y: 0, range: 1, move: 1, special: "NoSQL deflect", role: "Tank", Icon: getIconComponent(SiMongodb) },
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Tank"), x: 4, y: 0, range: 1, move: 1, special: "Heals tanks", role: "Tank", Icon: getIconComponent(SiSupabase) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 5, y: 0, range: 1, move: 1, special: "Clustered AOE", role: "Tank", Icon: getIconComponent(SiNodedotjs) },

    // Support Behind Tanks
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 2, y: 1, range: 4, move: 1, special: "Map scanner", role: "Support", Icon: getIconComponent(SiFigma) },
    { id: "nextjs", team: "player", name: "Next.js", ...generateRandomStats("Support"), x: 3, y: 1, range: 5, move: 1, special: "Backline burst", role: "Support", Icon: getIconComponent(SiNextdotjs) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 4, y: 1, range: 2, move: 1, special: "Buff shield", role: "Support", Icon: getIconComponent(SiShadcnui) },

    // Enemies advancing (8 enemies to match 8 players)
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 3, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS1", team: "enemy", name: "Worm", ...generateRandomStats("enemy"), x: 2, y: 6, range: 1, move: 2, special: "Spread virus", role: "enemy", Icon: getIconComponent(FaWorm) },
    { id: "VIRUS2", team: "enemy", name: "Trojan", ...generateRandomStats("enemy"), x: 4, y: 6, range: 1, move: 2, special: "Corrupt tanks", role: "enemy", Icon: getIconComponent(GiTrojanHorse) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 1, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG3", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 5, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("enemy"), x: 2, y: 7, range: 1, move: 1, special: "Disable healing", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS4", team: "enemy", name: "Spyware", ...generateRandomStats("enemy"), x: 4, y: 7, range: 1, move: 1, special: "Reduces range", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "BUG4", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 3, y: 6, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
  ], 
  blitz: [
    // Fast Fighters
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 2, y: 0, range: 1, move: 2, special: "Fast deploy", role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "react", team: "player", name: "React", ...generateRandomStats("Fighter"), x: 3, y: 0, range: 1, move: 2, special: "Early burst", role: "Fighter", Icon: getIconComponent(SiReact) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 4, y: 0, range: 1, move: 2, special: "Boost charge", role: "Fighter", Icon: getIconComponent(SiTailwindcss) },

    // Speed Buffers
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 3, y: 1, range: 3, move: 1, special: "Target reveal", role: "Support", Icon: getIconComponent(SiFigma) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 2, y: 1, range: 2, move: 1, special: "Speed aura", role: "Support", Icon: getIconComponent(SiShadcnui) },

    // Minimal defense
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 3, y: 2, range: 1, move: 1, special: "Fallback block", role: "Tank", Icon: getIconComponent(SiTypescript) },

    // Exposed enemies (6 enemies to match 6 players)
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 2, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS1", team: "enemy", name: "Ransomware", ...generateRandomStats("enemy"), x: 3, y: 6, range: 1, move: 1, special: "Disable regen", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 4, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS2", team: "enemy", name: "Keylogger", ...generateRandomStats("enemy"), x: 1, y: 7, range: 1, move: 1, special: "Leeches attack", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "BUG3", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 5, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS3", team: "enemy", name: "Rootkit", ...generateRandomStats("enemy"), x: 3, y: 7, range: 1, move: 1, special: "Hard to detect", role: "enemy", Icon: getIconComponent(PiVirusFill) },
  ], 
  wedge: [
    // Spearhead
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 3, y: 0, range: 1, move: 2, special: "Charge boost", role: "Fighter", Icon: getIconComponent(SiTailwindcss) },

    // Second line
    { id: "react", team: "player", name: "React", ...generateRandomStats("Fighter"), x: 2, y: 1, range: 1, move: 1, special: "Double attack", role: "Fighter", Icon: getIconComponent(SiReact) },
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 4, y: 1, range: 1, move: 1, special: "Fast deploy", role: "Fighter", Icon: getIconComponent(SiVercel) },

    // Support flank
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 1, y: 2, range: 3, move: 1, special: "Vision boost", role: "Support", Icon: getIconComponent(SiFigma) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 5, y: 2, range: 2, move: 1, special: "Flank buff", role: "Support", Icon: getIconComponent(SiShadcnui) },

    // Backend tanks
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Tank"), x: 3, y: 3, range: 1, move: 1, special: "Heals wedge", role: "Tank", Icon: getIconComponent(SiSupabase) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 2, y: 3, range: 1, move: 1, special: "AOE support", role: "Tank", Icon: getIconComponent(SiNodedotjs) },

    // Enemy wall (7 enemies to match 7 players)
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 3, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS1", team: "enemy", name: "Trojan", ...generateRandomStats("enemy"), x: 2, y: 6, range: 1, move: 2, special: "Infect line", role: "enemy", Icon: getIconComponent(GiTrojanHorse) },
    { id: "VIRUS2", team: "enemy", name: "Worm", ...generateRandomStats("enemy"), x: 4, y: 6, range: 1, move: 2, special: "AOE spread", role: "enemy", Icon: getIconComponent(FaWorm) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 1, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG3", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 5, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("enemy"), x: 2, y: 7, range: 1, move: 1, special: "Disable healing", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS4", team: "enemy", name: "Spyware", ...generateRandomStats("enemy"), x: 4, y: 7, range: 1, move: 1, special: "Reduces range", role: "enemy", Icon: getIconComponent(PiVirusFill) },
  ], 
  fortress: [
    // Outer Tank Shell
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 2, y: 1, range: 1, move: 1, special: "Code shield", role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 1, y: 2, range: 1, move: 1, special: "AOE guard", role: "Tank", Icon: getIconComponent(SiNodedotjs) },
    { id: "postgresql", team: "player", name: "PostgreSQL", ...generateRandomStats("Tank"), x: 3, y: 2, range: 1, move: 1, special: "Structured defense", role: "Tank", Icon: getIconComponent(SiPostgresql) },
    { id: "mongodb", team: "player", name: "MongoDB", ...generateRandomStats("Tank"), x: 2, y: 3, range: 1, move: 1, special: "NoSQL randomness", role: "Tank", Icon: getIconComponent(SiMongodb) },

    // Inner Support Core
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Support"), x: 2, y: 2, range: 1, move: 1, special: "Heals inner ring", role: "Support", Icon: getIconComponent(SiSupabase) },
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 1, y: 1, range: 3, move: 1, special: "Scan perimeter", role: "Support", Icon: getIconComponent(SiFigma) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 3, y: 1, range: 2, move: 1, special: "UI buff", role: "Support", Icon: getIconComponent(SiShadcnui) },

    // Enemies trying to penetrate the wall (7 enemies to match 7 players)
    { id: "VIRUS1", team: "enemy", name: "Ransomware", ...generateRandomStats("enemy"), x: 2, y: 7, range: 1, move: 1, special: "Disable healing", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 1, y: 6, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 3, y: 6, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS2", team: "enemy", name: "Trojan", ...generateRandomStats("enemy"), x: 0, y: 7, range: 1, move: 2, special: "Infect nearby", role: "enemy", Icon: getIconComponent(GiTrojanHorse) },
    { id: "VIRUS3", team: "enemy", name: "Worm", ...generateRandomStats("enemy"), x: 4, y: 7, range: 1, move: 2, special: "Spread virus", role: "enemy", Icon: getIconComponent(FaWorm) },
    { id: "BUG3", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 1, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG4", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 3, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
  ], 
  storm: [
    // Random scattered fighters
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 1, y: 0, range: 1, move: 2, special: "Speed burst", role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 4, y: 0, range: 1, move: 2, special: "Buff adjacent allies", role: "Fighter", Icon: getIconComponent(SiTailwindcss) },
    { id: "react", team: "player", name: "React", ...generateRandomStats("Fighter"), x: 6, y: 1, range: 1, move: 2, special: "Double hit", role: "Fighter", Icon: getIconComponent(SiReact) },

    // Staggered supports
    { id: "nextjs", team: "player", name: "Next.js", ...generateRandomStats("Support"), x: 2, y: 2, range: 4, move: 1, special: "Distance strike", role: "Support", Icon: getIconComponent(SiNextdotjs) },
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 5, y: 2, range: 3, move: 1, special: "Reveals enemies", role: "Support", Icon: getIconComponent(SiFigma) },

    // Center tanks
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 3, y: 3, range: 1, move: 1, special: "Minimum guaranteed hit", role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "n8n", team: "player", name: "n8n", ...generateRandomStats("Tank"), x: 2, y: 4, range: 1, move: 1, special: "Autofire engine", role: "Tank", Icon: getIconComponent(SiN8N) },

    // Enemies caught off guard (7 enemies to match 7 players)
    { id: "VIRUS1", team: "enemy", name: "Trojan", ...generateRandomStats("enemy"), x: 3, y: 7, range: 1, move: 2, special: "Infect nearby units", role: "enemy", Icon: getIconComponent(GiTrojanHorse) },
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 2, y: 6, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS2", team: "enemy", name: "Worm", ...generateRandomStats("enemy"), x: 4, y: 6, range: 1, move: 2, special: "Spread virus", role: "enemy", Icon: getIconComponent(FaWorm) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 1, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG3", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 5, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("enemy"), x: 2, y: 7, range: 1, move: 1, special: "Disable healing", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS4", team: "enemy", name: "Spyware", ...generateRandomStats("enemy"), x: 4, y: 7, range: 1, move: 1, special: "Reduces range", role: "enemy", Icon: getIconComponent(PiVirusFill) },
  ],
  cross: [
    // Center control
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Support"), x: 3, y: 3, range: 1, move: 1, special: "Heals cross paths", role: "Support", Icon: getIconComponent(SiSupabase) },

    // North arm
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 3, y: 1, range: 1, move: 2, special: "Fast deploy", role: "Fighter", Icon: getIconComponent(SiVercel) },

    // South arm
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 3, y: 5, range: 1, move: 1, special: "Sturdy strike", role: "Tank", Icon: getIconComponent(SiTypescript) },

    // East arm
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 5, y: 3, range: 3, move: 1, special: "Vision boost", role: "Support", Icon: getIconComponent(SiFigma) },

    // West arm
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 1, y: 3, range: 1, move: 1, special: "Area damage", role: "Tank", Icon: getIconComponent(SiNodedotjs) },

    // Enemy flanking sides (5 enemies to match 5 players)
    { id: "VIRUS1", team: "enemy", name: "Worm", ...generateRandomStats("enemy"), x: 0, y: 0, range: 1, move: 2, special: "Spread corruption", role: "enemy", Icon: getIconComponent(FaWorm) },
    { id: "BUG1", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 6, y: 0, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS2", team: "enemy", name: "Trojan", ...generateRandomStats("enemy"), x: 0, y: 6, range: 1, move: 2, special: "Infect nearby", role: "enemy", Icon: getIconComponent(GiTrojanHorse) },
    { id: "BUG2", team: "enemy", name: "BUG", ...generateRandomStats("enemy"), x: 6, y: 6, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("enemy"), x: 3, y: 7, range: 1, move: 1, special: "Disable healing", role: "enemy", Icon: getIconComponent(PiVirusFill) },
  ], 
  
  hive: [
    // Player Units
    { id: "supabase", team: "player", name: "Supabase", ...generateRandomStats("Support"), x: 3, y: 3, range: 1, move: 1, special: "Heals all adjacent", role: "Support", Icon: getIconComponent(SiSupabase) },
    { id: "typescript", team: "player", name: "TypeScript", ...generateRandomStats("Tank"), x: 2, y: 3, range: 1, move: 1, special: "Code shield", role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "postgresql", team: "player", name: "PostgreSQL", ...generateRandomStats("Tank"), x: 4, y: 3, range: 1, move: 1, special: "Structured shield", role: "Tank", Icon: getIconComponent(SiPostgresql) },
    { id: "mongodb", team: "player", name: "MongoDB", ...generateRandomStats("Tank"), x: 3, y: 2, range: 1, move: 1, special: "Chaos block", role: "Tank", Icon: getIconComponent(SiMongodb) },
    { id: "node", team: "player", name: "Node.js", ...generateRandomStats("Tank"), x: 3, y: 4, range: 1, move: 1, special: "AOE protect", role: "Tank", Icon: getIconComponent(SiNodedotjs) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 2, y: 2, range: 2, move: 1, special: "Boost UI squad", role: "Support", Icon: getIconComponent(SiShadcnui) },
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 4, y: 2, range: 3, move: 1, special: "Scan support", role: "Support", Icon: getIconComponent(SiFigma) },

    // Enemies
    { id: "BUG1", team: "enemy", name: "Bug", ...generateRandomStats("enemy"), x: 3, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug), special: "None" },
    { id: "BUG2", team: "enemy", name: "Bug", ...generateRandomStats("enemy"), x: 2, y: 6, range: 1, move: 1, role: "enemy", Icon: getIconComponent(GiTrojanHorse), special: "Infects nearby" },
    { id: "VIRUS1", team: "enemy", name: "Trojan", ...generateRandomStats("enemy"), x: 4, y: 6, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaWorm), special: "Infects nearby" },
    { id: "VIRUS2", team: "enemy", name: "Worm", ...generateRandomStats("enemy"), x: 1, y: 5, range: 1, move: 1, role: "enemy", Icon: getIconComponent(PiVirusFill), special: "None" },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("enemy"), x: 5, y: 5, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug), special: "Disables healing" },
    { id: "VIRUS4", team: "enemy", name: "Spyware", ...generateRandomStats("enemy"), x: 0, y: 4, range: 1, move: 1, role: "enemy", Icon: getIconComponent(GiTrojanHorse), special: "Spreads on hit" },
    { id: "VIRUS5", team: "enemy", name: "Rootkit", ...generateRandomStats("enemy"), x: 6, y: 4, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaWorm), special: "None" }
  ], 
  snipers: [
    // Player Units
    { id: "react", team: "player", name: "React", ...generateRandomStats("Fighter"), x: 2, y: 1, range: 1, move: 1, special: "Double hit", role: "Fighter", Icon: getIconComponent(SiReact) },
    { id: "vercel", team: "player", name: "Vercel", ...generateRandomStats("Fighter"), x: 3, y: 1, range: 1, move: 2, special: "Fast deploy", role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "tailwind", team: "player", name: "Tailwind", ...generateRandomStats("Fighter"), x: 4, y: 1, range: 1, move: 1, special: "Style boost", role: "Fighter", Icon: getIconComponent(SiTailwindcss) },
    { id: "figma", team: "player", name: "Figma", ...generateRandomStats("Support"), x: 2, y: 3, range: 5, move: 1, special: "Long scan", role: "Support", Icon: getIconComponent(SiFigma) },
    { id: "nextjs", team: "player", name: "Next.js", ...generateRandomStats("Support"), x: 3, y: 3, range: 5, move: 1, special: "SSR snipe", role: "Support", Icon: getIconComponent(SiNextdotjs) },
    { id: "shadcn", team: "player", name: "Shadcn UI", ...generateRandomStats("Support"), x: 4, y: 3, range: 4, move: 1, special: "UI buff from range", role: "Support", Icon: getIconComponent(SiShadcnui) },

    // Enemies
    { id: "BUG1", team: "enemy", name: "Bug", ...generateRandomStats("enemy"), x: 3, y: 7, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug), special: "None" },
    { id: "BUG2", team: "enemy", name: "Bug", ...generateRandomStats("enemy"), x: 2, y: 6, range: 1, move: 1, role: "enemy", Icon: getIconComponent(GiTrojanHorse), special: "Infects nearby" },
    { id: "VIRUS1", team: "enemy", name: "Trojan", ...generateRandomStats("enemy"), x: 4, y: 6, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaWorm), special: "Infects nearby" },
    { id: "VIRUS2", team: "enemy", name: "Worm", ...generateRandomStats("enemy"), x: 1, y: 5, range: 1, move: 1, role: "enemy", Icon: getIconComponent(PiVirusFill), special: "None" },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", ...generateRandomStats("enemy"), x: 5, y: 5, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaBug), special: "Disables healing" },
    { id: "VIRUS4", team: "enemy", name: "Spyware", ...generateRandomStats("enemy"), x: 0, y: 4, range: 1, move: 1, role: "enemy", Icon: getIconComponent(GiTrojanHorse), special: "Spreads on hit" },
    { id: "VIRUS5", team: "enemy", name: "Rootkit", ...generateRandomStats("enemy"), x: 6, y: 4, range: 1, move: 1, role: "enemy", Icon: getIconComponent(FaWorm), special: "None" }
  ]

};
