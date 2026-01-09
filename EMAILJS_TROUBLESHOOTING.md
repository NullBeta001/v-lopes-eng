# 🔧 Solução de Problemas - EmailJS

## ❌ Erros Comuns

### 1. Erro 400 (Bad Request)

**Sintoma**: `Failed to load resource: the server responded with a status of 400`

**Causa**: O servidor EmailJS recebeu a requisição, mas rejeitou porque:
- Template ID incorreto ou não existe
- Service ID incorreto
- Variáveis no template não correspondem aos parâmetros enviados
- Template não está salvo no EmailJS

**Solução**:
1. Verifique no painel do EmailJS se o Template ID está correto: `template_na1xvtu`
2. Verifique se o Service ID está correto: `service_b2kxic4`
3. Certifique-se de que o template está **salvo** no EmailJS
4. Verifique se as variáveis no template correspondem aos parâmetros enviados:
   - `{{name}}`
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{time}}` (opcional)

### 2. Erro: `ERR_INTERNET_DISCONNECTED`

Este erro geralmente é causado por **extensões do Chrome** que interceptam requisições de rede.

### 🔍 Como Identificar

No console do navegador, você verá algo como:
```
chrome-extension://eppiocemhmnlbhjplcgkofciiegomcon/libs/requests.js
```

Isso indica que uma extensão está interferindo nas requisições.

### ✅ Soluções

#### 1. **Desativar Extensões Temporariamente**
   - Abra o Chrome em modo anônimo (`Ctrl + Shift + N`)
   - Ou desative extensões que possam bloquear requisições:
     - Bloqueadores de anúncios (AdBlock, uBlock Origin, etc.)
     - Extensões de privacidade
     - Extensões de segurança

#### 2. **Verificar Configuração do Template**
   - Certifique-se de que o **Template ID** está correto
   - No código, está usando: `template_na1xvtu`
   - Verifique no painel do EmailJS se esse é o template correto

#### 3. **Verificar Variáveis de Ambiente**
   - Crie um arquivo `.env` na raiz do projeto:
     ```env
     VITE_EMAILJS_SERVICE_ID=service_b2kxic4
     VITE_EMAILJS_TEMPLATE_ID=template_na1xvtu
     VITE_EMAILJS_PUBLIC_KEY=Q8bsoBMUVGv87tbKr
     ```
   - Reinicie o servidor de desenvolvimento após criar o arquivo

#### 4. **Testar em Outro Navegador**
   - Tente no Firefox ou Edge para verificar se o problema persiste

#### 5. **Verificar Firewall/Antivírus**
   - Alguns firewalls ou antivírus podem bloquear requisições para `api.emailjs.com`
   - Adicione uma exceção se necessário

### 📋 Checklist de Verificação

**Configuração Básica:**
- [ ] Template ID correto no código (`template_na1xvtu`)
- [ ] Service ID correto (`service_b2kxic4`)
- [ ] Public Key correta (`Q8bsoBMUVGv87tbKr`)
- [ ] Template está **salvo** no painel do EmailJS

**Variáveis do Template:**
- [ ] Template no EmailJS tem todas as variáveis necessárias:
  - `{{name}}` ✅
  - `{{from_name}}` ✅ (opcional, mas recomendado)
  - `{{from_email}}` ✅
  - `{{phone}}` ✅
  - `{{subject}}` ✅
  - `{{message}}` ✅
  - `{{time}}` ✅ (opcional)

**Conexão e Ambiente:**
- [ ] Extensões do Chrome desativadas ou testado em modo anônimo
- [ ] Conexão com internet estável
- [ ] Firewall não está bloqueando
- [ ] Testado em outro navegador (Firefox, Edge)

### 🧪 Teste Manual

Você pode testar diretamente no console do navegador (após o EmailJS estar inicializado):

```javascript
// Certifique-se de que o EmailJS está inicializado
emailjs.init("Q8bsoBMUVGv87tbKr");

// Teste o envio
emailjs.send("service_b2kxic4", "template_na1xvtu", {
  name: "Teste",
  from_name: "Teste",
  from_email: "teste@exemplo.com",
  phone: "123456789",
  subject: "Teste",
  message: "Mensagem de teste",
  time: new Date().toLocaleString("pt-BR")
})
.then((response) => {
  console.log("✅ Sucesso!", response.status, response.text);
})
.catch((error) => {
  console.error("❌ Erro:", error);
});
```

**Importante**: Se o teste manual funcionar, o problema está no código. Se não funcionar, o problema está na configuração do EmailJS.

### 📞 Se Nada Funcionar

1. Verifique os logs no console do navegador
2. Verifique se o template está salvo no EmailJS
3. Tente criar um novo template no EmailJS
4. Verifique se a conta do EmailJS está ativa e com créditos

### 💡 Nota Importante

Mesmo que o email falhe, o **WhatsApp sempre será aberto** normalmente. O envio de email é opcional e não impede o funcionamento do formulário.

