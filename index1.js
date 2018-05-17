const app = {
 init: function(selectors) {
  this.max = 0

  document
    .querySelector(selectors.formSelector)
    .addEventListener('submit', ev => {
      ev.preventDefault()
      this.handleSubmit(ev)
    })
 },

 renderListItem: function() {
   const item = document.createElement('li')
   item.textContent = flick.name
   return item
 },

 handleSubmit: function(ev){
  ev.preventDefault()
  const f = ev.target
  const flick = {
    id: ++this.max,
    name: f.flickname.value,
  }
  console.log(flick)
  f.reset()
 },
}


app.init({
  formSelector: '#flickform',
  listSelector: '#flicklist',
})
