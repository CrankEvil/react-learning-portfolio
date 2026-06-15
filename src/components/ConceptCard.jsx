function ConceptCard(props) {
  return (
    <div className="concept-card">

      <img
        src={props.image}
        alt={props.title}
      />

      <h2>{props.title}</h2>

      <p>{props.description}</p>

    </div>
  );
}

export default ConceptCard;