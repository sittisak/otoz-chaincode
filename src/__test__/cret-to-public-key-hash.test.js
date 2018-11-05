const cretToPublicKeyHash = require('../cret-to-public-key-hash')


describe('Test utils', () => {

    it('cret to publicKey hash', () => {
        const user1PubilicKey = '25045fc290e25c4040f645354d339be85b0009641aa3197ef6ed70474ad24104'
        const user1Cert = '-----BEGIN CERTIFICATE-----\nMIICjzCCAjWgAwIBAgIUe12/sKIhkWjrzK0xA8M6u3yg9FAwCgYIKoZIzj0EAwIw\nczELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNh\nbiBGcmFuY2lzY28xGTAXBgNVBAoTEG9yZzEuZXhhbXBsZS5jb20xHDAaBgNVBAMT\nE2NhLm9yZzEuZXhhbXBsZS5jb20wHhcNMTgxMDMxMDQxNTAwWhcNMTkxMDMxMDQy\nMDAwWjBCMTAwDQYDVQQLEwZjbGllbnQwCwYDVQQLEwRvcmcxMBIGA1UECxMLZGVw\nYXJ0bWVudDExDjAMBgNVBAMTBXVzZXIxMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcD\nQgAEjEtPC9UqpT0kAm6/wlgj8nrYWqn5nDhZsZBIvfoX6kjpZTolcc1ldB2EoctA\niEWqo16DNGFjVOQ4flER8n3DXKOB1zCB1DAOBgNVHQ8BAf8EBAMCB4AwDAYDVR0T\nAQH/BAIwADAdBgNVHQ4EFgQU0lgXlgQgFh7c6RTJR7MEwb9H8dEwKwYDVR0jBCQw\nIoAgQjmqDc122u64ugzacBhR0UUE0xqtGy3d26xqVzZeSXwwaAYIKgMEBQYHCAEE\nXHsiYXR0cnMiOnsiaGYuQWZmaWxpYXRpb24iOiJvcmcxLmRlcGFydG1lbnQxIiwi\naGYuRW5yb2xsbWVudElEIjoidXNlcjEiLCJoZi5UeXBlIjoiY2xpZW50In19MAoG\nCCqGSM49BAMCA0gAMEUCIQCsgR1+tNwrqddRnG2ry4TqLTc91a/6TrFo0ORCavaF\nzwIgSFiy7iu9aC96N4CV15gHzyMjKmiKAEb7YDuK3prWj0s=\n-----END CERTIFICATE-----\n'
        const expectResolt = cretToPublicKeyHash(user1Cert)
        expect(expectResolt).toEqual(user1PubilicKey)
    })

})