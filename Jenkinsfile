pipeline {
  agent any
    
  tools {nodejs "NodeJs"
        }
    
  stages {
        
    stage('Git') {
      steps {
       echo 'https://github.com/rashmib09/react-genkins.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
   
  }
}