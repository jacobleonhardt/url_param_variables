function nextPage() {
  const data = document.querySelector('#user-input').value
  const param = new URLSearchParams()
  param.append("data", data)

  const url = `results.html?${param.toString()}`
  location.href = url
}
