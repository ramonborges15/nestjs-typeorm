# POC: NestJs + TypeORM (Back-end)
Esse projeto tem como propósito realizar uma POC (prova de conceito) das ferramentas Nest JS e TypeORM, no desenvolvimento de projetos back-end.

O projeto aqui detalhado tem como propósito testar única e exclusivamente a ferramenta.

- [Projeto](#projeto)
- [Ferramentas e conceitos](#ferramentas-e-conceitos)
- [Setup do projeto](#setup-do-projeto)

## Projeto

## Ferramentas e conceitos

Estamos utilizando o [typeorm-model-generator](https://github.com/Kononnable/typeorm-model-generator)

nestjs + express + rx (observable)

## Setup do projeto

### 📝 Iniciando o banco de dados
Para subir o container docker, responsável pelo banco de dados:
```
docker-compose up
```

### 📝 Executando o aplicativo
Depois que o processo de instalação estiver concluído, você poderá executar o seguinte comando no prompt de comando do sistema operacional para iniciar o aplicativo que escuta as solicitações HTTP de entrada:

```
npm run start
```

Este comando inicia o aplicativo com o servidor HTTP escutando na porta definida no src/main.ts. Quando o aplicativo estiver em execução, abra o navegador e navegue até http://localhost:3000/.

Para observar alterações em seus arquivos, você pode executar o seguinte comando para iniciar o aplicativo:

```
npm run start:dev
```
Este comando irá monitorar seus arquivos, recompilando e recarregando automaticamente o servidor.