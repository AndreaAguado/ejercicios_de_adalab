const getSquareArea = (side) => {
    const area = side * side;
    return area;
}
const getSquareTriangle = (base, height) => {
    const area = base * height / 2;
    return area;
}
const objectToExport = {
    getSquareArea: getSquareArea,
    getSquareTriangle: getSquareTriangle
}
export default objectToExport;