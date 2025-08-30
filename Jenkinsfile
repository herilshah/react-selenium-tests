pipeline {
    agent any

    tools { nodejs "Node 20" } // must match Jenkins NodeJS tool name

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'git@github.com:herilshah/react-selenium-tests.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Start App') {
            steps {
                sh 'nohup npm start & sleep 10'
            }
        }
        stage('Run Selenium Tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}
