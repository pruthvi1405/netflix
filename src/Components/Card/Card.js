import './Card.css'

function Card({imagepath,cl}) {
    const base_url="https://image.tmdb.org/t/p/original"
  return (
      
    <div >
        <img className={`poster ${cl}`} src={`${base_url}${imagepath}`}></img>
    </div>
  )
}

export default Card