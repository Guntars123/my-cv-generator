pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Guntars123/my-cv-generator.git'
            }
        }

        stage('Semgrep Analysis') {
            steps {
                sh 'docker run --rm -v $WORKSPACE:/src returntocorp/semgrep semgrep --config p/javascript --exclude node_modules --exclude .next --json > semgrep-report.json'
            }
        }

        stage('Publish Semgrep Report') {
            steps {
                archiveArtifacts artifacts: 'semgrep-report.json', allowEmptyArchive: true
                // Additional steps to process or publish the report
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