
# Contribution Guide
### 1. Configuration
- Recommended to have forked **master branch** to be updated to **upstream** remote repository.
- [Configurring a remote for a fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/).
  - `$ git remote add upstream https://github.com/codingidiots/react-starter-kit.git`
  - Check it with `$ git remote -v`
  - Fetch the branches from upstream repository by `$ git fetch upstream`
### 2. Coding
  - make new branch: `$ git checkout -b [new_branch_name]`
  - and commit in your new branch created by you
### 3. Before make Pull Request ( need to be fixed )
  - checkout **master** branch and merge from **upstream** remote repository `$ git fetch upstream` && 
  - checkout your branch and try rebase `$ git rebase master`
    (- do `$ git fetch upstream` from **master branch** then try the rebase by `$ git rebase master`)
  - Check your status by `$ git log --decorate --oneline --all --graph`
    - if you're using **Visual Studio Code**, I recommend [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) plugin.
### 4. Make Pull Request

### References
  - [Creating a pull request](https://help.github.com/articles/creating-a-pull-request/)
  - [Configuring a remote for a fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/)