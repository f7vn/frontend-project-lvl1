install:
	 npm link

start:
	npx babel-node src/bin/brain-games.js

start2:
	npx babel-node src/bin/brain-even.js

start3:
	npx babel-node src/bin/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

build:
	npm run build
