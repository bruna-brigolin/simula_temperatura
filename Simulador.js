const axios = require('axios');

function simularLeitura() {
  return parseFloat((Math.random() * 15 + 30).toFixed(2)); // 30°C a 45°C
}

setInterval(async () => {
  const temp = simularLeitura();
  console.log(`📤 Enviando temperatura: ${temp} °C`);

  try {
    const resposta = await axios.post('https://api-temp-zhgg.onrender.com/temperatura', { temperatura: temp });
    console.log(`📥 Resposta da API: ${resposta.data.status} - ${resposta.data.mensagem}`);

    if (resposta.data.status == 'alerta') {
      console.log("==============");
      console.log("Libera água");
      console.log("==============");
    }
  } catch (erro) {
    console.error('❌ Erro ao enviar dados:', erro.message);
  }
}, 2000); // A cada 5 segundos
