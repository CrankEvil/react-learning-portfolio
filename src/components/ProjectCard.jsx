function ProjectCard(props) {
  return (
    <div className="project-card">

      <img
        src={props.image}
        alt={props.title}
      />

      <h2>{props.title}</h2>

      <p>{props.description}</p>

      <p>
        <b>React Project</b>
      </p>

    </div>
  );
}

export default ProjectCard;