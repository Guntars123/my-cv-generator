stage('Semgrep Analysis') {
    steps {
        script {
            sh 'pip install semgrep'
            sh 'semgrep --config "$SEMGREP_CONFIG" --exclude node_modules --exclude .next --json > semgrep-report.json'
        }
    }
}