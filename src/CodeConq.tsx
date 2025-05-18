// CodeConq - Grid Strategy Game with Highlights and Expanded Features
// Now includes: Health Bars, Kill Counters, and Special Ability Tooltips

import { useState, useEffect } from "react";

import { formations } from "./Units/InitialUnits";
import { motion } from "framer-motion";



const GRID_SIZE = 8;


const getHpBarColor = (percent: number) => {
  if (percent > 60) return "bg-green-500";
  if (percent > 30) return "bg-yellow-400";
  return "bg-red-500";
};




function CodeConq() {
  const [currentFormation, setCurrentFormation] = useState<keyof typeof formations>("phalanx");
  const [units, setUnits] = useState(formations[currentFormation]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [turn, setTurn] = useState("player");
  const [log, setLog] = useState<string[]>([]);
  const [round, setRound] = useState(1);

  const getUnit = (x: number, y: number) => units.find((u) => u.x === x && u.y === y);
  const getUnitById = (id: string | null) => units.find((u) => u.id === id);
  const isInRange = (a: any, b: any, range: number) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y) <= range;

  const selected = getUnitById(selectedId);

  const highlightMove = selected ? [...Array(GRID_SIZE)].flatMap((_, y) =>
    [...Array(GRID_SIZE)].map((_, x) => {
      const distance = Math.abs(x - selected.x) + Math.abs(y - selected.y);
      return (distance <= selected.move && !getUnit(x, y)) ? `${x},${y}` : null;
    }).filter(Boolean)
  ) : [];

  const highlightAttack = selected ? [...Array(GRID_SIZE)].flatMap((_, y) =>
    [...Array(GRID_SIZE)].map((_, x) => {
      const target = getUnit(x, y);
      const distance = Math.abs(x - selected.x) + Math.abs(y - selected.y);
      return (target && target.team !== selected.team && distance <= selected.range) ? `${x},${y}` : null;
    }).filter(Boolean)
  ) : [];

  const handleClick = (x: number, y: number) => {
    if (turn !== "player") return;
    const clicked = getUnit(x, y);

    if (clicked && clicked.team === "player") {
      setSelectedId(clicked.id);
    } else if (selected) {
      if (clicked && clicked.team === "enemy" && isInRange(selected, clicked, selected.range)) {
        const dmg = selected.attack;
        setUnits((prev) =>
          prev.map((u) =>
            u.id === clicked.id ? { ...u, hp: u.hp - dmg } : u
          ).filter((u) => u.hp > 0)
        );
        setLog((prevLog) => [`${selected.name} attacked ${clicked.name} for ${dmg}`, ...prevLog]);
        setSelectedId(null);
        setTurn("enemy");
      } else if (!clicked && isInRange(selected, { x, y }, selected.move)) {
        setUnits((prev) => prev.map((u) => u.id === selected.id ? { ...u, x, y } : u));
        setSelectedId(null);
        setTurn("enemy");
      }
    }
  };

  useEffect(() => {
    if (turn !== "enemy") return;
    const timeout = setTimeout(() => {
      const enemies = units.filter((u) => u.team === "enemy");
      const players = units.filter((u) => u.team === "player");
      const updated = [...units];
      enemies.forEach((enemy) => {
        const target = players.reduce((prev, curr) => {
          const prevDist = Math.abs(enemy.x - prev.x) + Math.abs(enemy.y - prev.y);
          const currDist = Math.abs(enemy.x - curr.x) + Math.abs(enemy.y - curr.y);
          return currDist < prevDist ? curr : prev;
        });
        const distX = target.x - enemy.x;
        const distY = target.y - enemy.y;
        let moveX = 0, moveY = 0;
        if (Math.abs(distX) > Math.abs(distY)) moveX = Math.sign(distX);
        else moveY = Math.sign(distY);
        const newX = enemy.x + moveX;
        const newY = enemy.y + moveY;
        const alreadyOccupied = getUnit(newX, newY);
        if (!alreadyOccupied && Math.abs(distX) + Math.abs(distY) > enemy.range) {
          enemy.x = newX;
          enemy.y = newY;
          setLog((log) => [`${enemy.name} moved`, ...log]);
        } else if (isInRange(enemy, target, enemy.range)) {
          target.hp -= enemy.attack;
          setLog((log) => [`${enemy.name} attacked ${target.name} for ${enemy.attack}`, ...log]);
        }
      });
      setUnits(updated.filter((u) => u.hp > 0));
      setTurn("player");
      setRound((r) => r + 1);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [turn, units]);

  const checkEnd = () => {
    const playerLeft = units.some((u) => u.team === "player");
    const enemyLeft = units.some((u) => u.team === "enemy");
    if (!playerLeft) return "Game Over - Enemy Win!";
    if (!enemyLeft) return "Victory - Player wins!";
    return null;
  };

  const restartGame = () => {
    const formationKeys = Object.keys(formations) as Array<keyof typeof formations>;
    const currentIndex = formationKeys.indexOf(currentFormation);
    const nextFormation = formationKeys[(currentIndex + 1) % formationKeys.length];
    
    // Reset all game state
    setSelectedId(null);
    setTurn("player");
    setLog([]);
    setRound(1);
    
    // Update formation and units in sequence
    setCurrentFormation(nextFormation);
    setUnits(formations[nextFormation]);
  };

  // Add useEffect to handle formation changes
  useEffect(() => {
    setUnits(formations[currentFormation]);
  }, [currentFormation]);

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 space-y-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold">CodeConq</h1>
      <button
        onClick={restartGame}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        🔄 Switch to {Object.keys(formations)[(Object.keys(formations).indexOf(currentFormation) + 1) % Object.keys(formations).length]} Formation
      </button>
      <div className="text-sm text-gray-700">Current Formation: {currentFormation}</div>
      <div className="text-sm text-gray-700">Round: {round}</div>
  
      {/* Selected Unit Display */}
      {selected && (
        <div className="p-2 sm:p-3 bg-gray-100 border rounded text-xs sm:text-sm w-full max-w-md shadow-lg">
          <h2 className="font-bold mb-1">Selected Unit</h2>
          <p>🧱 <strong>{selected.name}</strong></p>
          <p>❤️ HP: {selected.hp}</p>
          <p>🎯 Attack: {selected.attack}</p>
          <p>🎯 Range: {selected.range}</p>
          <p>🚶‍♂️ Move: {selected.move}</p>
          {selected.special && <p>⭐ Special: {selected.special}</p>}
        </div>
      )}
  
      {/* Game Grid */}
      <div className="grid grid-cols-8 grid-rows-8 gap-2 w-fit border-2 border-gray-300 bg-white p-4 rounded-lg shadow-lg">
        {[...Array(GRID_SIZE)].flatMap((_, y) =>
          [...Array(GRID_SIZE)].map((_, x) => {
            const u = getUnit(x, y);
            const isSelected = u?.id === selectedId;
            const key = `${x},${y}`;
            const isMove = highlightMove.includes(key);
            const isAttack = highlightAttack.includes(key);
            const Icon = u?.Icon;
            const percent = u ? (u.hp / u.maxHp) * 100 : 0;
            const role = u?.role;
            return (
              <motion.div
                key={key}
                onClick={() => handleClick(x, y)}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-16 sm:w-20 sm:h-24 flex flex-col items-center justify-center border-2 border-gray-200 text-xs sm:text-sm cursor-pointer transition-all duration-200
                ${isSelected ? "bg-yellow-300 hover:bg-yellow-400" : isMove ? "bg-green-200 hover:bg-green-300" : isAttack ? "bg-red-200 hover:bg-red-300" : "bg-white hover:bg-gray-100"}`}
              >
                {Icon && (
                  <>
                    <div className="text-2xl mb-1"><Icon /></div>
                    <div className="w-full h-2 bg-gray-300 rounded">
                      <div className={`h-2 ${getHpBarColor(percent)} rounded`} style={{ width: `${percent}%` }}></div>
                    </div>
                    <div className="text-xs mt-1">{u.hp} HP</div>
                    <div className="text-xs mt-1">{role}</div>

                  </>
                )}
              </motion.div>
            );
          })
        )}
      </div>
  
      {/* Turn Info */}
      <div className="text-lg font-semibold">
        {checkEnd() || `${turn.toUpperCase()} TURN`}
      </div>
  
      {/* Battle Log */}
      <div className="max-h-32 overflow-y-auto border p-2 text-xs sm:text-sm bg-gray-100 w-full max-w-md sm:max-w-xl">
        {log.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  );
  
}

export default CodeConq;
