### 1. 创建挂载目录
在Linux中，mkdir命令并没有-r选项来递归创建目录。要递归地创建目录，你可以使用-p选项。下面是正确的命令：

```mysql
mkdir -p /mydata/mysql/log
mkdir -p /mydata/mysql/data
mkdir -p /mydata/mysql/conf
```
这个命令会递归地创建 /mydata/mysql/log 这个目录，即使 /mydata 和 /mydata/mysql 目录不存在也会一并创建。

### 2. Linux执行命令

设置mysql密码，mysql镜像版本

```docker
docker run -p 3306:3306 --name mysql \
-v /mydata/mysql/log:/var/log/mysql \
-v /mydata/mysql/data:/var/lib/mysql \
-v /mydata/mysql/conf:/etc/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
-d mysql:5.7 
```

### 3. 修改配置文件
修改my.cnf配置：/mydata/mysql/conf/my.cnf
```mysql
[client]
default-character-set=utf8

[mysql]
default-character-set=utf8

[mysqld]
init_connect='SET collation_connection=utf8_unicode_ci'
init_connect='SET NAMES utf8'
character-set-server=utf8
collation-server=utf8_unicode_ci
skip-character-set-client-handshake
skip-name-resolve
```