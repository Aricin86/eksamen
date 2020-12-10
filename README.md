# Eksamen i webapplikasjoner

### Gruppe 13 - Åse Ulriksen Rørmark (174318) og Marte Olavsdatter (153507)

---

# Oppstart

Lag .env-filer i server og client, kopier inn teksten under.

## client .env

BASE_URL=http://localhost:5000

API_VERSION=/api/v1

## server .env

BASEURL=/api/v1

NODE_ENV=development

PORT=5000

DATABASE_LOCAL=mongodb://localhost:27017/eksamen

JWT_SECRET=alksdfmytwpaiohgeihgvbhz

JWT_EXPIRES_TIME=7d

COOKIE_EXPIRE_TIME=7

---

## YARN

- yarn

- yarn run dev

## NPM

- npm i

- npm run dev

## Åpne nettleser for å starte

http://localhost:3000/

---

# Kildekode

## Client

### Fra Marius:

Filer som er direkte kopier.

1. customHookForm
   - Vår side: client/src/hooks/customHookForm.jsx
   - Tatt fra/basert på: 07_REACT_API/02_react_v2/src/hooks/useCustomForm.jsx

## Server

### Fra Marius:

Kodesnutter (funksjoner, eller deler av funksjoner) som er direkte kopier.

- Regex for email
  - Tatt fra: Regex for epost-validering tatt fra leksjon14/server/models/user.js
    - linje 13
  - Brukt: server/models/user.js
    - linje 21

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
  - linje 59
- Kilde:
  - https://stackoverflow.com/questions/26615779/react-checkbox-not-sending-onchange

---

# Hentet eller inspirert fra forelesninger og koden til Marius

## Settings

- .gitignore
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

## Client

- Noen av filene er basert på eller nært identiske til Marius' kodefiler

## Server

- Mesteparten av filene er nært identiske til Marius' kodefiler

---

# Ikke ferdig implementert

- Bildeopplasting i frontend (kan testes og kjøres i Postman)
- Redigering av artikler i frontend (kan testes og kjøres i Postman)
- Kontaktskjema
- Email
- Superadmin med aggregering
- Testing
