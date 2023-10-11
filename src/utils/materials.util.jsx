export const getUpdatedMaterials = (checked, value, colors) => {

    const materialsCopy = [...colors];

    if (checked) {
        materialsCopy.push(value);
    } else {
        const index = materialsCopy.indexOf(value);
        if (index !== -1) {
            materialsCopy.splice(index, 1);
        }
    }

    return materialsCopy
}