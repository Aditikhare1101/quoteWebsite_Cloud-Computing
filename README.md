Reference - YT - https://www.youtube.com/watch?v=tlTdbc5byAs

use this for writing font :  font-family: "Pacifico", system-ui;
                             font-family: "Dancing Script", system-ui;
                             font-family: "Caveat", system-ui;


*WHY WE ARE USING jsx INSTEAD OF js*
-> Because JS is simply a scripting language, adding functionality into a website. JSX is an addition to the JavaScript syntax which is a mixture of both HTML and JavaScript. 


*Steps to create this project:*

*1*: Create react project - npx create-react-app project-name
*2*: Install npm - npm install
*3*: Choose the google fonts accordingly and add their link into the '/public/index.html'.
*4*: Add font awesome file link from 'font-awesome library' website into the '/public/index.html'.
*5*: Install yarn add react-router-dom or npm install react-router-dom@latest
*6*: LogIn into your AWS account
*7*: Create RDS db
    *7.1*: select public access, and make sure the db name is same to the username else it will create a confusion.
    *7.2*: download mysql workbench, and then click on + sign, and username, hostname as your endpoint, you will get that by clicking on the RDS db, and then enter your password same as your RDS db password.
    *7.3*: if facing an error then check the inbound rule, if mysql is there or not, if not add add it and in that select it after that select myip and enter your ip, and here you go.
    *7.4*: create your tables now but at start mention "use your_RDS_db_name;"
*8*: Create S3 bucket in the same region as your RDS db.
*9*: Create a server which will hold your website.
    *9.1*: create an instance using EC2. Launch your instance.
    *9.2*: open GitBash or cmd, cd your_.pem(key_pair_file)location, then enter this command to connect the server:
            "ssh -i "your_keyPair_fileName.pem" your_instance_Public_DNS".
    *9.3*: then update sudo using this command: "sudo yum update -y"
    *9.4*: give premission "chmod 400 "your_.pem(key_pair_file)location"
    *9.5*: then install mysql "sudo yum install mysql -y, if you face any error while installing the mysql, then check if the mysql is persent in your system or not using this command: "rpm -qa | grep mysql" and "sudo rpm -Uvh your_mysql_community"
           and "sudo wget https://dev.mysql.com/get/mysql80-community-release-el9-1.noarch.rpm", and "sudo wget https://dev.mysql.com/get/mysql80-community-release-el9-1.noarch.rpm" and "sudo rpm -Uvh mysql80-community-release-el9-1.noarch.rpm" and "sudo yum clean all"
           and "sudo yum install mysql-server -y"
    *9.6*:  then enter this "sudo yum clean all", "sudo yum install mysql-server -y"
    *9.7*: now try to connect with the RDS using this command: "mysql -h "your_endpoint" -u db_username -p" hit the enter button and enter_your_password.
    *9.8*: if you face an error then "sudo yum update -y", "sudo yum install mysql -y", "sudo yum install mysql -y", follow the step 9.7.
    *9.9*: create database and tables as per your requirement.
*10*: inside the backend folder, install "npm init -y", "npm install express mysql cors nodemon", and then in the package.json, inside script add "start": "nodemon server.js", before this create a file name server.js
*11*: 

=JIv;fDQaIimu.qGjLkWoDYZRAwv9yoW




footer, logo, db connectivity, - yet to do.

