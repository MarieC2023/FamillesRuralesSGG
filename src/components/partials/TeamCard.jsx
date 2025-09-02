function TeamCard({ prenom, fonction, presentation, image, typeImage }) {
  return (
    <div className="team-card">
      <div className="team-image">
        <img
          src={`/assets/${image}`}
          alt={prenom ? `Portrait de ${prenom}` : "Portrait illustré"}
          className={typeImage === "photo" ? "photo" : "illustration"}
        />
      </div>
      {prenom && <h2 className="prenom">{prenom}</h2>}
      <p className="fonction">{fonction}</p>
      {presentation && <p className="presentation">{presentation}</p>}
    </div>
  );
}

export default TeamCard;
