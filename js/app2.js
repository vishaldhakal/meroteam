if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../sw.js')
        .then((reg) => {
          console.log('Service worker registered.', reg);
        });
  });
}else{
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../sw.js')
        .then((reg) => {
          console.log('Service worker registered.', reg);
        });
  });
}