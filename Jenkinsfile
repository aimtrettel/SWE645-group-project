pipeline {
  agent any
  environment {
    DOCKERHUB_PASS = credentials('dockerhub')
  }
  stages {
    stage("Building the Student Survey Image") {
      steps {
        script {
          checkout scm
          sh 'rm -rf *.war'
          sh 'jar -cvf Survey.war web/*'
          sh 'echo ${BUILD_TIMESTAMP}'
          sh "docker login -u aimnissley -p ${DOCKERHUB_PASS}"
          def customImage = docker.build("aimnissley/swe645:${BUILD_TIMESTAMP}")
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
