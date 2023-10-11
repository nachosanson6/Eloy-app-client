export const getUpdatedColors = (checked, value, colors) => {

    const colorsCopy = [...colors];

    if (checked) {
        colorsCopy.push(value);
    } else {
        const index = colorsCopy.indexOf(value);
        if (index !== -1) {
            colorsCopy.splice(index, 1);
        }
    }

    return colorsCopy
}