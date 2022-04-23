function BadgeLevel({img, valid, title}) {
  return(
    <div class={`card p-1 rounded ${valid ? 'bg-success' : 'opacity-50'}`}>
      <div className="my-circle" style={{'background-color': '#ced4da'}}>
        <img  src={img} class="card-img-top" alt="..."/>
      </div>
      <div class="card-body p-1 fw-bold ">
        <p class={`card-text text-center ${valid ? 'text-white' : ''}`}>{title}</p>
      </div>
    </div>
  )
}

export default BadgeLevel;