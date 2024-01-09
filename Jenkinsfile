pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
          script {
           // The below will clone your repo and will be checked out to master branch by default.
           git credentialsId: '6a1ee97c-085b-4d61-82db-1a221c033910', url: 'https://github.com/KanaKBhuvaGit/cypress_framework', branch: 'main'
           // Do a ls -lart to view all the files are cloned. It will be clonned. This is just for you to be sure about it.
           // sh "ls -lart ./*" 
           // List all branches in your repo. 
           // sh "git branch -a"
           // Checkout to a specific branch in your repo.
           // sh(script: 'git checkout main')
           //   sh "git checkout main"
          }
      }
    }
    
    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }
    
    stage('Verif Cypress Version') {
      steps {
        bat 'npm run cy:version'
      }
    }

    stage('Run Tests') {
      steps {
          bat 'npm run cy:run'
      }
    }
  }

  post {
    // shutdown the server running in the background or appreciation
    always {
      echo 'Jordar .........'
      archiveArtifacts allowEmptyArchive: true, artifacts: 'cypress/videos/**, cypress/screenshots/**, cypress/results/**, mochawesome-report/**, mochawesome.json, allure-results/**, allure-report/**', followSymlinks: false, onlyIfSuccessful: true
    }
  }
}