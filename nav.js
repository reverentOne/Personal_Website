(function () {
  'use strict';

  var SITE_NAME = 'Eli Lunt';
  var NAV_LINKS = [
    { href: 'about.html',      label: 'About'      },
    { href: 'research.html',   label: 'Research'   },
    { href: 'experience.html', label: 'Experience' },
    { href: 'contact.html',    label: 'Contact'    },
  ];

  /* ─── Detect active page ──────────────────────────────────────────── */
  var file = window.location.pathname.split('/').pop() || 'index.html';
  var isHome = (file === '' || file === 'index.html');

  /* ─── Inject shared CSS ───────────────────────────────────────────── */
  var css = [
    '.site-header{display:flex;justify-content:space-between;align-items:center;padding:20px 0;}',
    '.site-name{font-size:1rem;font-weight:400;color:var(--primary);white-space:nowrap;text-decoration:none;}',
    '.site-name:hover{color:var(--secondary);}',
    '.header-right{display:flex;align-items:center;gap:20px;}',
    '.site-nav{display:flex;gap:24px;}',
    '.site-nav a{font-size:1rem;color:var(--secondary);transition:color 0.1s;white-space:nowrap;text-decoration:none;}',
    '.site-nav a:hover{color:var(--primary);}',
    '.site-nav a:focus-visible{outline:2px solid var(--primary);outline-offset:3px;border-radius:2px;}',
    '.site-nav a.active{color:var(--primary);font-weight:600;}',
    '.theme-switch{position:fixed;top:18px;right:24px;z-index:100;display:inline-flex;align-items:center;width:68px;height:32px;border-radius:999px;background:rgb(206,206,212);border:none;cursor:pointer;padding:0;flex-shrink:0;transition:background 0.2s;}',
    '[data-theme="dark"] .theme-switch{background:rgb(52,52,64);}',
    '.theme-switch:focus-visible{outline:2px solid var(--primary);outline-offset:2px;border-radius:999px;}',
    '.ts-thumb{position:absolute;left:3px;width:26px;height:26px;border-radius:50%;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.18);transition:transform 0.2s cubic-bezier(0.4,0,0.2,1),background 0.2s;pointer-events:none;z-index:1;}',
    '[data-theme="dark"] .ts-thumb{transform:translateX(36px);background:rgb(36,36,48);box-shadow:0 1px 4px rgba(0,0,0,0.45);}',
    '.ts-icon{position:absolute;display:flex;align-items:center;justify-content:center;pointer-events:none;transition:color 0.2s,opacity 0.2s;}',
    '.ts-icon svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2.25;stroke-linecap:round;stroke-linejoin:round;}',
    '.ts-sun{left:9px;color:rgb(45,45,50);opacity:1;}',
    '.ts-moon{right:9px;color:rgb(45,45,50);opacity:0.35;}',
    '[data-theme="dark"] .ts-sun{color:rgb(158,158,172);opacity:0.4;}',
    '[data-theme="dark"] .ts-moon{color:rgb(205,205,220);opacity:1;}',
  ].join('');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  /* ─── Theme switch HTML ───────────────────────────────────────────── */
  var SWITCH_HTML =
    '<button class="theme-switch" type="button" aria-label="Toggle dark mode" onclick="toggleTheme()">' +
    '<span class="ts-thumb"></span>' +
    '<span class="ts-icon ts-sun" aria-hidden="true">' +
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>' +
    '</span>' +
    '<span class="ts-icon ts-moon" aria-hidden="true">' +
    '<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>' +
    '</span>' +
    '</button>';

  /* ─── Inject into #nav-mount ──────────────────────────────────────── */
  var mount = document.getElementById('nav-mount');
  if (mount) {
    if (isHome) {
      mount.innerHTML = SWITCH_HTML;
    } else {
      var links = NAV_LINKS.map(function (link) {
        var active = (file === link.href) ? ' class="active"' : '';
        return '<a href="' + link.href + '"' + active + '>' + link.label + '</a>';
      }).join('');

      mount.innerHTML =
        '<header class="site-header">' +
        '<a href="index.html" class="site-name">' + SITE_NAME + '</a>' +
        '<div class="header-right">' +
        '<nav class="site-nav" aria-label="Site sections">' + links + '</nav>' +
        SWITCH_HTML +
        '</div>' +
        '</header>';
    }
  }

  /* ─── toggleTheme ─────────────────────────────────────────────────── */
  window.toggleTheme = function () {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

}());
