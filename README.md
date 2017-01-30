# cachegit
A BETA CLI for the [CacheGit caching service](http://cachegit.com).

# Installation

Install cachegit as a dev dependency in the repository where you wish to use it:

npm install --save-dev cachegit

# Setup

Create a file cachegit.json in the root of your repository using the format below:

```
{
"account": "anywhichway", // replace with your GitHub account name
"repository":"test", // replace with you repository name
"files": [
	"test.js", // will cache from root directory, replace with your file names
	"dir/test.js", // will cache from subdirectory, replace with your paths
	"README.md", // will print a Not Implemented message to console since it is not JavaScript
	]
}
```
You must push this file to GitHub with the rest of your respository or the CDN may return a 404 not found for requested files.

# Use

In order to flush the CDN cache for the files in cachegit.json, manually run the below command
line or add it to your build process after deploying the newest build to GitHub:

node node_modules/cachegit/cachegit

The behavior of cachegit changes under the below conditions.

## Unmanaged Version (This CLI is not required)

1. The master branch of a file is accessable through `public.cachegit.com`. See [website](http://www.cachegit.com) for instructions.

2. Stores minified but unmangled source files on the CDN 3 days before requesting a new copy.

3. Tells browsers to cache the file for 5 minutes.

## Free Version, No Acknowledgement (You have not starred [CacheGit](http://cachegit.com))

1. The master branch of a file is accessable through `public.cachegit.com` and `free.cachegit.com`

2. Composes the URI `cachegit.com/:account/master/blob/master/<path>`.

3. Tells the CDN to flush its cache for both public and free versions of the file.

4. Stores minified but unmangled source on the CDN for 3 days before requesting a new copy or until CacheGit is run again.

5. Tells browsers to cache the file for 5 minutes.

Note: Writing a custom version of gitcache will not change the behavior, checks and re-writes are done on the server.

## Free Version, Acknowledgement (You have starred [CacheGit](http://cachegit.com))

1. Specified branches of files are accessable through `public.cachegit.com` and `free.cachegit.com`

2. Composes the URI `cachegit.com/:account/:respository/blob/:branch/:path`.

3. Tells the CDN to flush its cache for both public and free versions of the file.

4. Stores minified but unmangled source on the CDN for 3 days before requesting a new copy or until CacheGit is run again.

5. Tells browsers to cache the file for 8 hours, improving end user experience.

Note: Writing a custom version of gitcache will not change the behavior, checks and re-writes are done on the server.

## Future Versions

Future versions of CacheGit will provide more granular control over caching on a file by file basis.

# Authentication

The CacheGit CLI uses a mechanism similar to ACME with CNAMES or Google's domain validation through proof of control over a domain record. 
It assumes the ability to define the contents of `cachegit.json` in a GitHub respository implies control over the repository and 
the right to cache it in a CDN so long as the account specified in the `.json` file matches the account in the repository path and the 
account transmitted by the CLI. As a result, no password is required to run the CLI.

# Testing Cached Files

If you are doing post deployment smoke testing make sure to clear your browser cache to ensure you get the most recent file copies.

# Updates (reverse chronological order)

2017-01-29 v0.0.4 Public BETA to go with service launch.

# License

MIT
