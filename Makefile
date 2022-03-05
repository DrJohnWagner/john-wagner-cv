
docker: docker-build docker-push

docker-build:
	docker build -t drjohnwagner/john-wagner-cv

docker-push:
	docker push drjohnwagner/john-wagner-cv
