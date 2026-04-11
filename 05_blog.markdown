---
layout: page
title: Blog
permalink: /blog/
hide_banner: true
---

<div class="instagram-feed">
    <div class="container">
        <div class="instagram-embed" style="max-width: 900px; margin: 0 auto;">
            <iframe
                id="instagram-feed"
                src="https://www.instagram.com/agrup.folklorica.igualadina/embed"
                width="100%"
                frameborder="0"
                scrolling="no"
                style="border: none; overflow: hidden;"
                onload="resizeIframe(this)">
            </iframe>
        </div>
    </div>
</div>

<script>
function updateSize() {
  const iframe = document.getElementById('instagram-feed');
  try {
      const width = window.innerWidth;
      if (width > 900) {
        iframe.height = `${300*2 + 150}px`;
      } else {
        iframe.height = `${width/3*2 + 150}px`;
      }
  } catch (error) {
    console.error('Unable to adjust iframe height:', error);
  }  
}

document.addEventListener('resize', () => {
  updateSize();
});
updateSize();

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}
</script>