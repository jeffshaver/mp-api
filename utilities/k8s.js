const k8s = require('k8s')
const KUBERNETES_TOKEN = process.env.KUBERNETES_TOKEN
const kubeApi = k8s.api({
  auth: {
    token: KUBERNETES_TOKEN
  },
  endpoint: 'https://oso-master.ajdc.net:8443',
  strictSSL: false,
  version: '/api/v1'
})

module.exports = kubeApi