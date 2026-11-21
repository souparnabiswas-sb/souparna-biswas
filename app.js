(function () {
  var $ = function (id) { return document.getElementById(id); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clean = function (arr) { return arr.filter(function (x) { return x && x.replace(/\s+/g, '').length; }); };

  /* hero and strip */
  $('brand').textContent = SITE.name;
  $('heroName').textContent = SITE.name;
  $('eyebrow').textContent = SITE.eyebrow;
  $('lede').textContent = SITE.lede;
  $('cycle').textContent = SITE.cycle[0];
  $('strip').innerHTML = SITE.strip.map(function (s) {
    return '<div><span class="mono">' + s.k + '</span><span class="v">' + s.v + '</span></div>';
  }).join('');
  $('methods').innerHTML = SITE.methods.map(function (m) { return '<li>' + m + '</li>'; }).join('');
  $('year').textContent = new Date().getFullYear();

  /* filters, tiles and focus cards */
  var filters = $('filters'), grid = $('grid'), focusGrid = $('focusGrid');

  function addChip(id, label) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'chip'; b.textContent = label; b.dataset.f = id;
    b.setAttribute('aria-pressed', id === 'all' ? 'true' : 'false');
    b.addEventListener('click', function () { setFilter(id); });
    filters.appendChild(b);
  }
  addChip('all', 'All work');
  THEMES.forEach(function (t) { addChip(t.id, t.label); });

  PROJECTS.forEach(function (p, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'tile'; b.style.setProperty('--tc', p.color);
    b.innerHTML = '<span class="band"></span><span class="body">' +
      (p.status ? '<span class="status">' + p.status + '</span>' : '') +
      '<span class="kicker">' + p.kicker + '</span><h3>' + p.title + '</h3><p class="org">' + p.org + '</p>' +
      '<span class="tg">' + p.chips.map(function (c) { return '<span>' + c + '</span>'; }).join('') + '</span>' +
      '<span class="open">Read the brief →</span></span>';
    b.addEventListener('click', function () { openPanel(i); });
    grid.appendChild(b);
  });

  THEMES.forEach(function (t) {
    var n = PROJECTS.filter(function (p) { return p.tags.indexOf(t.id) > -1; }).length;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'fcard'; b.style.setProperty('--tc', t.c);
    b.innerHTML = '<strong>' + t.label + '</strong><span>' + t.blurb + '</span><em>' + n + (n === 1 ? ' project' : ' projects') + '</em>';
    b.addEventListener('click', function () {
      setFilter(t.id);
      $('work').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    });
    focusGrid.appendChild(b);
  });

  function setFilter(id) {
    Array.prototype.forEach.call(filters.children, function (c) { c.setAttribute('aria-pressed', c.dataset.f === id ? 'true' : 'false'); });
    Array.prototype.forEach.call(grid.children, function (tile, i) {
      tile.classList.toggle('dim', !(id === 'all' || PROJECTS[i].tags.indexOf(id) > -1));
    });
  }

  /* places, learning */
  $('places').innerHTML = PLACES.map(function (p) {
    return '<div class="place"><span class="mono">' + p.k + '</span><b>' + p.n + '</b><span class="d">' + p.d + '</span></div>';
  }).join('');
  $('events').innerHTML = LEARNING.map(function (e) {
    return '<li><span class="mono">' + e.k + '</span><b>' + e.n + '</b><span class="d">' + e.d + '</span></li>';
  }).join('');

  /* contact */
  var C = SITE.contact, links = [];
  if (C.email) links.push('<a href="mailto:' + C.email + '">' + C.email + '</a>');
  if (C.linkedin) links.push('<a href="' + C.linkedin + '" target="_blank" rel="noopener">LinkedIn</a>');
  if (C.github) links.push('<a href="' + C.github + '" target="_blank" rel="noopener">GitHub</a>');
  if (C.cv) links.push('<a href="' + C.cv + '" target="_blank" rel="noopener">Download CV</a>');
  var missing = todo('email, LinkedIn and CV link, in assets/data.js');
  $('contactRow').innerHTML = links.length ? links.join('') : missing;
  if (!links.length && !missing) $('contactRow').hidden = true;

  /* project panel */
  var panel = $('panel'), scrim = $('scrim'), pBody = $('pBody'), pCount = $('pCount');
  var cur = 0, opener = null;

  function section(title, html) { return html ? '<h4>' + title + '</h4>' + html : ''; }

  function render(i) {
    cur = (i + PROJECTS.length) % PROJECTS.length;
    var p = PROJECTS[cur];
    var did = clean(p.did), out = (p.out || '').trim();
    pCount.textContent = (cur + 1) + ' of ' + PROJECTS.length;
    pBody.style.setProperty('--tc', p.color);
    pBody.innerHTML = '<div class="band"></div><div class="mono" style="color:' + p.color + '">' + p.kicker + '</div>' +
      '<h3 id="pTitle">' + p.title + '</h3><p class="org">' + p.org + '</p>' +
      section('The question', '<p>' + p.question + '</p>') +
      section('My role', '<p>' + p.role + '</p>') +
      section('What I did', did.length ? '<ul>' + did.map(function (d) { return '<li>' + d + '</li>'; }).join('') + '</ul>' : '') +
      section('What it found', p.findings ? '<p>' + p.findings + '</p>' : '') +
      section('Output', out ? '<p>' + out + '</p>' : '');
    pBody.scrollTop = 0;
  }
  function openPanel(i) {
    opener = document.activeElement;
    render(i);
    panel.classList.add('on'); scrim.classList.add('on'); panel.setAttribute('aria-hidden', 'false');
    $('pClose').focus();
  }
  function closePanel() {
    panel.classList.remove('on'); scrim.classList.remove('on'); panel.setAttribute('aria-hidden', 'true');
    if (opener && opener.focus) opener.focus();
  }
  $('pClose').addEventListener('click', closePanel);
  scrim.addEventListener('click', closePanel);
  $('pPrev').addEventListener('click', function () { render(cur - 1); });
  $('pNext').addEventListener('click', function () { render(cur + 1); });
  document.addEventListener('keydown', function (e) {
    if (!panel.classList.contains('on')) return;
    if (e.key === 'Escape') closePanel();
    if (e.key === 'ArrowRight') render(cur + 1);
    if (e.key === 'ArrowLeft') render(cur - 1);
  });

  /* theme toggle, remembered per browser */
  var root = document.documentElement;
  try { var saved = localStorage.getItem('theme'); if (saved) root.setAttribute('data-theme', saved); } catch (e) {}
  $('theme').addEventListener('click', function () {
    var dark = root.getAttribute('data-theme') === 'dark' ||
      (!root.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var next = dark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  /* cycling phrase */
  var el = $('cycle'), wi = 0;
  if (!reduce && SITE.cycle.length > 1) {
    setInterval(function () {
      el.classList.add('out');
      setTimeout(function () { wi = (wi + 1) % SITE.cycle.length; el.textContent = SITE.cycle[wi]; el.classList.remove('out'); }, 300);
    }, 2800);
  }
})();
