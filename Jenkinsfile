pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository and branch
                git url: 'https://github.com/Guntars123/my-cv-generator.git', branch: 'main'
            }
        }
        stage('Setup Python Environment') {
            steps {
                script {
                    // Run Docker commands using a script block
                    docker run --rm -v /var/lib/jenkins/workspace/Semgrep - test:/src returntocorp/semgrep semgrep --config .semgrep.yml --exclude node_modules --exclude .next --json
                }
            }
        }
        stage('Publish Semgrep Report') {
            steps {
                // Example of publishing a report or archiving artifacts
                echo 'Publishing Semgrep report...'
                // Uncomment and modify the following line if needed:
                // archiveArtifacts artifacts: '**/semgrep-report.json', allowEmptyArchive: true
            }
        }
    }
}