(() => {
  'use strict';
  let language = 'en';
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('#navigation');
  function closeMenu() { menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label', language === 'zh' ? '開啟選單' : 'Open menu'); nav.classList.remove('open'); }
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded',String(open)); menu.setAttribute('aria-label',open ? 'Close menu' : 'Open menu'); nav.classList.toggle('open',open); });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize',() => {if(window.innerWidth > 700) closeMenu();});
  document.querySelector('.language').addEventListener('click', () => {
    language = language === 'en' ? 'zh' : 'en';
    document.documentElement.lang = language === 'zh' ? 'zh-Hant' : 'en';
    document.querySelectorAll('[data-en][data-zh]').forEach(e => {e.textContent = e.dataset[language];});
    document.querySelector('#language-label').textContent = language === 'en' ? 'EN' : '繁中';
    document.querySelector('.language').setAttribute('aria-label',language === 'en' ? 'Switch to Traditional Chinese' : 'Switch to English');
    closeMenu();
  });
  // Hosted pages use a normal POST so FormSubmit can handle verification.
  document.querySelector('#contact-form')?.addEventListener('submit', e => {
    if (window.location.protocol === 'file:') {
      e.preventDefault();
      const status = document.querySelector('#contact-status');
      status.dataset.en = 'To send the form, open this page through a local web server or the live website. You can also email us directly below.';
      status.dataset.zh = '請透過本機網頁伺服器或正式網站開啟此頁再送出，也可以使用下方 Email 直接聯絡。';
      status.textContent = status.dataset[language];
    }
  });
  const updateHeader = () => document.querySelector('.header').classList.toggle('scrolled',window.scrollY>25);
  window.addEventListener('scroll',updateHeader,{passive:true}); updateHeader();
  document.querySelector('#year').textContent = new Date().getFullYear();
})();
