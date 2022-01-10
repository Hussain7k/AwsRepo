pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/Hussain7k/AwsRepo.git'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    

    
    stage('Deploying') {
      steps {
        sh 'node app.js'
      }
    }
  }
}
