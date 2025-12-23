pipeline {
  agent any

  stages {

    stage('Terraform Security Scan') {
      steps {
        bat '''
          dir
          C:\\trivy\\trivy.exe config terraform
        '''
      }
    }

    stage('Terraform Plan') {
      steps {
        bat '''
          cd terraform
          terraform init
          terraform plan
        '''
      }
    }
  }
}
