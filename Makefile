
docker: docker-build docker-push

docker-build:
	docker build -t drjohnwagner/john-wagner-cv .

docker-push:
	docker push drjohnwagner/john-wagner-cv

docker-run:
	docker run -p 80:80 --name johnwagnercv drjohnwagner/john-wagner-cv

docker-clean:
	docker rm johnwagnercv