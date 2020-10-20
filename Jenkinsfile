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
    stage("Deploying to Rancher as single pod") {
      steps {
        sh 'kubectl set image deployment/surveypipeline surveypipeline=aimnissley/swe645:${BUILD_NUMBER} -n jenkins-pipeline'
      }
    }
    stage("Deploying to Rancher as with load balancer") {
      steps {
        sh 'kubectl set image deployment/survey645-lb survey645-lb=aimnissley/swe645:${BUILD_NUMBER} -n jenkins-pipeline'
      }
    }
  }
}
