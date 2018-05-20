export MSYS_NO_PATHCONV=1

getIpAddress() {
    ipconfig | findstr /R /C:"IPv4 Address" | cut -d : -f 2 | head -n 1 | xargs
}

mariadb() {
    [ "$(docker ps -a | grep mariadb1)" ] && \
        docker stop mariadb1 && \
        docker rm mariadb1
    docker run \
        --name mariadb1 \
        -e MYSQL_ROOT_PASSWORD=toor \
        -e MYSQL_DATABASE=app \
        -e MYSQL_USER=api \
        -e MYSQL_PASSWORD=default \
        -v $(pwd)/"$1"/seed:/docker-entrypoint-initdb.d \
        -it mariadb:latest
}

ac() {
    docker run -it --rm -w /app -v $(pwd)/"$1":/app -p 4200:4200 angularcli:latest "${@:2}"
}

nc() {
    docker run \
        -it --rm \
        -w /app \
        -v $(pwd)/"$1":/app \
        -p 3000:3000 \
        --link mariadb1:db \
        nestcli:latest \
        "${@:2}"
}

ncg() {
    docker run -it --rm -w /app -v $(pwd)/"$1":/app nestcli:latest "${@:2}"
}

phpmyadmin() {
    [ "$(docker ps -a | grep myadmin)" ] && \
        docker stop myadmin && \
        docker rm myadmin

    docker run \
        --name myadmin \
        -it \
        --link "$1":db \
        -p 8888:80 phpmyadmin/phpmyadmin
}