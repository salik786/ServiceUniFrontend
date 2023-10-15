import { useDropzone } from "react-dropzone";
import styles from "./Home.module.css";
export default function Uploader() {
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
    } = useDropzone();
    return (
        <div className={styles.container}>
            <div className={styles.dropzone} {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop file(s) here ...</p>
                ) : (
                    <p>Drag and drop file(s) here, or click to select files</p>
                )}
            </div>
        </div>
    );
}