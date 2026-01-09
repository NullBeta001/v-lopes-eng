# Configuração do EmailJS

## Passo a Passo para Configurar o Envio de Emails

### 1. Criar Conta no EmailJS
1. Acesse https://www.emailjs.com/
2. Crie uma conta gratuita (200 emails/mês no plano gratuito)
3. Faça login no painel

### 2. Criar um Serviço de Email
1. No painel, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. Anote o **Service ID** gerado

### 3. Criar um Template de Email
1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Use este template como base:

**Subject:**
```
Novo Contato - V-eng Site
```

**Content:**
Copie e cole o conteúdo do arquivo `EMAILJS_TEMPLATE_SIMPLES.html` que está na raiz do projeto. Este template inclui:

- Design moderno e responsivo
- Todas as variáveis necessárias: `{{name}}`, `{{from_email}}`, `{{phone}}`, `{{subject}}`, `{{message}}`, `{{time}}`
- Layout profissional com gradientes e cores da marca
- Informações de contato no rodapé

4. Configure o campo **To Email** como: `contato@v-eng.site`
5. Salve o template e anote o **Template ID**

### 4. Obter a Public Key
1. Vá em **Account** > **General**
2. Copie a **Public Key**

### 5. Configurar Variáveis de Ambiente
1. Crie um arquivo `.env` na raiz do projeto (se não existir)
2. Adicione as seguintes variáveis:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

3. Substitua os valores pelos IDs que você anotou

### 6. Reiniciar o Servidor
Após configurar as variáveis de ambiente, reinicie o servidor de desenvolvimento:

```bash
npm run dev
```

## Teste
1. Preencha o formulário de contato no site
2. Envie a mensagem
3. Verifique se o email chegou em `contato@v-eng.site`

## Notas Importantes
- O plano gratuito permite 200 emails/mês
- Os emails são enviados automaticamente quando o usuário preenche o formulário
- Após enviar o email, o WhatsApp também é aberto automaticamente
- Se houver erro no envio, uma mensagem de erro será exibida ao usuário

