pipeline {
    agent any
    stages {
        stage('Setup Python Environment') {
            steps {
                sh '''
                    apt-get update
                    apt-get install -y python3-pip
                    pip3 install semgrep
                '''
            }
        }
        stage('Semgrep Analysis') {
            steps {
                sh 'semgrep --config p/javascript --exclude node_modules --exclude .next --json > semgrep-report.json'
            }
        }
        stage('Publish Semgrep Report') {
            steps {
                // Assuming you're using some plugin or custom logic to publish the report
                publishHTML(reportName: 'Semgrep Report', reportDir: '.', reportFiles: 'semgrep-report.json')
            }
        }
    }
    post {
        always {
            echo 'Pipeline execution complete.'
        }
        failure {
            echo 'Issues were found during Semgrep Analysis.'
        }
    }
}