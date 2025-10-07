function initChat() {
  const toggleBtn = document.getElementById('chat-toggle');
  const chatBox = document.getElementById('chat-box');
  const sendBtn = document.getElementById('send-chat');
  const input = document.getElementById('chat-input');
  const messages = document.getElementById('chat-messages');
  const API = '/api/bot'; // proxy-osoite
    // === 2A: Emoji UI (vain UI, ei logiikkamuutoksia) ===
  const inputArea = document.getElementById('chat-input-area');
  if (inputArea && !document.getElementById('chat-emoji')) {
    // 1) Emoji-nappi vasemmalle
    const emojiBtn = document.createElement('button');
    emojiBtn.id = 'chat-emoji';
    emojiBtn.type = 'button';
    emojiBtn.setAttribute('aria-label', 'Lisää emoji');

   // KÄÄRITÄÄN emoji + input “pill”-kuplaan (käsittelemme vain DOMia, ei logiikkaa)
const composer = document.createElement('div');
composer.id = 'chat-composer';
composer.className = 'composer';
inputArea.insertBefore(composer, input);  // composer sijoittuu inputin paikalle
composer.appendChild(input);              //  input
composer.appendChild(emojiBtn);           //  emoji


    // 2) Pieni picker (voit laajentaa myöhemmin)
    const picker = document.createElement('div');
    picker.id = 'chat-emoji-picker';
    picker.innerHTML = `
      <button type="button">😀</button>
      <button type="button">😊</button>
      <button type="button">😇</button>
      <button type="button">👍</button>
      <button type="button">🔥</button>
      <button type="button">😡</button>
    `;
    // Tarkka sijoitus: picker lisätään input-alueen loppuun
    inputArea.appendChild(picker);

    // Avaa/sulje picker
    emojiBtn.onclick = () => {
      picker.classList.toggle('open');
    };

    // Lisää emoji kursoriin
    function insertAtCursor(el, text) {
      const start = el.selectionStart ?? el.value.length;
      const end   = el.selectionEnd   ?? el.value.length;
      el.value = el.value.slice(0, start) + text + el.value.slice(end);
      const pos = start + text.length;
      el.setSelectionRange(pos, pos);
      el.focus();
    }

    // Valitse emojit
    picker.querySelectorAll('button').forEach((btn) => {
      btn.onclick = () => {
        insertAtCursor(input, btn.textContent || '');
        picker.classList.remove('open');
      };
    });

    // Sulje picker, jos klikataan ulos
    document.addEventListener('click', (e) => {
      if (!inputArea.contains(e.target)) picker.classList.remove('open');
    });
  }
  // === /2A ===

    const header = document.getElementById('chat-header');
  if (header && !document.getElementById('chat-close')) {
    const closeBtn = document.createElement('button');
    closeBtn.id = 'chat-close';
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', 'Sulje chat');
    header.appendChild(closeBtn);

    // Sama sulkemislogiikka kuin toggle napissa
    closeBtn.onclick = () => {
      chatBox.classList.remove('active');
      // (toggleBtn-ulkoasua ei muuteta)
    };
  }


  // Tervetulon valvonta (vain kerran per sivulataus)
  let hasGreeted = false;

  // Asetetaan chat piiloon varmasti
  chatBox.classList.remove('active');
  // toggleBtn.textContent = '';
  // toggleBtn.classList.remove('close-mode');

  toggleBtn.onclick = () => {
    const isVisible = chatBox.classList.contains('active');

    if (isVisible) {
      chatBox.classList.remove('active');
      // toggleBtn.textContent = '';
      // toggleBtn.classList.remove('close-mode');
    } else {
      chatBox.classList.add('active');
     // toggleBtn.textContent = '❌';
      // toggleBtn.classList.add('close-mode');

      // --- TERVETULO frontista (ei backend-kutsua), vain kerran ---
      if (!hasGreeted) {
        const botDiv = document.createElement('div');
        botDiv.className = 'message bot';
        botDiv.textContent = 'Hei, olen Leo Digital Botti!🤖 Miten voin auttaa sinua?';

        const botTs = document.createElement('span');
        botTs.className = 'timestamp';
        botTs.textContent = formatTime();
        botDiv.appendChild(botTs);

        messages.appendChild(botDiv);
        messages.scrollTop = messages.scrollHeight;
        hasGreeted = true;
      }
    }
  };

  // --- LISÄYS: pieni apuri aikaleimalle (HH:MM) ---
  function formatTime(date = new Date()) {
    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    return `${h}:${m}`;
  }

  // --- LISÄYS: Typing-indikaattori ---
  function showTyping() {
    const wrap = document.createElement('div');
    wrap.className = 'message bot';
    const dots = document.createElement('span');
    dots.className = 'dots';
    dots.innerHTML = '<i></i><i></i><i></i>';
    wrap.appendChild(dots);
    messages.appendChild(wrap);
    return wrap;
  }
  function removeTyping(el) {
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  sendBtn.onclick = async () => {
    const userMsg = input.value.trim();
    if (!userMsg) return;

    const userDiv = document.createElement('div');
    userDiv.className = 'message user';
    userDiv.textContent = userMsg;

    // --- LISÄYS: aikaleima käyttäjän viestiin ---
    const userTs = document.createElement('span');
    userTs.className = 'timestamp';
    userTs.textContent = formatTime();
    userDiv.appendChild(userTs);

    messages.appendChild(userDiv);
    input.value = '';

    // --- Typing näkyviin botille ---
    const typingEl = showTyping();

    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg })
      });

      const ct = res.headers.get('content-type') || '';
      let reply = '';
      if (ct.includes('application/json')) {
        const data = await res.json();
        reply =
          data.reply ??
          data.answer ??
          data.message ??
          data.text ??
          (typeof data === 'string' ? data : JSON.stringify(data));
      } else {
        reply = await res.text();
      }

      // Poista typing ennen vastausta
      removeTyping(typingEl);

      const botDiv = document.createElement('div');
      botDiv.className = 'message bot';
      botDiv.textContent = reply || '...';

      // --- LISÄYS: aikaleima botin viestiin ---
      const botTs = document.createElement('span');
      botTs.className = 'timestamp';
      botTs.textContent = formatTime();
      botDiv.appendChild(botTs);

      messages.appendChild(botDiv);
      messages.scrollTop = messages.scrollHeight;
    } catch {
      removeTyping(typingEl);

      const botDiv = document.createElement('div');
      botDiv.className = 'message bot';
      botDiv.textContent = 'Hups! Taustapalvelin ei vastaa juuri nyt.';

      const botTs = document.createElement('span');
      botTs.className = 'timestamp';
      botTs.textContent = formatTime();
      botDiv.appendChild(botTs);

      messages.appendChild(botDiv);
      messages.scrollTop = messages.scrollHeight;
    }
  };
}

// Käynnistä heti jos DOM on valmis, muuten odota DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChat);
} else {
  initChat();
}
