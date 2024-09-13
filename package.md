working package

"scripts": {
"start": "node ./dist/backend/server.js",
"server": "nodemon ./dist/backend/server.js",
"client": "cd frontend && npm run dev",
"dev": "concurrently \"npm run server\" \"npm run client\"",
"watch": "tsc -w",
"build-server": "tsc",
"build-client": "cd frontend && npm install && npm run build",
"build": "tsc && npm install && cd frontend && npm install && npm run build"
},
