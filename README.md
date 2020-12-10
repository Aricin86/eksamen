# Readme

## Eksamen i webapplikasjoner 2020

## Filer vi har kopiert fra Marius

- .gitignore
- extensions.json
- settings.json
- .eslintignore 
  - i client-mappen
  - i server-mappen
- .eslintrc.json 
  - i client-mappen
  - i server-mappen
- babel.config.json
- package.json
  - i client-mappen
- webpack.common.config.js
- webpack.development.config.js
- webpack.production.config.js
- .env
  - i client-mappen
  - i server-mappen

### Server

- server.js --> Kanskje ikke nødvendig?

- leksjon14/server/config/db.js
- leksjon14/server/constants/index.js

- leksjon14/server/middleware/catchAsync.js
- leksjon14/server/middleware/errors.js
- leksjon14/server/utils/errorHandler.js

## Gå igjennom leksjon-14 og se om koden er lik... if so: legg til her

- Alt som har med image.js (5 filer)

# HUSK: Legg til kommentarer i koden OG her når man bruker kode fra andre
---
## Fra Marius:

Filer som er direkte kopier.

### Client

1. customHookForm
- Vår side: client/src/hooks/customHookForm.jsx
- Tatt fra/basert på: 07_REACT_API/02_react_v2/src/hooks/useCustomForm.jsx

2. neste ting...
- Vår side:
- er tatt fra/basert på:

### Server

## Fra Marius:

Kodesnutter (funksjoner, eller deler av funksjoner) som er direkte kopier.

- Regex for email
  - Tatt fra: Regex for epost-validering tatt fra leksjon14/server/models/user.js
    - linje 13
  - Brukt: server/models/user.js
    - linje 20
---
## Fra nettet:
### Finne url-en:
  - Vår kode: client/src/pages/OfficeDetailed.jsx
    - linje 12
  - Kilde: 
    - [https://stackoverflow.com/questions/18194878/display-the-last-part-of-url-javascript](https://stackoverflow.com/questions/18194878/display-the-last-part-of-url-javascript)
---
### Sjekke om checkbox er checked
  - I vår kode: client/src/components/ArticleForm.jsx
    - linje 50
  - Kilde:
    - https://stackoverflow.com/questions/26615779/react-checkbox-not-sending-onchange
---