import React from 'react';

const SpellInfo = (props) => {
  let {spell}=props
  return (
    <div>
      {spell.desc && <p>{spell.desc}</p>}
      {spell.range && typeof(spell.range) !=='object' && <p><strong>Range:</strong> {spell.range}</p>}
      {spell.attack_type && <p><strong>Attack Type:</strong> {spell.attack_type}</p>}
      {spell.strength && <p><strong>Attack Type:</strong> {spell.strength}</p>}
      {spell.size && <p><strong>Attack Type:</strong> {spell.size}</p>}
      {spell.hit_dice && <p><strong>Attack Type:</strong> {spell.hit_dice}</p>}
      {spell.cost && <p><strong>cost:</strong> {spell.cost.quantity} {spell.cost.unit}</p>}
      {spell.rarity && <p><strong>rarity:</strong> {spell.rarity.name}</p>}
      
    </div>
  );
};

export default SpellInfo;