import ImageGrid from "../components/ImageGrid";
import { gridImageData, gridImageBackendData, gridImageCMSData, gridImageDatabaseData } from "./gridImage";

export const tabData = [
    {
        label: "Web3",
        content: <ImageGrid bgColor="#232323" border="#232323" data={gridImageCMSData} />
    },
    {
        label: "Front End",
        content: <ImageGrid bgColor="#232323" border="#232323" data={gridImageData} />,
    },
    {
        label: "Backend",
        content: <ImageGrid bgColor="#232323" border="#232323" data={gridImageBackendData} />
    },
    {
        label: "Infrastructure",
        content: <ImageGrid bgColor="#232323" border="#232323" data={gridImageDatabaseData} />
    }
]