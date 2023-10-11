import { Form } from "react-bootstrap";
import { getUpdatedMaterials } from "../../utils/materials.util";



const MaterialForm = ({ newJewelryForm, setNewJewelryForm }) => {

    const handleMaterialsChange = (e) => {
        const { checked, value } = e.target
        const materials = getUpdatedMaterials(checked, value, newJewelryForm.materials)

        setNewJewelryForm({ ...newJewelryForm, materials });
    };

    return (


        ['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3 ">
                <Form.Check
                    inline
                    label="Madera"
                    type={type}
                    id={`inline-${type}-1`}
                    value='Madera'
                    checked={newJewelryForm.materials.includes('Madera')}
                    onChange={handleMaterialsChange}
                />
                <Form.Check
                    inline
                    label="Arcilla"
                    type={type}
                    id={`inline-${type}-3`}
                    value='Arcilla'
                    checked={newJewelryForm.materials.includes('Arcilla')}
                    onChange={handleMaterialsChange}
                />
                <Form.Check
                    inline
                    label="Metal"
                    type={type}
                    id={`inline-${type}-3`}
                    value='Metal'
                    checked={newJewelryForm.materials.includes('Metal')}
                    onChange={handleMaterialsChange}
                />
                <Form.Check
                    inline
                    label="Arcilla polimérica"
                    type={type}
                    id={`inline-${type}-3`}
                    value='Arcilla polimérica'
                    checked={newJewelryForm.materials.includes('Arcilla polimérica')}
                    onChange={handleMaterialsChange}
                />

            </div>
        ))
    )
}
export default MaterialForm