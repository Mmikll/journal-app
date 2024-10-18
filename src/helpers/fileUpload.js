

export const fileUpload = async(file) => {
    if (!file) throw new Error("There is no file to upload")

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dmv2u7cwt/upload'

    const formData = new FormData()

    formData.append('file', file)
    formData.append('upload_preset', 'react-journal')

    try {
        
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        })

        if (!resp.ok)throw new Error("Couldn't upload")

        const cloudResp = await resp.json()

        return cloudResp.secure_url

    } catch (err) {
        console.log(err)
        throw new Error("Error uploading file to cloudinary")
    }

}

