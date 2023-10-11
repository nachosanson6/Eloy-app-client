import { Form } from "react-bootstrap";
import { getUpdatedMaterials } from "../../utils/materials.util";



const MaterialForm = ({ newSculptureForm, setNewSculptureForm }) => {

    const handleMaterialsChange = (e) => {
        const { checked, value } = e.target
        const materials = getUpdatedMaterials(checked, value, newSculptureForm.materials)

        setNewSculptureForm({ ...newSculptureForm, materials });
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
                    checked={newSculptureForm.materials.includes('Madera')}
                    onChange={handleMaterialsChange}
                />
                <Form.Check
                    inline
                    label="Piedra"
                    type={type}
                    id={`inline-${type}-2`}
                    value='Piedra'
                    checked={newSculptureForm.materials.includes('Piedra')}
                    onChange={handleMaterialsChange}
                />
                <Form.Check
                    inline
                    label="Arcilla"
                    type={type}
                    id={`inline-${type}-3`}
                    value='Arcilla'
                    checked={newSculptureForm.materials.includes('Arcilla')}
                    onChange={handleMaterialsChange}
                />

            </div>
        ))
    )
}
export default MaterialForm