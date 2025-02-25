Aqui está a documentação formatada para o **MQTT-PUBLISHER**, seguindo o mesmo estilo do **MQTT-SUBSCRIBER**.

---

# MQTT-PUBLISHER

## Descrição

Este projeto é uma aplicação Node.js que utiliza o protocolo MQTT para se conectar a um broker e publicar mensagens em tópicos específicos. O objetivo é enviar dados para dispositivos IoT ou sistemas que consumam mensagens via MQTT.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- MQTT
- dotenv

## Estrutura do Projeto

```
MQTT-PUBLISHER/
│── dist/
│── node_modules/
│── src/
│   ├── connections/
│   │   ├── mqtt.ts
│   ├── publisher/
│   │   ├── sendMessages.ts
│   ├── index.ts
│── .env
│── .gitignore
│── package-lock.json
│── package.json
│── README.md
│── tsconfig.json
```

### Descrição dos Arquivos Principais

- `src/index.ts`: Ponto de entrada da aplicação, responsável por inicializar a conexão com o broker e enviar mensagens para os tópicos configurados.
- `src/connections/mqtt.ts`: Configura a conexão com o broker MQTT utilizando as credenciais definidas no `.env`.
- `src/publisher/sendMessages.ts`: Contém a lógica de publicação de mensagens nos tópicos MQTT.

## Instalação e Configuração

### Requisitos

- Node.js instalado
- Um broker MQTT acessível

### Passos

1. Clone o repositório:
   ```sh
   git clone https://github.com/samuelmatsuo/mqtt-publisher.git
   cd MQTT-PUBLISHER
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Crie um arquivo `.env` e configure suas credenciais MQTT:

   ```ini
   MQTT_BROKER_URL=<URL_DO_BROKER>
   MQTT_USERNAME=<USUARIO>
   MQTT_PASSWORD=<SENHA>
   ```

   No arquivo `src/connections/broker.ts`, substitua o parâmetro `options` do `mqtt.connect` por:

   ```typescript
   mqtt.connect("mqtt://broker.hivemq.com");
   ```

   Ou crie uma conta gratuita no [HiveMQ Cloud](https://console.hivemq.cloud/) e utilize as credenciais fornecidas.

4. Compile o TypeScript:
   ```sh
   npm run build
   ```
5. Inicie a aplicação:
   ```sh
   npm start
   ```

## Uso

A aplicação publica mensagens nos seguintes tópicos:

- `iot.rain`
- `iot.temperature`
- `iot.humidity`
- `iot.gas`
- `iot.error`
- `iot.off`

Os dados enviados podem ser ajustados no arquivo `src/publisher/sendMessages.ts`.

## Scripts Disponíveis

- `npm start`: Inicia a aplicação.
- `npm run build`: Compila os arquivos TypeScript.
- `npm run start:tsc`: Compila e inicia a aplicação.

## Dependências

- `mqtt`
- `dotenv`
- `@types/node`
- `typescript`
