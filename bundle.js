console.error("SyntaxError: Can't walk dependency graph: {\n  \"name\": \"websheetjs\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Render website sections with lazy-loaded data from Google Spreadsheets\",\n  \"scripts\": {\n    \"watch:ts\": \"npx tsc --watch\",\n    \"watch:bundler\": \"npx watchify build_tmp/index.js -o build_tmp/websheet.js\"\n    \"test\": \"jest\",\n    \"build\": \"npx tsc && npm test && cp build_tmp/websheet.js dist/websheet.js && npx uglifyjs dist/websheet.js --compress --mangle eval -o dist/websheet.min.js && ls -lh dist/websheet.min.js | awk '{print \\\">> websheetjs built & minified successfully! (\\\"$5\\\")\\\"}'\"\n  },\n  \"author\": \"Pierre Avinain\",\n  \"license\": \"ISC\",\n  \"devDependencies\": {\n    \"browserify\": \"^17.0.0\",\n    \"jest\": \"^26.6.3\",\n    \"jest-fetch-mock\": \"^3.0.3\",\n    \"snowpack\": \"^2.18.5\",\n    \"ts-jest\": \"^26.4.4\",\n    \"typescript\": \"^4.1.3\",\n    \"watchify\": \"^4.0.0\"\n  },\n  \"dependencies\": {\n    \"tsify\": \"^5.0.2\",\n    \"uglify-es\": \"^3.3.9\"\n  },\n  \"jest\": {\n    \"automock\": false,\n    \"setupFiles\": [\n      \"./test/_setup.ts\"\n    ],\n    \"coveragePathIgnorePatterns\": [\n      \"/dist/\",\n      \"/docs/\",\n      \"/node_modules/\"\n    ],\n    \"moduleFileExtensions\": [\n      \"ts\",\n      \"tsx\",\n      \"js\"\n    ],\n    \"transform\": {\n      \"^.+\\\\.(ts|tsx)$\": \"ts-jest\"\n    },\n    \"globals\": {\n      \"ts-jest\": {\n        \"tsconfig\": \"tsconfig.json\"\n      }\n    }\n  }\n}\n : Unexpected string in JSON at position 273\n    required by /Users/pierreavinain/workspace/websheetjs/build_tmp/_fake.js");