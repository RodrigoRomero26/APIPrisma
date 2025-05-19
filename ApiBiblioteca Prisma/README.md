 Realizar npm install<br>
 Levantar la base de datos con el comando:<br>
docker-compose up -d <br>
 Crear el archivo .env con todos lo necesario para levantar la base de datos y la app<br>
 Generar el cliente de Prisma con el comando:<br>
npx prisma generate<br>
 Migrar la base de datos con el comando:<br>
npx prisma migrate dev --name init<br>
 Compilar la app con el siguiente comando:<br>
npm run build<br>
 Por ultimo levantar la aplicacion con:<br>
npm start<br>

