import { DropzoneArea } from 'material-ui-dropzone'
import React, { useEffect, useState } from 'react'

export default function Dropzone(props) {
    const [file, setFile] = useState([]);

    useEffect(() => {
        const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
            // Do whatever you want with the file contents
            props.setText(reader.result)
        }
        if (file[0]) reader.readAsBinaryString(file[0]);
    }, [file])

    return (
        <div>
            <DropzoneArea
                showPreviews={false}
                showPreviewsInDropzone={false}
                onChange={files => setFile(files)}
            />
        </div>
    )
}
