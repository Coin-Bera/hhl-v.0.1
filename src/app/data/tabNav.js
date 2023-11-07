import ImageGrid from "../components/ImageGrid";
import { gridImageData, gridImageBackendData, gridImageCMSData, gridImageDatabaseData } from "./gridImage";

export const tabData = [
    {
        label: "Web3",
        content: <ImageGrid bgColor="#232323" border="#232323" data={gridImageCMSData} />
    },
    {
        label: "Infrastructure",
        content: <ImageGrid bgColor="#232323" border="#232323" data={gridImageDatabaseData} />
    },
    {
        label: "Front end",
        content: <ImageGrid bgColor="#232323" border="#232323" data={gridImageData} />,
    },
    {
        label: "Backend",
        content: <ImageGrid bgColor="#232323" border="#232323" data={gridImageBackendData} />
    }
]