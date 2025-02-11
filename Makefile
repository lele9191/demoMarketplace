.PHONY: start-ngrok

PORT ?= 8000
PROTOCOL ?= http

ng:
	ngrok $(PROTOCOL) http://localhost:$(PORT)

start:
	npm start

#todo-> killare un processo locale: netstat -ano | findstr :8000 e poi taskkill /PID 1234 /F

devstart:
	make start & make ng