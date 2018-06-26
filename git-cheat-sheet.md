### Git Issues No Mo'

## To Prevent issues w/ dependency downloads
- 1 person installs dependencies and push up to remote
- everyone else git pull; package-lock.json will have all dependencies in it, so npm install to make sure all dependencies add to local repo's package-lock file

* any new dependency needing to be installed should be done so in a FEATURE BRANCH > resolve merge conflict resulting in VS Code's src control