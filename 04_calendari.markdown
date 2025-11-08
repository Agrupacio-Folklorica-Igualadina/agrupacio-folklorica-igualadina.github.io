---
layout: page
title: Calendari
subtitle: Activitats, assajos i actuacions de l'AFI
permalink: /calendari/
show_contact_cta: true
hide_banner: true
---

# Calendari d'activitats
{% include_relative anunci.markdown %}

{% assign posts = site.posts | sort: 'date' | reverse %}
<div class="calendar-gallery">
  {% for post in posts limit:8 %}
    <div class="calendar-gallery-item">
      {% if post.image %}
        <a href="{{ post.url }}">
          <img src="{{ post.image }}" alt="{{ post.title }}" style="max-width: 100%; height: auto;">
        </a>
      {% endif %}
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p>{{ post.date | date: "%d/%m/%Y" }}</p>
      {% if post.excerpt %}
        <p>{{ post.excerpt | strip_html | truncate: 100 }}</p>
      {% endif %}
    </div>
  {% endfor %}
</div>
