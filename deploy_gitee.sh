#!/usr/bin/env sh
 
# 表示后续所有的bash命令的返回code如果不是0，那么脚本立即退出，后续的脚本将不会得到执行的机会
set -e
 
npm run build

# git checkout master
git add .
git commit -m 'deploy update'

# git remote add origin https://gitee.com/vangi/vangi.git
# git remote add origin git@gitee.com:vangi/vangi.git
# git push -u origin "master"
git push origin "master"