import React from 'react'

const Contacts = ({ character }) => {
  return (
    <article className="Card">
      <div className="CardImage">
        <img src={character.image} alt={character.name} />
      </div>
      <ul>
        <h2 className="CardName">{character.name}</h2>
        <li className="CardSpecies">{character.species}</li>
        <li className="CardGender">{character.gender}</li>
        <li className="CardStatus">{character.status}</li>
      </ul>
    </article>
  )
}

export default Contacts
