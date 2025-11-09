---
layout: page
title: Contacta amb nosaltres
permalink: /contacte/
hide_banner: true
---

## 📞 Informació de contacte

<div class="contact-section" style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div class="contact-card" style="flex: 1 1 320px; min-width: 280px;">
      <h3 style="font-weight: 600;">✉️ Correu electrònic:</h3>
    <a href="mailto:{{ site.email }}" style="text-decoration: none;">{{ site.email }}</a>
    <!--<h3 style="font-weight: 600;">📞 Telèfon:</h3>
    <a href="tel:+34938041234" style="text-decoration: none;">938 04 12 34</a>-->
    <h3 style="margin-top: 0; display: flex; align-items: center; gap: 0.5em;">🌐 Xarxes socials</h3>
    <ul style="list-style: none; padding: 0; margin: 0 0 1.5em 0; font-size: 1em;">
        <li>
            <a href="https://instagram.com/{{ site.instagram_username }}" target="_blank" rel="noopener" style="text-decoration: none" >
                <img src="{{ '/assets/icons/instagram.svg' | relative_url }}" alt="Instagram" style=" vertical-align: middle; width: 20px; height: 20px; margin-right: 6px; " />
                @{{ site.instagram_username }}
            </a>
        </li>
        <li>
            <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" rel="noopener" style="text-decoration: none" >
                <img src="{{ '/assets/icons/twitter.svg' | relative_url }}" alt="Twitter" style=" vertical-align: middle; width: 20px; height: 20px; margin-right: 6px; " />
                @{{ site.twitter_username }}
            </a>
        </li>
        <li>
            <a href="https://tiktok.com/@{{ site.tiktok_username }}" target="_blank" rel="noopener" style="text-decoration: none" >
                <img src="{{ '/assets/icons/tiktok.svg' | relative_url }}" alt="TikTok" style=" vertical-align: middle; width: 20px; height: 20px; margin-right: 6px; " />
                @{{ site.tiktok_username }}
            </a>
        </li>
    </ul>
  </div>
</div>

## 🗺️ Com arribar

<div class="how-to-arrive" style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: flex-start; margin-bottom: 2rem;">
  <div style="flex: 1 1 320px; min-width: 260px;">
    <span style="font-weight: 600;">📍 Adreça:</span><br>
    El nostre local d'assaig és el <strong>Centre Cívic Nord</strong>.<br>
    Carrer de Sant Martí de Tous, 8<br>
    08700 Igualada<br>
    Barcelona, Catalunya
  </div>
  <div style="flex: 1 1 320px; min-width: 260px; display: flex; flex-direction: column; align-items: center;">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.664340363945!2d1.617180315422236!3d41.58798097924745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a468b2e3e3e3e3%3A0x1234567890abcdef!2sCarrer%20de%20Sant%20Mart%C3%AD%20de%20Tous%2C%208%2C%2008700%20Igualada%2C%20Barcelona%2C%20Spain!5e0!3m2!1sca!2ses!4v1718030000000!5m2!1sca!2ses"
        width="100%"
        height="280"
        style="border:0; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Mapa ubicació Centre Cívic Nord"
    ></iframe>
    <p style="text-align: center; margin-top: 0.5em; color: #666;">
      <em>Centre cívic nord</em>
    </p>
  </div>
</div>

## ✉️ Envia'ns un missatge
<div style="background: #f1f3f6; border-radius: 12px; padding: 1.5rem 2rem; margin-bottom: 2.5rem; box-shadow: 0 1px 6px rgba(0,0,0,0.03);">
  <p style="font-size: 1.1em; margin-bottom: 0.5em;">
    Si tens qualsevol pregunta sobre els nostres <strong>assajos</strong>, <strong>espectacles</strong> o vols més informació, omple el formulari i ens posarem en contacte amb tu el més aviat possible.
  </p>
    <form id="contactForm" action="https://formspree.io/f/xpwkarng" method="POST" style="max-width: 600px; margin: 0 auto;">
    <div class="form-group">
        <label for="name">Nom complet *</label>
        <input type="text" id="name" name="name" required placeholder="El teu nom i cognoms">
        <span class="error-message" id="nameError" style="display:none;color:red;"></span>
    </div>
    <div class="form-group">
        <label for="email">Correu electrònic *</label>
        <input type="email" id="email" name="_replyto" required placeholder="exemple@correu.com">
        <span class="error-message" id="emailError" style="display:none;color:red;"></span>
    </div>
    <div class="form-group">
        <label for="phone">Telèfon</label>
        <input type="tel" id="phone" name="phone" placeholder="123 456 789">
        <span class="error-message" id="phoneError" style="display:none;color:red;"></span>
    </div>
    <div class="form-group">
        <label for="message">Missatge *</label>
        <textarea id="message" name="message" rows="6" required placeholder="Explica'ns la teva consulta o interès..."></textarea>
        <span class="error-message" id="messageError" style="display:none;color:red;"></span>
    </div>
    <div class="form-group checkbox-group">
        <input type="checkbox" id="privacy" name="privacy" required>
        <label for="privacy">He llegit i accepto la <a href="/privacitat">política de privacitat</a> *</label>
        <span class="error-message" id="privacyError" style="display:none;color:red;"></span>
    </div>
    <div class="form-group checkbox-group">
        <input type="checkbox" id="newsletter" name="newsletter">
        <label for="newsletter">Vull rebre informació sobre activitats i espectacles</label>
    </div>
    <div class="form-actions" style="display: flex; gap: 1em;">
        <button type="submit" class="btn btn-primary">Enviar missatge</button>
        <button type="reset" class="btn btn-secondary">Esborrar formulari</button>
    </div>
    </form>
</div>
<script>
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const privacy = document.getElementById('privacy').checked;

    // Validation flags
    let isValid = true;

    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9\s\.\+]{9,16}$/;
    if (phone === '' || !phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Valid phone number is required';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    // Privacy policy validation
    if (!privacy) {
        document.getElementById('privacyError').textContent = 'You must agree to the privacy policy';
        document.getElementById('privacyError').style.display = 'block';
        isValid = false;
    }

    // If form is valid, you can submit it or perform any other action
    if (isValid) {
        alert('Form submitted successfully!');
        this.submit();
    }
});
</script>
