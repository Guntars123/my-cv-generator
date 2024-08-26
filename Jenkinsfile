pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository and branch
                git url: 'https://github.com/Guntars123/my-cv-generator.git', branch: 'main'
            }
        }
        stage('Install Node Modules') {
            steps {
                // Install Node.js modules
                sh 'npm install'
            }
        }
        stage('Setup Python Environment') {
            steps {
                script {
                    // Run Docker commands using a script block
                    sh 'docker run --rm -v "${WORKSPACE}:/src" returntocorp/semgrep semgrep --config p/javascript --exclude node_modules --exclude .next --json > semgrep-report.json'
                }
            }
        }
        stage('Publish Semgrep Report') {
            steps {
                // Example of publishing a report or archiving artifacts
                echo 'Publishing Semgrep report...'
                archiveArtifacts artifacts: 'semgrep-report.json', allowEmptyArchive: true
            }
        }
    }
}
