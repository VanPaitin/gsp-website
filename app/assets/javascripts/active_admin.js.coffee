#= require arctic_admin/base

document.addEventListener 'DOMContentLoaded', (event) ->
  parent = document.getElementById('album_pictures_input')
  if parent
    child = parent.firstChild
    parent.removeChild child
  return
