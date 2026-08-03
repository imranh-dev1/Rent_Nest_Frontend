export async function uploadImages(files: File[]) {
    // console.log("Files:", files);

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;

    // console.log("Cloud Name:", cloudName);
    // console.log("Upload Preset:", uploadPreset);

    const uploads = files.map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset);

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            {
                method: "POST",
                body: formData,
            }
        );

        // console.log("Status:", response.status);

        const data = await response.json();
        // console.log("Cloudinary Response:", data);

        if (!response.ok) {
            throw new Error(data.error?.message || "Upload failed");
        }

        return data;
    });

    return Promise.all(uploads);
}