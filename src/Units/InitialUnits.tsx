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

  const getIconComponent = (IconComponent: React.ElementType) => () => <IconComponent />;

  export const formations = {
    // ========== FORMATION: PHALANX (Defensive Wall) ==========
    phalanx: [
        // FRONTEND UNITS (Up front)
        { id: "react", team: "player", name: "React", hp: 100, maxHp: 100, x: 1, y: 0, range: 1, move: 5, attack: 60, special: "Double hit on first attack", role: "support", Icon: getIconComponent(SiReact) },
        { id: "figma", team: "player", name: "Figma", hp: 180, maxHp: 180, x: 2, y: 0, range: 5, move: 1, attack: 50, special: "Can scan enemies in range", role: "support", Icon: getIconComponent(SiFigma) },
        { id: "vercel", team: "player", name: "Vercel", hp: 170, maxHp: 170, x: 3, y: 0, range: 1, move: 1, attack: 80, special: "Fast deploy: can move twice", role: "Fighter", Icon: getIconComponent(SiVercel) },
        { id: "tailwind", team: "player", name: "Tailwind", hp: 185, maxHp: 185, x: 4, y: 0, range: 1, move: 1, attack: 80, special: "Styles the board with power boosts", role: "Fighter", Icon: getIconComponent(SiTailwindcss) },
        { id: "nextjs", team: "player", name: "Next.js", hp: 100, maxHp: 100, x: 5, y: 0, range: 5, move: 1, attack: 50, special: "Server-side strike from distance", role: "support", Icon: getIconComponent(SiNextdotjs) },
        { id: "shadcn", team: "player", name: "Shadcn UI", hp: 190, maxHp: 190, x: 6, y: 0, range: 1, move: 5, attack: 60, special: "Buffs UI-based units nearby", role: "support", Icon: getIconComponent(SiShadcnui) },
    
        // BACKEND UNITS (Behind front line)
        { id: "typescript", team: "player", name: "TypeScript", hp: 390, maxHp: 390, x: 1, y: 1, range: 2, move: 1, attack: 40, special: "Always hits for minimum damage", role: "Tank", Icon: getIconComponent(SiTypescript) },
        { id: "postgresql", team: "player", name: "PostgreSQL", hp: 205, maxHp: 205, x: 2, y: 1, range: 2, move: 1, attack: 40, special: "Data-driven defense aura", role: "Tank", Icon: getIconComponent(SiPostgresql) },
        { id: "mongodb", team: "player", name: "MongoDB", hp: 295, maxHp: 295, x: 3, y: 1, range: 2, move: 1, attack: 40, special: "NoSQL scatter shot", role: "Tank", Icon: getIconComponent(SiMongodb) },
        { id: "supabase", team: "player", name: "Supabase", hp: 320, maxHp: 320, x: 4, y: 1, range: 2, move: 1, attack: 20, support: true, special: "Heals adjacent allies", role: "tank", Icon: getIconComponent(SiSupabase) },
        { id: "n8n", team: "player", name: "n8n", hp: 295, maxHp: 295, x: 5, y: 1, range: 2, move: 1, attack: 40, special: "Automates attacks every other turn", role: "Tank", Icon: getIconComponent(SiN8N) },
        { id: "node", team: "player", name: "Node.js", hp: 410, maxHp: 410, x: 6, y: 1, range: 2, move: 1, attack: 40, special: "Area attack", role: "Tank", Icon: getIconComponent(SiNodedotjs) },
    
        // Enemy Units (Standard Formation)
        { id: "BUG1", team: "enemy", name: "BUG", hp: 180, maxHp: 180, x: 1, y: 7, range: 1, move: 1, attack: 15, role: "enemy", Icon: getIconComponent(FaBug) },
        { id: "BUG2", team: "enemy", name: "BUG", hp: 160, maxHp: 160, x: 2, y: 7, range: 1, move: 1, attack: 18, role: "enemy", Icon: getIconComponent(FaBug) },
        { id: "BUG3", team: "enemy", name: "BUG", hp: 140, maxHp: 140, x: 3, y: 7, range: 1, move: 1, attack: 16, role: "enemy", Icon: getIconComponent(FaBug) },
        { id: "BUG4", team: "enemy", name: "BUG", hp: 270, maxHp: 270, x: 4, y: 7, range: 1, move: 1, attack: 12, role: "enemy", Icon: getIconComponent(FaBug) },
        { id: "BUG6", team: "enemy", name: "BUG", hp: 120, maxHp: 120, x: 5, y: 7, range: 1, move: 1, attack: 14, role: "enemy", Icon: getIconComponent(FaBug) },
        { id: "BUG7", team: "enemy", name: "BUG", hp: 200, maxHp: 200, x: 5, y: 6, range: 1, move: 1, attack: 13, role: "enemy", Icon: getIconComponent(FaBug) },
        { id: "BUG8", team: "enemy", name: "BUG", hp: 80, maxHp: 80, x: 6, y: 7, range: 1, move: 1, attack: 17, special: "Fast scout", role: "enemy", Icon: getIconComponent(FaBug) },
        { id: "BUG9", team: "enemy", name: "BUG", hp: 130, maxHp: 130, x: 3, y: 6, range: 1, move: 1, attack: 19, role: "enemy", Icon: getIconComponent(FaBug) },
        { id: "BUG10", team: "enemy", name: "BUG", hp: 150, maxHp: 150, x: 2, y: 6, range: 1, move: 1, attack: 21, special: "Resistant armor", role: "enemy", Icon: getIconComponent(FaBug) },
        { id: "VIRUS1", team: "enemy", name: "Trojan", hp: 200, maxHp: 200, x: 4, y: 6, range: 1, move: 2, attack: 55, special: "Infects nearby units on hit", role: "enemy", Icon: getIconComponent(GiTrojanHorse) },
        { id: "VIRUS2", team: "enemy", name: "Worm", hp: 100, maxHp: 100, x: 6, y: 6, range: 1, move: 2, attack: 55, special: "Spreads on attack", role: "enemy", Icon: getIconComponent(FaWorm) },
        { id: "VIRUS3", team: "enemy", name: "Ransomware", hp: 250, maxHp: 250, x: 1, y: 6, range: 1, move: 1, attack: 50, special: "Disables healing", role: "enemy", Icon: getIconComponent(PiVirusFill) }
      ],
  
    // ========== FORMATION: SPEARHEAD ==========
  spearhead: [
    // FRONTLINE
    { id: "react", team: "player", name: "React", hp: 100, maxHp: 100, x: 3, y: 0, range: 1, move: 1, attack: 60, special: "Double hit on first attack", role: "support", Icon: getIconComponent(SiReact) },
    { id: "vercel", team: "player", name: "Vercel", hp: 170, maxHp: 170, x: 2, y: 1, range: 1, move: 1, attack: 80, special: "Fast deploy: can move twice", role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "tailwind", team: "player", name: "Tailwind", hp: 185, maxHp: 185, x: 4, y: 1, range: 1, move: 1, attack: 80, special: "Styles the board with power boosts", role: "Fighter", Icon: getIconComponent(SiTailwindcss) },

    // MIDFIELD
    { id: "figma", team: "player", name: "Figma", hp: 180, maxHp: 180, x: 1, y: 2, range: 1, move: 1, attack: 50, special: "Can scan enemies in range", role: "support", Icon: getIconComponent(SiFigma) },
    { id: "shadcn", team: "player", name: "Shadcn UI", hp: 190, maxHp: 190, x: 5, y: 2, range: 1, move: 1, attack: 60, special: "Buffs UI-based units nearby", role: "support", Icon: getIconComponent(SiShadcnui) },
    { id: "nextjs", team: "player", name: "Next.js", hp: 100, maxHp: 100, x: 3, y: 2, range: 1, move: 1, attack: 50, special: "Server-side strike from distance", role: "support", Icon: getIconComponent(SiNextdotjs) },

    // BACKEND
    { id: "typescript", team: "player", name: "TypeScript", hp: 390, maxHp: 390, x: 1, y: 3, range: 1, move: 1, attack: 40, special: "Always hits for minimum damage", role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "postgresql", team: "player", name: "PostgreSQL", hp: 205, maxHp: 205, x: 2, y: 3, range: 1, move: 1, attack: 40, special: "Data-driven defense aura", role: "Tank", Icon: getIconComponent(SiPostgresql) },
    { id: "mongodb", team: "player", name: "MongoDB", hp: 295, maxHp: 295, x: 3, y: 3, range: 1, move: 1, attack: 40, special: "NoSQL scatter shot", role: "Tank", Icon: getIconComponent(SiMongodb) },
    { id: "supabase", team: "player", name: "Supabase", hp: 320, maxHp: 320, x: 4, y: 3, range: 1, move: 1, attack: 40, support: true, special: "Heals adjacent allies", role: "tank", Icon: getIconComponent(SiSupabase) },
    { id: "n8n", team: "player", name: "n8n", hp: 295, maxHp: 295, x: 5, y: 3, range: 1, move: 1, attack: 40, special: "Automates attacks every other turn", role: "Tank", Icon: getIconComponent(SiN8N) },
    { id: "node", team: "player", name: "Node.js", hp: 410, maxHp: 410, x: 6, y: 3, range: 1, move: 1, attack: 40, special: "Area attack", role: "Tank", Icon: getIconComponent(SiNodedotjs) },

    // ENEMIES
    { id: "BUG1", team: "enemy", name: "BUG", hp: 180, maxHp: 180, x: 3, y: 7, range: 1, move: 1, attack: 15, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG2", team: "enemy", name: "BUG", hp: 160, maxHp: 160, x: 2, y: 7, range: 1, move: 1, attack: 18, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG3", team: "enemy", name: "BUG", hp: 140, maxHp: 140, x: 4, y: 7, range: 1, move: 1, attack: 16, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG4", team: "enemy", name: "BUG", hp: 270, maxHp: 270, x: 3, y: 6, range: 1, move: 1, attack: 12, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS1", team: "enemy", name: "Trojan", hp: 200, maxHp: 200, x: 1, y: 6, range: 1, move: 2, attack: 55, special: "Infects nearby units on hit", role: "enemy", Icon: getIconComponent(GiTrojanHorse) },
    { id: "VIRUS2", team: "enemy", name: "Worm", hp: 100, maxHp: 100, x: 6, y: 6, range: 1, move: 2, attack: 55, special: "Spreads on attack", role: "enemy", Icon: getIconComponent(FaWorm) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", hp: 250, maxHp: 250, x: 2, y: 6, range: 1, move: 1, attack: 50, special: "Disables healing", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS4", team: "enemy", name: "Trojan", hp: 230, maxHp: 230, x: 0, y: 7, range: 1, move: 2, attack: 25, special: "Infects nearby units on hit", role: "enemy", Icon: getIconComponent(GiTrojanHorse) },

],

  // ========== FORMATION: AMBUSH / FLANK ==========
  ambush: [
    // Ambush units and support in staggered flank
    { id: "vercel", team: "player", name: "Vercel", hp: 170, maxHp: 170, x: 2, y: 1, range: 1, move: 1, attack: 80, special: "Fast deploy: can move twice", role: "Fighter", Icon: getIconComponent(SiVercel) },
    { id: "figma", team: "player", name: "Figma", hp: 180, maxHp: 180, x: 1, y: 2, range: 1, move: 1, attack: 50, special: "Can scan enemies in range", role: "support", Icon: getIconComponent(SiFigma) },
    { id: "react", team: "player", name: "React", hp: 100, maxHp: 100, x: 3, y: 1, range: 1, move: 1, attack: 60, special: "Double hit on first attack", role: "support", Icon: getIconComponent(SiReact) },
    { id: "shadcn", team: "player", name: "Shadcn UI", hp: 190, maxHp: 190, x: 5, y: 1, range: 1, move: 1, attack: 60, special: "Buffs UI-based units nearby", role: "support", Icon: getIconComponent(SiShadcnui) },
    { id: "tailwind", team: "player", name: "Tailwind", hp: 185, maxHp: 185, x: 6, y: 2, range: 1, move: 1, attack: 80, special: "Styles the board with power boosts", role: "Fighter", Icon: getIconComponent(SiTailwindcss) },

    // Backend cover
    { id: "typescript", team: "player", name: "TypeScript", hp: 390, maxHp: 390, x: 2, y: 3, range: 1, move: 1, attack: 40, special: "Always hits for minimum damage", role: "Tank", Icon: getIconComponent(SiTypescript) },
    { id: "node", team: "player", name: "Node.js", hp: 410, maxHp: 410, x: 4, y: 3, range: 1, move: 1, attack: 40, special: "Area attack", role: "Tank", Icon: getIconComponent(SiNodedotjs) },
    { id: "supabase", team: "player", name: "Supabase", hp: 320, maxHp: 320, x: 3, y: 2, range: 1, move: 1, attack: 40, support: true, special: "Heals adjacent allies", role: "tank", Icon: getIconComponent(SiSupabase) },

    // Enemies
    { id: "BUG5", team: "enemy", name: "BUG", hp: 90, maxHp: 90, x: 4, y: 7, range: 1, move: 1, attack: 50, special: "Long-range ping", role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "BUG6", team: "enemy", name: "BUG", hp: 120, maxHp: 120, x: 5, y: 7, range: 1, move: 1, attack: 14, role: "enemy", Icon: getIconComponent(FaBug) },
    { id: "VIRUS1", team: "enemy", name: "Trojan", hp: 200, maxHp: 200, x: 1, y: 6, range: 1, move: 2, attack: 55, special: "Infects nearby units on hit", role: "enemy", Icon: getIconComponent(GiTrojanHorse) },
    { id: "VIRUS2", team: "enemy", name: "Worm", hp: 100, maxHp: 100, x: 6, y: 6, range: 1, move: 2, attack: 55, special: "Spreads on attack", role: "enemy", Icon: getIconComponent(FaWorm) },
    { id: "VIRUS3", team: "enemy", name: "Ransomware", hp: 250, maxHp: 250, x: 2, y: 6, range: 1, move: 1, attack: 50, special: "Disables healing", role: "enemy", Icon: getIconComponent(PiVirusFill) },
    { id: "VIRUS4", team: "enemy", name: "Trojan", hp: 230, maxHp: 230, x: 0, y: 0, range: 1, move: 2, attack: 25, special: "Infects nearby units on hit", role: "enemy", Icon: getIconComponent(GiTrojanHorse) },

]
  };
  