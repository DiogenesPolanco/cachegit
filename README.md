# cachegit
A CLI for the CacheGit caching service

# installation

npm install --save-dev cachegit

# use

node node_modules/cachegit/cachegit

# file format

```
{
"account": "<GitHub Account>",
"repository":"<repository>",
"files": [
	"test.js",
	"dir/test.js",
	"README.md"
	]
}
```
