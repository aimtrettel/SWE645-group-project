pipeline {
  agent any
  environment {
    registry = "aimnissley/swe645"
    registryCredential = 'dockerhub'
    frontendImage = ''
    backendImage = ''
  }
  stages {
    stage("Building the Backend Image") {
          steps {
            script {
              checkout scm
              sh 'cd Backend'
              sh 'rm -rf *.war'
              sh 'jar -cvf Backend.war content/*'
              backendImage = docker.build registry + ":B:$BUILD_NUMBER"
              sh 'cd ..'
            }
          }
        }
    stage("Building the Frontend Image") {
      steps {
        script {
          sh 'cd Frontend'
          sh 'rm -rf *.war'
          sh 'jar -cvf Frontend.war src/*'
          frontendImage = docker.build registry + ":F:$BUILD_NUMBER"
        }
      }
    }
    stage("Pushing Images to DockerHub") {
      steps {
        script {
          docker.withRegistry( '', registryCredential ) {
            backendImage.push()
            frontendImage.push()
          }
        }
      }
    }
    stage("Deploying to Rancher") {
      steps {
        sh 'kubectl set image deployment/swe645 swe645=aimnissley/swe645:B:${BUILD_NUMBER} --kubeconfig /home/Jenkins/.kube/config'
      }
    }
  }
}
