# Usa una imagen oficial de Node.js como base
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
# y los scripts de inicio en el contenedor
COPY back/package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY back/ .

# Expone el puerto que usa tu aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "prodstart"]