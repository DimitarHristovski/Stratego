import type { ReactElement } from 'react';

export type UnitRole = 'frontend' | 'backend' | 'devops' | 'database' | 'enemy' | 'support' | 'Fighter' | 'Tank' | 'tank';

export interface Unit {
  id: string;
  team: string;
  name: string;
  hp: number;
  maxHp: number;
  x: number;
  y: number;
  range: number;
  move: number;
  attack: number;
  special?: string;
  Icon: () => ReactElement;
  support?: boolean;
  role?: UnitRole;
} 