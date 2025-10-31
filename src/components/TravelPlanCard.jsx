export default function TravelPlanCard({ plan, onDelete, onAddFavourites }) {

  return (
    <div key={plan.id} className="travel-item">
      <figure>
        <img src={plan.image} alt="" />
      </figure>
      <div className="description">
        <h2>{plan.destination}</h2>
        <p>{plan.description}</p>
        <p className="price">
          <strong>Price:</strong> {plan.totalCost} €
        </p>
        <div>
          {plan.totalCost <= 350 && <div className="btn btn-green">Great Deal</div>}
          {plan.totalCost >= 1500 && <div className="btn btn-blue">Premium</div>}
          {plan.allInclusive && <div className="btn btn-blue">All Inclusive</div>}
        </div>
        <div className="d-actions">
          <button onClick={() => { onDelete(plan.id) }} className="btn btn-delete">Delete</button>
          <button onClick={() => { onAddFavourites(plan.id )}}>♡</button>
        </div>
      </div>
    </div>
  )

}