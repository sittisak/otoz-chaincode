const jsrsasign = require('jsrsasign')
const { sha3_256 } = require('js-sha3')


const cretToPublicKeyHash = (cret) => {

    const normalizeX509 = (raw) => {
        const regex = /(-----\s*BEGIN ?[^-]+?-----)([\s\S]*)(-----\s*END ?[^-]+?-----)/
        let matches = raw.match(regex)
        if (!matches || matches.length !== 4) {
            throw new Error('Failed to find start line or end line of the certificate.')
        }
    
        // remove the first element that is the whole match
        matches.shift()
        // remove LF or CR
        matches = matches.map((element) => {
            return element.trim()
        })
    
        // make sure '-----BEGIN CERTIFICATE-----' and '-----END CERTIFICATE-----' are in their own lines
        // and that it ends in a new line
        return matches.join('\n') + '\n'
    }

    const normalizedCert = normalizeX509(cret)
    const x = new jsrsasign.X509()
    x.readCertPEM(normalizedCert)
    const publicKey = x.getPublicKeyHex()
    const publicKeyHash = sha3_256(publicKey)
    return publicKeyHash
}

module.exports = cretToPublicKeyHash