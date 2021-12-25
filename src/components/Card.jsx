import { Link } from "react-router-dom";

function Card(props) {
  console.log(props);

  return (
    <Link className="card-link" to={`${props.id}`} >
      <div className='pokemon-card' >
        { <p>{`#${props.id}`}</p>}
        {<img src={props.sprites.front_default} alt={props.name} />}
        {<p>{props.name}</p> }
      </div>
    </Link>
  )
}

export default Card;
