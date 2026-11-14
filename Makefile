# All tooling runs in containers; nothing to install on the host.
NODE_IMG := docker.io/library/node:22-alpine
PW_IMG   := mcr.microsoft.com/playwright:v1.49.1-noble
RUN      := podman run --rm -v $(CURDIR):/app:Z -w /app

.PHONY: install dev build preview cv clean

install:
	$(RUN) $(NODE_IMG) npm install

dev:
	$(RUN) -it -p 4321:4321 $(NODE_IMG) npm run dev

build:
	$(RUN) $(NODE_IMG) npm run build

preview: build
	$(RUN) -it -p 4321:4321 $(NODE_IMG) npm run preview

# Regenerate the three résumé PDFs into public/cv/ (commit them), then rebuild.
cv: build
	$(RUN) --ipc=host $(PW_IMG) node scripts/cv-pdf.mjs
	$(MAKE) build

clean:
	rm -rf dist .astro
