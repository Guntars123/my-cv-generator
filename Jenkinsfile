pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/your-repo/your-nextjs-project.git'
            }
        }

        stage('Semgrep Analysis') {
            steps {
                sh 'pip install semgrep'
                sh 'semgrep --config p/javascript --exclude node_modules --exclude .next --json > semgrep-report.json'
            }
        }

        stage('Publish Semgrep Report') {
            steps {
                archiveArtifacts artifacts: 'semgrep-report.json', allowEmptyArchive: true
                // Publish HTML or other reports here
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