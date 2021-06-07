module.exports = {
    // /user/check
    check: {
        tags: ["Sebelum Masuk"],
        summary: "Untuk mengecek kondisi prasayarat agen sebelum OTP",
        description: "cek apakah user sudah di `whitelist`, isi `data pemilik`, isi `data toko`, ada `versi baru` atau ada `perbaikan aplikasi`",
        body: {
            type: "object",
            required: ["nohp", "imei", "playerId", "version"],
            properties: {
                nohp: {
                    type: "string",
                    pattern: "^(0[0-9]*)$",
                    example: "0867543245",
                    maxLength: 13,
                    minLength: 10,
                },
                imei: { type: "string" },
                playerId: { type: "string" },
                version: { type: "string", description: "Versi aplikasi user" },
            },
        },
    }
}