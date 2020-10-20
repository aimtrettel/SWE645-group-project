pipeline {
  agent any
  environment {
    DOCKERHUB_PASS = credentials('dockerhub')
  }
  stages {
    stage("Checkout") {
      steps {
        checkout scm
      }
    }
    stage("Building the Student Survey Image") {
      steps {
        script {
          sh 'rm -rf *.war'
          sh 'jar -cvf Survey.war web/*'
          sh "docker login -u aimnissley -p ${DOCKERHUB_PASS_PSW}"
          def customImage = docker.build("aimnissley/swe645:${BUILD_NUMBER}")
        }
      }
    }
    stage("Pushing Image to DockerHub") {
      steps {
        script {
          sh 'docker push aimnissley/swe645:${BUILD_TIMESTAMP}'
        }
      }
    }
    stage("Deploying to Rancher as single pod") {
      steps {
        sh 'kubectl set image deployment/surveypipeline surveypipeline=aimnissley/swe645:${BUILD_TIMESTAMP} -n jenkins-pipeline'
      }
    }
    stage("Deploying to Rancher as with load balancer") {
      steps {
        sh 'kubectl set image deployment/survey645-lb survey645-lb=aimnissley/swe645:${BUILD_TIMESTAMP} -n jenkins-pipeline'
      }
    }
  }
}
