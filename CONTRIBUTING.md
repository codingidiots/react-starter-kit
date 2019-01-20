
# Contribution Guide (EN)
### 1. Init Configuration
- **fork** from remote repository to my repository.
  - [Fork a repo](https://help.github.com/articles/fork-a-repo/#fork-an-example-repository)
- **clone** my repository to local.
  - [Create a local clone of your fork](https://help.github.com/articles/fork-a-repo/#step-2-create-a-local-clone-of-your-fork)
    ```
    $ git clone https://github.com/{YOUR-USERNAME}/react-starter-kit.git
    ```
- [Configurring a remote for a fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/).
  - `$ git remote add upstream https://github.com/codingidiots/react-starter-kit.git`
  - Check it with `$ git remote -v`
  - Fetch the branches from upstream repository by `$ git fetch upstream`
### 2. Coding (Optional)
  - make new branch: `$ git checkout -b [new_branch_name]`
  - and commit in your new branch created by you
  - if this is enough to make a pull request, merge to **master branch**
    ```
    $ git checkout master
    $ git merge master
    ```
### 3. Before make Pull Request ( need to be fixed )
  - fetch from **upstream** remote repository -> `$ git fetch upstream`
  - try to rebase from **upstream** remote -> `$ git rebase upstream/master`
  - Check your status by `$ git log --decorate --oneline --all --graph`
    - if you're using **Visual Studio Code**, I recommend [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) plugin.
### 4. Make Pull Request

### References
  - [Creating a pull request](https://help.github.com/articles/creating-a-pull-request/)
  - [Configuring a remote for a fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/)

------
# Contribution Guide (KR)
### 1. 초기설정
- 원본 리포지토리로부터 나의 리포지토리로 fork한다.
  - 참고: [Fork a repo](https://help.github.com/articles/fork-a-repo/#fork-an-example-repository)
- fork된 나의 리포지토리를 로컬로 **clone**한다.
  - 참고: [Create a local clone of your fork](https://help.github.com/articles/fork-a-repo/#step-2-create-a-local-clone-of-your-fork)
    ```
    $ git clone https://github.com/{YOUR-USERNAME}/react-starter-kit.git
    ```
- clone한 로컬 repository에서 **upstream repository** 세팅
  - 참고: [Configurring a remote for a fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/).
  - `$ git remote add upstream https://github.com/codingidiots/react-starter-kit.git`
  - `$ git remote -v` 로 **upstream repository**가 생겼나 확인
### 2. 브랜치 작업 (선택사항)
  - 좀 더 안정적인 branch작업을 하고 싶다면, master branch로부터 새로운 branch를 만든다.
    ```
    $ git checkout -b [new_branch_name]
    ```
  - 어느정도 새로운 branch에서 commit을 진행 후 master branch에 반영해도 문제가 없겠다 싶으면 master branch로 통합한다.
    ```
    $ git checkout master
    $ git merge master
    ```
### 3. Pull Request를 하기 전에
  - **upstream** remote repository를 최신 상태로 업데이트 받는다.
    - `$ git fetch upstream`
  - 지금까지 작업된 커밋 이력을 **upstream** remote repository의 commit내역 뒤에다가 붙이기 위해 **rebase**를 한다.
    - `$ git rebase upstream/master`
  - git log를 확인하고 싶다면..
    -  `$ git log --decorate --oneline --all --graph`
    - **Visual Studio Code**를 쓰고 있다면, [**Git History** Plugin](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) 를 사용 하는 것이 더 보기 편하다.
### 4. Pull Request를 올린다.

### 참고링크
  - [Creating a pull request](https://help.github.com/articles/creating-a-pull-request/)
  - [Configuring a remote for a fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/)