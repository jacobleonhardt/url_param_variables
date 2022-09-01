function nextPage() {
  const data = document.querySelector('#user-input').value
  const param = new URLSearchParams()
  param.append("data", data)

  const url = `results.html?${param.toString()}`
  location.href = url
}

function getParams() {
  const params = new URLSearchParams(window.location.search)
  const data = params.get("data")
  const placement = document.querySelector('#view-results')
  placement.innerHTML = `<span>${data}</span>`
}
