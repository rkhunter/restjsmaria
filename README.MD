```cd ac && docker build . -t angularcli:latest && cd ..```
```cd nc && docker build . -t nestcli:latest && cd ..```

# Tab 1
```
source ./add_aliases.sh
mariadb db
```

# Tab 2
```
source ./add_aliases.sh
phpmyadmin mariadb1
```

# Tab 3
```
source ./add_aliases.sh
nc api npm i # Install required modules once
nc api npm start # Node Server
```

# Tab 4
```
source ./add_aliases.sh
ac frontend npm i # Install required modules once
ac frontend npm start # Angular serve
```

~Stage 0: DB Access~
~Stage 1: Auth~
Stage 2: ACL
Stage 3: File Upload
