import { Form } from "react-bootstrap";
import { getUpdatedColors } from "../../utils/colors.util";


const ColorsForm = ({ newPictureForm, setNewPictureForm }) => {

    const handleColorsChange = (e) => {
        const { checked, value } = e.target
        const colors = getUpdatedColors(checked, value, newPictureForm.colors)

        setNewPictureForm({ ...newPictureForm, colors });
    };

    return (


        ['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3 ">
                <Form.Check
                    inline
                    label="Blanco"
                    type={type}
                    id={`inline-${type}-1`}
                    value='Blanco'
                    checked={newPictureForm.colors.includes('Blanco')}
                    onChange={handleColorsChange}
                />
                <Form.Check
                    inline
                    label="Negro"
                    type={type}
                    id={`inline-${type}-2`}
                    value='Negro'
                    checked={newPictureForm.colors.includes('Negro')}
                    onChange={handleColorsChange}
                />
                <Form.Check
                    inline
                    label="Rojo"
                    type={type}
                    id={`inline-${type}-3`}
                    value='Rojo'
                    checked={newPictureForm.colors.includes('Rojo')}
                    onChange={handleColorsChange}
                />
                <Form.Check
                    inline
                    label="Verde"
                    type={type}
                    id={`inline-${type}-4`}
                    value='Verde'
                    checked={newPictureForm.colors.includes('Verde')}
                    onChange={handleColorsChange}
                />
                <Form.Check
                    inline
                    label="Azul"
                    type={type}
                    id={`inline-${type}-5`}
                    value='Azul'
                    checked={newPictureForm.colors.includes('Azul')}
                    onChange={handleColorsChange}
                />
                <Form.Check
                    inline
                    label="Amarillo"
                    type={type}
                    id={`inline-${type}-6`}
                    value='Amarillo'
                    checked={newPictureForm.colors.includes('Amarillo')}
                    onChange={handleColorsChange}
                />
                <Form.Check
                    inline
                    label="Gris"
                    type={type}
                    id={`inline-${type}-7`}
                    value='Gris'
                    checked={newPictureForm.colors.includes('Gris')}
                    onChange={handleColorsChange}
                />
                <Form.Check
                    inline
                    label="Naranja"
                    type={type}
                    id={`inline-${type}-8`}
                    value='Naranja'
                    checked={newPictureForm.colors.includes('Naranja')}
                    onChange={handleColorsChange}
                />
                <Form.Check
                    inline
                    label="Rosa"
                    type={type}
                    id={`inline-${type}-9`}
                    value='Rosa'
                    checked={newPictureForm.colors.includes('Rosa')}
                    onChange={handleColorsChange}
                />
                <Form.Check
                    inline
                    label="Marrón"
                    type={type}
                    id={`inline-${type}-10`}
                    value='Marrón'
                    checked={newPictureForm.colors.includes('Marron')}
                    onChange={handleColorsChange}
                />

            </div>
        ))
    )
}
export default ColorsForm