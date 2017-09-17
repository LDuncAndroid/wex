export function generateSign(data, key) {
    return crypto.createHmac("sha512", key).update(new Buffer(data)).digest("hex").toString();
}
