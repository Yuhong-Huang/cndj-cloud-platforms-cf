import cfenv from 'cfenv'

const appEnv = cfenv.getAppEnv({
    vcapFile: 'vcap.json'
})

const { app: { port } } = appEnv

const { uri: connectionString, sslcert: cert, sslrootcert: ca } = appEnv.getServiceCreds('fortune-cookies-db')

export default {
    app: {
        port
    },
    postgres: {
        connectionString,
        ssl: (cert && ca) ? { cert, ca } : false
    }
}
