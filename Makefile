##@ General
.DEFAULT_GOAL := help
.PHONY: help
help: ## Display this help.
	@awk 'BEGIN {FS = ":.*##"; printf "Usage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_0-9-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
##@ Development
0: ## npm run serve
	npm run serve
build: ## npm run build
	npm run build
v-p: ## view port: make v-p p=8080
	sudo lsof -i :$(p)
k-p: ## kill port: make k-p p=12345
	kill -9 $(p)
##@ Format
c: ## prettier check
	prettier --check .
w: ## prettier write
	prettier --write .