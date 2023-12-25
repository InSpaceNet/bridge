default: build dev
fmt:
	npx prettier --write .
build:
	yarn build
dev:
	yarn dev
