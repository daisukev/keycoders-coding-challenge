FROM node:lts
# RUN useradd -ms /bin/sh -u 1001 app
# USER app
WORKDIR /app
ENV PATH=/app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY --chown=frontend:app . /app
EXPOSE 5173
CMD ["vite"]
# CMD ["npm", "run", "dev"]
