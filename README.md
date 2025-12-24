# Agrupació Folklòrica Igualadina - Website

Lloc web oficial de l'Agrupació Folklòrica Igualadina, entitat dedicada a preservar i difondre la cultura popular i tradicional catalana des de 1940.

## 🌐 Estructura del lloc web
La web té les següents pàgines:
* Inici (Conté un tauler d'anuncis, i una galeria de fotos)
* Història
* Espectacles
* Escola de dansa
* Calendari
* Contacte (Amb formulari de contacte)

## 📁 Estructura de fitxers
```
agrupaciofolkloricaigualadina/
├── _layouts/
│   ├── default.html      # Layout base amb navegació i banner
│   ├── home.html         # Layout de la pàgina d'inici
│   ├── page.html         # Layout per pàgines estàtiques
│   └── post.html         # Layout per articles del blog
├── _includes/
│   ├── head.html         # Meta tags i enllaços CSS/fonts
│   ├── banner.html       # Banner superior amb logo
│   ├── navigation.html   # Menú de navegació responsive
│   └── footer.html       # Peu de pàgina amb informació
├── _posts/               # Articles del blog
├── _sass/                # Fitxers SCSS (buit, tot a style.scss)
├── assets/
│   ├── css/
│   │   └── style.scss    # Tots els estils personalitzats
│   ├── images/           # Fotos vàries dels festivals i actuacions
│   ├── js/
│   │   └── main.js       # Script principal
│   └── logos/
│       └── logo_afi.jpg  # Logo de l'agrupació
├── index.markdown        # Pàgina d'inici
├── 01_història.markdown  # Pàgina de la història
├── 02_espectacles.markdown # Pàgina d'espectacles
├── 03_escola-de-dansa.markdown # Pàgina de l'escola
├── 04_calendari.markdown # Pàgina del calendari
├── 05_contacte.markdown  # Pàgina de contacte
├── favicon.ico          # Icona del lloc web
└── _config.yml          # Configuració de Jekyll
```

## 🚀 Tecnologies utilitzades
- **Jekyll**: Generador de llocs estàtics
- **SCSS**: Preprocessador CSS amb variables personalitzades
- **HTML5**: Estructura semàntica
- **JavaScript**: Interaccions i animacions
- **Formspree**: Processament de formularis de contacte
- **Google Fonts**: Tipografia Inter

## 🖼️ Gestió d'imatges
1. Pujar imatges a `assets/images/`
2. Actualitzar les referències en els fitxers markdown i layouts utilitzant html, com per exemple:
   * `<img src="assets/images/banner.jpg" alt="Banner" width="600" height="300">`
   * `<img src="assets/images/gallery.jpg" alt="Galeria" width="400" height="250">`
   * `<img src="assets/images/thumbnail.jpg" alt="Thumbnail" width="120" height="80">`

## 🛠️ Desenvolupament local
La forma fàcil és pot utilitzar `docker`, executar `docker compose up` i obrir `127.0.0.1:4000`.

Alternativament, per un desenvolupament local, es pot executar localment, utilitzant `ruby` per executar la applicació.

A través de `ruby` instal·lar:
```bash
# Windows
gem install bundler

# Arch linux
sudo pacman -S ruby-bundler
```

Aleshores, clonem el repositori amb `git`, i executem:

```bash
# Instal·lar dependències
bundle install

# Construir el lloc
bundle exec jekyll build

# Executar localment
bundle exec jekyll serve
```

El lloc estará disponible a `http://127.0.0.1:4000`

## 🎯 Pròximes funcionalitats

- [x] Integració amb Google Maps per la ubicació
- [x] Galeria d'imatges
- [x] Formulari de contacte
- [ ] Multiidioma (català/castellà)
- [ ] Sistema de cerca per articles
- [ ] Integració amb calendari Google
- [ ] Newsletter automatitzat

---

*Desenvolupat amb ❤️ per preservar la cultura folklòrica catalana*
