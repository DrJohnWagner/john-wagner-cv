# FROM node:16-alpine AS builder
FROM node:latest AS builder

ENV NODE_ENV=production
WORKDIR /app
COPY package.json .
COPY package-lock.json .
# Should not need --production
# since NODE_ENV=production
# but test that and delete!
#RUN npm install --production
RUN npm install --production
COPY . .
RUN npm run build

# Bundle static assets with nginx
# FROM nginx:1.21.0-alpine as production
FROM nginx:latest as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]