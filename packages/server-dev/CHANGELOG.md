# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.0.0-alpha.8](https://github.com/lowdefy/lowdefy/compare/v4.0.0-alpha.7...v4.0.0-alpha.8) (2022-03-16)


### Bug Fixes

* Revert back to react 17.0.2. ([1b38fd3](https://github.com/lowdefy/lowdefy/commit/1b38fd3e743ee7286468c7c1e2f623838dd5ed84))
* **server-dev:** Read next cli bin path from package.json. ([0146627](https://github.com/lowdefy/lowdefy/commit/01466276dcfffef1ee6f2d7b50205ddd4e48edad))
* **server:** Add index to keys to resolve react warning. ([0f25b57](https://github.com/lowdefy/lowdefy/commit/0f25b5768f09327f68703b80f63f891b1645b1e3))
* **server:** Disable ssr on _app. ([1b13e57](https://github.com/lowdefy/lowdefy/commit/1b13e5715c29783b076878ad935626a05f7ba343))


### Features

* Custom plugins on dev server. ([9f65d13](https://github.com/lowdefy/lowdefy/commit/9f65d130d70494ebd74fb0ae3cf6edb4cbf31415))





# [4.0.0-alpha.7](https://github.com/lowdefy/lowdefy/compare/v4.0.0-alpha.6...v4.0.0-alpha.7) (2022-02-21)


### Bug Fixes

* **deps:** Downgrade dependency swr to v1.1.2. ([80b047f](https://github.com/lowdefy/lowdefy/commit/80b047fb8e5684d032026d9e10b50114a67af89f))
* **deps:** Update dependecy next to v12.0.10 ([c058935](https://github.com/lowdefy/lowdefy/commit/c05893578f8d5f625391b560ec24411d16df902d))
* **deps:** Update dependency chokidar to v3.5.3. ([4513321](https://github.com/lowdefy/lowdefy/commit/45133218d83e9751746e1c71c6f9fa44a5b50ead))
* **deps:** Update dependency dotenv to v15.0.0. ([682620c](https://github.com/lowdefy/lowdefy/commit/682620c99c0e53d31467b6c3d5146f0eba596ab1))
* **deps:** Update dependency next-auth to v4.1.2. ([4b63c87](https://github.com/lowdefy/lowdefy/commit/4b63c8774fab7adbc3e11f92a5e808b38d22f4c9))
* **deps:** Update dependency next-with-less to v2.0.4. ([7c71492](https://github.com/lowdefy/lowdefy/commit/7c714926ee0caeba362af78b594698635f34c70f))
* **deps:** Update dependency react to v18.0.0-rc.0 ([2345330](https://github.com/lowdefy/lowdefy/commit/23453301716f541a1e044f63a740aae09d635237))
* **deps:** Update dependency swr to v1.2.0. ([8c55376](https://github.com/lowdefy/lowdefy/commit/8c55376080ea89f015f208262c097e5201c21d79))
* **deps:** Update dependency yargs to v17.3.1. ([277776c](https://github.com/lowdefy/lowdefy/commit/277776c7294e57a95dfcf86d300bb20ea4742043))
* **node-utils:** Convert writeFile function prototype. ([5371430](https://github.com/lowdefy/lowdefy/commit/53714307123f3477240767a91c5332a70a292d93))
* **server-dev:** Add dev server manager description. ([18cf9c2](https://github.com/lowdefy/lowdefy/commit/18cf9c2941f0001d98eed5c79dac2b111f6c6eee))
* **server-dev:** Do not error if .env file does not exist. ([fa389a1](https://github.com/lowdefy/lowdefy/commit/fa389a17eff8d716e4cc45c1262f4e3d69bdb71d))
* **server-dev:** Fix redirect. ([96ed764](https://github.com/lowdefy/lowdefy/commit/96ed764458ebed076d5bee246622c2fb457d9f33))
* **servr-dev:** Fix 404 redirect so that browser back works. ([9df6579](https://github.com/lowdefy/lowdefy/commit/9df6579198c0dd0aef9092a98c1b455fac41a761))


### Features

* Add start, start:dev and start:server-dev scripts for easy dev ⚡️. ([da813c3](https://github.com/lowdefy/lowdefy/commit/da813c3d13b39fcfdbd50b8d53c3e0b1f5e7e8e2))
* Add watch and ignore paths, default ref resolver to dev server and build. ([c700d9f](https://github.com/lowdefy/lowdefy/commit/c700d9fb0efbdb20dcfe5f8916e256de81acd79e))
* **build:** Add buildPath to config. ([1cce024](https://github.com/lowdefy/lowdefy/commit/1cce024339bc89e4192d86f09d1a9ec233663f02))
* **cli:** Pass package manager setting to dev server. ([0425f07](https://github.com/lowdefy/lowdefy/commit/0425f07e4ada328e76488e3ec0aa164ff475df5c))
* Link and basePath implementation for dev server. ([d487a1c](https://github.com/lowdefy/lowdefy/commit/d487a1c7fd496d4342a786ec7c96da13bafafc12))
* **operators:** Change dependancy from js-yaml to yaml. ([cbb71d8](https://github.com/lowdefy/lowdefy/commit/cbb71d809b3117dbaf89b23c17a2229a24235308))
* **server-dev:** Add .env and lowdefy version watchers. ([bc52268](https://github.com/lowdefy/lowdefy/commit/bc522684abce8c050873ef20a3da66ca023cfa32))
* **server-dev:** Add port setting to server-dev. ([f5b0e7e](https://github.com/lowdefy/lowdefy/commit/f5b0e7e80f8a6002e6d6c6ea426a2b6fee8953bf))
* **server-dev:** Added import for actions plugins to the lowdefy context. ([20133bb](https://github.com/lowdefy/lowdefy/commit/20133bb0589d35b1494cd3f996ff0ea5421ee560))
* **server-dev:** Clean up server-dev manager. ([ad3511c](https://github.com/lowdefy/lowdefy/commit/ad3511cce781bdcaf4cba634c87ed541e07b0123))
* **server-dev:** Dev server plugin install and next build working. ([cf66a6f](https://github.com/lowdefy/lowdefy/commit/cf66a6f83952016b4282985b44f8eb10e7f72ea4))
* **server-dev:** Optimise dev server next build time. ([34aa84a](https://github.com/lowdefy/lowdefy/commit/34aa84acf92288ecbada387ecf9c7eefc1c0968e))
* **server-dev:** Skip calling next and lowdefy build using npm/yarn start. ([1a8699a](https://github.com/lowdefy/lowdefy/commit/1a8699a0124ba45202cc4d57255d5d0d6ff6abb7))


### BREAKING CHANGES

* **operators:** _yaml.parse now takes an array or an object data instead of a string.
* **deps:** # marks the beginning of a comment in .env files (UNLESS the value is wrapped in quotes. Please update your .env files to wrap in quotes any values containing #.





# [4.0.0-alpha.6](https://github.com/lowdefy/lowdefy/compare/v4.0.0-alpha.5...v4.0.0-alpha.6) (2022-01-20)


### Features

* Add secrets to v4 servers ([9ef2ccd](https://github.com/lowdefy/lowdefy/commit/9ef2ccd131149e72ba87aee20f1720a99dbd9e07))
* Add server manager and file watcher in reload event stream. ([8474aaf](https://github.com/lowdefy/lowdefy/commit/8474aaf63c0475cb19a76ca3df9459c05f263986))
* Add Server Sent Event reload rout and component. ([a556eab](https://github.com/lowdefy/lowdefy/commit/a556eabdbb4da2e98088e810b3cc24cccefacd4f))
* **build:** Move app.style.lessVariables to config.theme.lessVariables. ([cb14f17](https://github.com/lowdefy/lowdefy/commit/cb14f1712f9f064e96d2f71bf12bb3922aff46eb))
* **cli:** Add v4 dev command to CLI. ([02770f5](https://github.com/lowdefy/lowdefy/commit/02770f57096710afc9047403e5e4a616957c3a93))
* Create wait helper function. ([42c09f4](https://github.com/lowdefy/lowdefy/commit/42c09f467b3d4a3b51298a2a67364137def7896d))
* Init @lowdefy/server-dev package. ([e76b40e](https://github.com/lowdefy/lowdefy/commit/e76b40e8399567bda70404dc85f06c6c2db7e837))
* **server-dev:** Add browser opener to dev server. ([ddf9d36](https://github.com/lowdefy/lowdefy/commit/ddf9d36d8689caf30f4d008e1ec2be0c48699a34))
* **server-dev:** Add dev server startup and config file watcher. ([a29576d](https://github.com/lowdefy/lowdefy/commit/a29576d45e58720f02896e5d0523f728fad036a5))
* **server-dev:** Add the abilty to restart the dev server. ([b610a63](https://github.com/lowdefy/lowdefy/commit/b610a63a522afebe66dee8481cf8caf029334201))
* **server-dev:** Dev server soft reload working. ([dd5ee07](https://github.com/lowdefy/lowdefy/commit/dd5ee07b5b39c3c22e702b5b1c8404e7a86ab500))
* **server-dev:** Fetch Lowdefy config client-side using swr. ([ce126df](https://github.com/lowdefy/lowdefy/commit/ce126df4374d74a27a2a40439aa1bf56a63723f5))
* **server-dev:** Reload client window if dev server is restarted. ([b8c1d58](https://github.com/lowdefy/lowdefy/commit/b8c1d58ea8b0056fdd9ce042590f7c7f90bcc439))
* **server-dev:** Updates to dev server manager. ([b4861d0](https://github.com/lowdefy/lowdefy/commit/b4861d0892ee9a91ff49b3bb72498d8c42c02778))