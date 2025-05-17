import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function SelectedUnitCard() {
  const { selected } = useContext(GameContext);
  if (!selected) return null;

  return (
    <div className="absolute right-4 top-1/3 p-3 bg-gray-100 border rounded text-sm w-60 shadow-lg">
      <h2 className="font-bold mb-1">Selected Unit</h2>
      <p>🧱 <strong>{selected.name}</strong></p>
      <p>❤️ HP: {selected.hp}</p>
      <p>🎯 Attack: {selected.attack}</p>
      <p>🎯 Range: {selected.range}</p>
      <p>🚶‍♂️ Move: {selected.move}</p>
      {selected.special && <p>⭐ Special: {selected.special}</p>}
    </div>
  );
}
