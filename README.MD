## This is a learning repo

Each application will be created using `npx create-react-app my-app --template redux-typescript` and modified as needed.
<br />
The information on how to start the application what technologies i am learning will be described in each readme

### Enable eslint

Create file **.eslintrc.json** content:
<br />

`{ "env": { "browser": true, "es2021": true }, "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"], "parser": "@typescript-eslint/parser", "parserOptions": { "ecmaFeatures": { "jsx": true }, "ecmaVersion": "latest", "sourceType": "module" }, "plugins": ["react", "@typescript-eslint"], "rules": { "indent": ["error", 2], "linebreak-style": ["error", "unix"], "quotes": ["error", "single"], "semi": ["error", "always"] } } `

paste the following code in package.json of a newly created app:
<br />
`"devDependencies": { "@typescript-eslint/eslint-plugin": "^5.30.3", "@typescript-eslint/parser": "^5.30.3", "eslint": "^8.18.0", "eslint-plugin-react": "^7.30.1" }`
