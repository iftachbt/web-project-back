pipeline {
    agent any

    environment {
        DOCKER_HUB_REPO = 'iftachbt/web-project'
        DOCKER_IMAGE_NAME = 'web-project'
        DOCKER_IMAGE_TAG = 'latest'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Build Docker image
                    sh 'docker build -t $DOCKER_IMAGE_NAME .'
                }
            }
        }

        stage('Tag') {
            steps {
                script {
                    // Tag Docker image
                    sh "docker tag $DOCKER_IMAGE_NAME $DOCKER_HUB_REPO:$DOCKER_IMAGE_TAG"
                }
            }
        }

        stage('Push') {
            steps {
                script {
                    // Push Docker image to Docker Hub
                    sh "docker push $DOCKER_HUB_REPO:$DOCKER_IMAGE_TAG"
                }
            }
        }
    }

    post {
        always {
            // Clean up: delete the local Docker image
            cleanWs()
            sh "docker rmi $DOCKER_IMAGE_NAME"
        }
    }
}
