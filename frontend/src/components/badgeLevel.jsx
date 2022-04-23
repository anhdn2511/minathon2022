function BadgeLevel({img, valid, title}) {
  return(
    <div class={`card p-1 rounded ${valid ? 'bg-danger' : 'opacity-50'}`}>
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body p-1 fw-bold ">
        <p class={`card-text text-center ${valid ? 'text-white' : ''}`}>{title}</p>
      </div>
    </div>
  )
}

export default BadgeLevel;