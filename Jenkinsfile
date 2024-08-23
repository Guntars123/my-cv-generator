pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from Git
                git 'https://github.com/Guntars123/my-cv-generator.git'
            }
        }

        stage('Semgrep Analysis') {
            steps {
                script {
                    // Run Semgrep analysis using Docker
                    docker.image('returntocorp/semgrep').inside {
                        sh 'semgrep --config p/javascript --exclude node_modules --exclude .next --json > semgrep-results.json'
                    }
                }
            }
        }

        stage('Publish Semgrep Report') {
            steps {
                // Archive the Semgrep results
                archiveArtifacts artifacts: 'semgrep-results.json'

                // Optionally, you can use a plugin or custom script to publish results
                // e.g., publishChecks or other reporting tools
            }
        }
    }
}