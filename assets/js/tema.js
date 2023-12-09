function timeout() {
  var timeoutId;

  function resetTimer() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(function() {
      var config__exp = document.querySelector('.config__exp');
      var configIcon = document.querySelector('.config__icon');
      config__exp.classList.remove('show');
      configIcon.classList.remove('active');
    }, 5000); //  5 seconds
  }

  document.getElementById('config').addEventListener('click', function () {
    resetTimer();

    var config__exp = document.querySelector('.config__exp');
    var configIcon = document.querySelector('.config__icon');

    if (config__exp.classList.contains('show')) {
      config__exp.classList.remove('show');
      configIcon.classList.remove('active');
    } else {
      config__exp.classList.add('show');
      configIcon.classList.toggle('active');
      resetTimer(); 
    }
  });

  const modoToggle = document.getElementById('modo-toggle');
  const body = document.body;

  modoToggle.addEventListener('change', function() {
    resetTimer();

    if (modoToggle.checked) {
      console.log('Modo Claro');
      body.classList.add('transicao-cores');
      body.classList.add('claro');
      document.documentElement.style.setProperty('--cor-texto', '#262626');
      document.documentElement.style.setProperty('--cor-fundo', '#e0e0e0');
      document.documentElement.style.setProperty('--cor-fundo2', '#E6E6E6');
    } else {
      console.log('Modo Escuro');
      body.classList.remove('claro');
      body.classList.add('transicao-cores');
      document.documentElement.style.setProperty('--cor-texto', '#e0e0e0');
      document.documentElement.style.setProperty('--cor-fundo', '#262626');
      document.documentElement.style.setProperty('--cor-fundo2', '#5F605D');
    }
  });

  resetTimer();
}

timeout();
