function TeamCard(props) {
  return (
    <div className="team-card">

      <img
        src={props.image}
        alt={props.name}
      />

      <h2>{props.name}</h2>

      <p>
        Student ID: {props.id}
      </p>

    </div>
  );
}

export default TeamCard;