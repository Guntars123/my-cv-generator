pipeline {
    agent any

    environment {
        NODE_ENV = 'production' // Var būt 'development', atkarībā no vajadzības
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test' // Ja tev ir testi. Piemēram, ar Jest
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
                // Šeit vari pievienot komandas, kas izvieto tavu projektu
                // Piemēram, kopē failus uz serveri, izmantojot scp vai rsync
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
    }
}