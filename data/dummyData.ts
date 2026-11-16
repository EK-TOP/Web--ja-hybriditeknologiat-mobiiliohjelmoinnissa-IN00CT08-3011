import { RowData } from '../types/Rowdata';

const dummyData: RowData[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Title ${i + 1}`,
    description: `Description for item ${i + 1}`,
    image: `https://via.placeholder.com/150?text=Image+${i + 1}`
}))

export default dummyData;