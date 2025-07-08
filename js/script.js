// script.js
// All logic for Background Remover UI and API

document.addEventListener('DOMContentLoaded', () => {
  // Lottie Animation
  lottie.loadAnimation({
    container: document.getElementById('lottie-character'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/0e0b250c-7e7b-46b7-8a5f-8b5f06dcfb4c/8IrM3RBOv7.json' // Robot character animation
  });

  const uploadInput = document.getElementById('upload');
  const previewImg = document.getElementById('preview');
  const resultImg = document.getElementById('result');
  const previewContainer = document.getElementById('preview-container');
  const resultContainer = document.getElementById('result-container');
  const removeBtn = document.getElementById('remove-btn');
  const loader = document.getElementById('loader');
  const downloadBtn = document.getElementById('download-btn');

  let imageFile;

  // Animate image on load
  function animateImage(img) {
    img.style.opacity = 0;
    img.style.transform = 'scale(0.95)';
    setTimeout(() => {
      img.style.transition = 'all 0.6s cubic-bezier(.4,2,.6,1)';
      img.style.opacity = 1;
      img.style.transform = 'scale(1)';
    }, 50);
  }

  // Confetti effect (simple SVG confetti)
  function showConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = 0;
    confetti.style.top = 0;
    confetti.style.width = '100vw';
    confetti.style.height = '100vh';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = 9999;
    confetti.innerHTML = `<svg width="100%" height="100%" style="position:absolute;top:0;left:0;pointer-events:none;">
      ${Array.from({length: 40}).map(() => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = 8 + Math.random() * 12;
        const color = ['#60a5fa','#a21caf','#f59e42','#22d3ee','#f472b6'][Math.floor(Math.random()*5)];
        const rotate = Math.random()*360;
        return `<rect x='${x}vw' y='${y}vh' width='${size}' height='${size/2}' fill='${color}' opacity='0.8' rx='2' transform='rotate(${rotate} ${x} ${y})'/>`;
      }).join('')}
    </svg>`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1200);
  }

  uploadInput.addEventListener('change', () => {
    const file = uploadInput.files[0];
    if (file) {
      imageFile = file;
      const reader = new FileReader();
      reader.onload = e => {
        previewImg.src = e.target.result;
        previewContainer.classList.remove('hidden');
        removeBtn.disabled = false;
        animateImage(previewImg);
      };
      reader.readAsDataURL(file);
    }
  });

  removeBtn.addEventListener('click', async () => {
    if (!imageFile) return;

    loader.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    removeBtn.disabled = true;

    const formData = new FormData();
    formData.append('image_file', imageFile);
    formData.append('size', 'auto');

    try {
      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': 'Rgqa7UueE7fA17NKZAz2Qvdf'
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error("Failed to remove background.");
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      resultImg.src = imageUrl;
      downloadBtn.href = imageUrl;

      resultContainer.classList.remove('hidden');
      animateImage(resultImg);
      showConfetti();
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      loader.classList.add('hidden');
      removeBtn.disabled = false;
    }
  });
});
