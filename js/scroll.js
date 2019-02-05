(function () {
  const linksToAnchors = document.querySelectorAll('a[href^="#"]')
  linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler))

  function anchorLinkHandler (e) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top)

    e.preventDefault()

    const targetID = this.getAttribute('href')
    const targetAnchor = document.querySelector(targetID)

    if (!targetAnchor) return

    const originalTop = distanceToTop(targetAnchor)

    window.scrollBy({ top: originalTop - 66, left: 0, behavior: 'smooth' })
  }
})()
