pipeline {
  agent any
  environment {
    registry = "aimnissley/swe645"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  stages {
    stage("Building the Student Survey Image") {
      steps {
        script {
          checkout scm
          sh 'rm -rf *.war'
          sh 'jar -cvf Survey.war web/*'
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage("Pushing Image to DockerHub") {
      steps {
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage("Deploying to Rancher") {
      steps {
        sh 'kubectl set image deployment/swe645 swe645=aimnissley/swe645:${BUILD_NUMBER} --kubeconfig /home/Jenkins/.kube/config'
      }
    }
  }
}
