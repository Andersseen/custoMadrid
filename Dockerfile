# Utiliza una imagen base de nginx
FROM nginx:alpine

# Copia los archivos de configuración de nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY conf.d/default.conf /etc/nginx/conf.d/default.conf

# Copia el contenido de tu aplicación al directorio adecuado en el contenedor
COPY . /usr/share/nginx/html

# Expone el puerto 80 para el contenedor
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
