pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Guntars123/my-cv-generator.git'
            }
        }

        stage('Setup Python Environment') {
            steps {
                sh '''
                sudo apt-get update
                sudo apt-get install -y python3 python3-pip
                '''
            }
        }

        stage('Semgrep Analysis') {
            steps {
                sh 'python3 -m pip install semgrep'
                sh 'python3 -m semgrep --config p/javascript --exclude node_modules --exclude .next --json > semgrep-report.json'
            }
        }

        stage('Publish Semgrep Report') {
            steps {
                archiveArtifacts artifacts: 'semgrep-report.json', allowEmptyArchive: true
                // Add steps to publish reports if necessary
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution complete.'
        }
        success {
            echo 'Semgrep Analysis passed successfully.'
        }
        failure {
            echo 'Issues were found during Semgrep Analysis.'
        }
    }
}