export default function TravelFavourites({ list, onDelete }) {
  return (
    <>
      <h2>Favourites</h2>
      {list.map(item => {
        return (<div key={item.id} className="item">
          <p>{item.description}</p>
          <p className="d-actions">
            <strong>{item.totalCost} €</strong>
            <button onClick={ () => { onDelete(item.id) }} className="btn">Remove</button>
          </p>
        </div>)
      })}
    </>
  )
}