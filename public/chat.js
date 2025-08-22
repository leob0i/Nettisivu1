function initChat() {
  const toggleBtn = document.getElementById('chat-toggle');
  const chatBox = document.getElementById('chat-box');
  const sendBtn = document.getElementById('send-chat');
  const input = document.getElementById('chat-input');
  const messages = document.getElementById('chat-messages');
  const API = '/api/bot'; // proxy-osoite

  // Tervetulon valvonta (vain kerran per sivulataus)
  let hasGreeted = false;

  // Asetetaan chat piiloon varmasti
  chatBox.classList.remove('active');
  toggleBtn.textContent = '';
  toggleBtn.classList.remove('close-mode');

  toggleBtn.onclick = () => {
    const isVisible = chatBox.classList.contains('active');

    if (isVisible) {
      chatBox.classList.remove('active');
      toggleBtn.textContent = '';
      toggleBtn.classList.remove('close-mode');
    } else {
      chatBox.classList.add('active');
      toggleBtn.textContent = '❌';
      toggleBtn.classList.add('close-mode');

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
