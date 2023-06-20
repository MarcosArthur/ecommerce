## Configuração
Crie o arquivo .env, tendo como base de seu conteudo o .env.example.
Caso esteja em ambiente Unix use o comando abaixo para criar o .env.
```bash
	cp .env.example .env
```

Apos isso configure o banco de dados no arquivo .env.

Execute os seguintes comandos

```bash
    composer install
    php artisan key:generate
    php artisan jwt:secret
    npm install
    php artisan migrate
    php artisan db:seed
    php artisan serve
    npm run dev 
```

Um usuário padrão já está criado por conta das seeds, utilize ele para realizar o login.

Email: cliente@ecommerce.com
Password: password

## Executando o projeto

Execute os seguintes comandos
```bash
    php artisan serve
    npm run dev 
```

##Tecnologias
- Vuejs
- Vuex
- Laravel
- Bootstrap

## Observações

Toda parte de Insert e Select, usando os campos user_id, foi tratado em uma trait, usando Multi-Tenancy, foi implementando também o padrão repository.

