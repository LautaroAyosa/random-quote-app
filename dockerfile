# Usa una imagen de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Expone el puerto que utiliza tu aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
