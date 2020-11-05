pipeline {
  agent any
    
  tools {nodejs "NodeJs",jdk 'JDK 1.8'}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/rashmib09/react-genkins.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
   
  }
}