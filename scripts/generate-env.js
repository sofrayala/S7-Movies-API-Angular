const fs = require("fs");

const envConfig = `
export const environment = {
  production: true,
  tmbd: {
    apiUrl: 'https://api.themoviedb.org/3/',
    api_key: '${process.env.TMDB_API_KEY}',
  },
  firebase: {
    apiKey: '${process.env.FIREBASE_API_KEY}',
    authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',
    projectId: '${process.env.FIREBASE_PROJECT_ID}',
    storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',
    messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',
    appId: '${process.env.FIREBASE_APP_ID}',
  },
};
`;

fs.writeFileSync("./src/environments/environment.ts", envConfig);
fs.writeFileSync("./src/environments/environment.development.ts", envConfig);
