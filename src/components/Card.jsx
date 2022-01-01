import { Link } from "react-router-dom";

function Card({ id, name, img }) {
  return (
    <Link className="card-link" to={`${id}`} >
      <div className='pokemon-card' >
        <p>{`#${id}`}</p>
        {/* {<img src={img} alt={name} />} */}
        <p>{`${name}`}</p>
      </div>
    </Link>
  )
}

export default Card;
