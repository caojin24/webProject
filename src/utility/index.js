
function ajax (jquery, url) {
  return jquery.ajax({
    url: url,
    type: 'get',
    dataType: 'jsonp',
    jsonpCallback: 'callback'
  })
}

export {
  ajax
}
