# 🚀 Como Configurar o EmailJS - Guia Rápido

## 📋 Informações que Você Precisa Fornecer

Para fazer o EmailJS funcionar, você precisa de **3 informações** da sua conta no EmailJS:

1. **Service ID** - ID do seu serviço de email
2. **Template ID** - ID do template de email
3. **Public Key** - Chave pública da sua conta

---

## 📝 Passo a Passo para Obter Essas Informações

### 1️⃣ Criar Conta no EmailJS (se ainda não tiver)

1. Acesse: https://www.emailjs.com/
2. Clique em **"Sign Up"** e crie uma conta gratuita
3. O plano gratuito permite **200 emails/mês**

---

### 2️⃣ Criar um Serviço de Email

1. No painel do EmailJS, vá em **"Email Services"** (menu lateral)
2. Clique em **"Add New Service"**
3. Escolha seu provedor de email:
   - **Gmail** (recomendado)
   - **Outlook**
   - **Yahoo**
   - Ou outro provedor
4. Siga as instruções para conectar sua conta de email
5. **Anote o Service ID** que aparece (exemplo: `service_abc123`)

---

### 3️⃣ Criar um Template de Email

1. No painel, vá em **"Email Templates"** (menu lateral)
2. Clique em **"Create New Template"**
3. Configure o template:

   **Subject (Assunto):**
   ```
   Novo Contato - V-eng Site
   ```

   **Content (Conteúdo):**
   - Abra o arquivo `EMAILJS_TEMPLATE_SIMPLES.html` que está na raiz do projeto
   - Copie TODO o conteúdo HTML
   - Cole no campo "Content" do template no EmailJS

   **To Email (Email Destinatário):**
   ```
   contato@v-eng.site
   ```

4. **IMPORTANTE:** Certifique-se de que o template usa estas variáveis:
   - `{{name}}` - Nome do cliente
   - `{{from_email}}` - Email do cliente
   - `{{phone}}` - Telefone do cliente
   - `{{subject}}` - Assunto da mensagem
   - `{{message}}` - Mensagem do cliente
   - `{{time}}` - Data e hora do envio

5. Salve o template
6. **Anote o Template ID** que aparece (exemplo: `template_xyz789`)

---

### 4️⃣ Obter a Public Key

1. No painel, vá em **"Account"** (menu superior direito)
2. Clique em **"General"**
3. Procure por **"Public Key"**
4. **Copie a Public Key** (exemplo: `AbC123XyZ456`)

---

## ⚙️ Configurar no Projeto

### Opção 1: Usar Variáveis de Ambiente (Recomendado)

1. Crie um arquivo `.env` na **raiz do projeto** (mesmo nível do `package.json`)
2. Adicione as seguintes linhas:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

3. **Substitua** os valores pelos IDs que você anotou:
   - `seu_service_id_aqui` → Seu Service ID
   - `seu_template_id_aqui` → Seu Template ID
   - `sua_public_key_aqui` → Sua Public Key

4. **Reinicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

### Opção 2: Editar Diretamente no Código (Não Recomendado)

Se preferir, você pode editar diretamente o arquivo `src/components/Contact.tsx` nas linhas 23-25:

```typescript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "SEU_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "SEU_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "SUA_PUBLIC_KEY";
```

---

## ✅ Testar

1. Preencha o formulário de contato no site
2. Envie a mensagem
3. Verifique se o email chegou em `contato@v-eng.site`
4. O WhatsApp também será aberto automaticamente

---

## 🔍 Verificar se Está Funcionando

Abra o **Console do Navegador** (F12) e procure por:

- ✅ `EmailJS inicializado com sucesso` - EmailJS está configurado
- ✅ `Email enviado com sucesso!` - Email foi enviado
- ❌ Mensagens de erro - Indica problema na configuração

---

## 🆘 Problemas Comuns

### Erro 400 (Bad Request)
- Verifique se o **Template ID** e **Service ID** estão corretos
- Verifique se as variáveis no template correspondem aos parâmetros enviados

### Erro de Rede
- Desative extensões do navegador (especialmente bloqueadores de anúncios)
- Tente em modo anônimo
- Verifique sua conexão com a internet

### Email não chega
- Verifique a pasta de spam
- Verifique se o email `contato@v-eng.site` está configurado corretamente no template
- Verifique se o serviço de email está conectado corretamente no EmailJS

---

## 📞 Precisa de Ajuda?

Se tiver problemas, me forneça:
1. Os 3 IDs (Service ID, Template ID, Public Key) - **sem compartilhar publicamente**
2. A mensagem de erro que aparece no console
3. Uma captura de tela do template no EmailJS

