build: node_modules; node --harmony_generators index.js

node_modules: package.json; npm install

.PHONY: build
