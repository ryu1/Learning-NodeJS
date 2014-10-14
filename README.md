Learning-NodeJS
===============

## Project Setup


### Node.js

<pre>
$ brew install nodebrew
$ vi ~/.zshrc
$ export PATH=$HOME/.nodebrew/current/bin:$PATH
$ source ~/.zshrc
$ nodebrew ls-remote
$ nodebrew install-binary v0.10.32
$ nodebrew ls
$ nodebrew use v0.10.32
$ nodebrew ls
</pre>


### プロセス管理

<pre>
$ npm install -g pm2
</pre>

### Mocha & Chai
<pre>
$ npm install -g mocha
$ npm install chai --save-dev
</pre>

### エラーのモニター
<pre>
& npm install panic --save-dev
npm install eyes --save-dev
npm install stack-trace --save-dev
npm install callsite --save-dev
￼￼npm install long-stack-traces --save-dev￼</pre>
### Express
<pre>
npm install express -g</pre>