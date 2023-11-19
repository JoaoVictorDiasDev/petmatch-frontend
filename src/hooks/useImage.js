import { useEffect, useState } from 'react'

const useImage = (fileName) => {
    const [image, setImage] = useState(null)

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../images/pets/${fileName}`) // change relative path to suit your needs
                setImage(response.default)
            } catch (err) {
            } finally {
            }
        }

        fetchImage()
    }, [fileName])

    return image
}

export default useImage
