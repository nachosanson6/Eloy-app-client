import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import pictureService from '../../services/picture.services'
import uploadServices from '../../services/upload.services'
import ColorsForm from '../ColorsForm/ColorsForm'



const PicturesForm = ({ closeLogin }) => {

    const [newPictureForm, setNewPictureForm] = useState({
        name: "",
        photo: "",
        height: "",
        width: "",
        prize: "",
        colors: [],
        materials: [],
        newMaterial: "", // Nuevo campo para ingresar material

    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setNewPictureForm({ ...newPictureForm, [name]: value })
    }

    const handleMaterialAdd = () => {
        if (newPictureForm.newMaterial.trim() !== "") {
            const updatedForm = {
                ...newPictureForm,
                materials: [...newPictureForm.materials, newPictureForm.newMaterial],
                newMaterial: "",
            };
            setNewPictureForm(updatedForm);
        }
    };

    const handleMaterialRemove = (index) => {
        const updatedMaterials = [...newPictureForm.materials];
        updatedMaterials.splice(index, 1);
        setNewPictureForm({ ...newPictureForm, materials: updatedMaterials });
    };

    const handleFromSubmit = e => {
        e.preventDefault();
        pictureService
            .createPicture(newPictureForm)
            .then(() => {
                closeLogin()
                navigate('/picturesGallery')
            })
            .catch(err => console.log(err))
    }

    const handleFileUpload = (e) => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])
        const { name } = e.target

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setNewPictureForm({ ...newPictureForm, [name]: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h2>Nuevo cuadro</h2>

            <Form onSubmit={handleFromSubmit}>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Foto</Form.Label>
                    <Form.Control type="file" name='photo' onChange={handleFileUpload} />
                </Form.Group>

                <Row>

                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicHeight">
                            <Form.Label>Alto</Form.Label>
                            <Form.Control type="text" value={newPictureForm.height} onChange={handleInputChange} name='height' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicWidth">
                            <Form.Label>Ancho</Form.Label>
                            <Form.Control type="text" value={newPictureForm.width} onChange={handleInputChange} name='width' />
                        </Form.Group>
                    </Col>
                    <Form.Group className="mb-3" controlId="formBasicMaterials">
                        <Form.Label>Materiales</Form.Label>
                        <Row>
                            <Col>
                                <Form.Control
                                    type="text"
                                    value={newPictureForm.newMaterial}
                                    onChange={(e) => setNewPictureForm({ ...newPictureForm, newMaterial: e.target.value })}
                                />
                            </Col>
                            <Col>
                                <Button variant="secondary" onClick={handleMaterialAdd}>
                                    +
                                </Button>
                            </Col>
                        </Row>
                        {newPictureForm.materials.map((material, index) => (
                            <Row key={index} className="mt-2">
                                <Col>{material}</Col>
                                <Col>
                                    <Button variant="danger" onClick={() => handleMaterialRemove(index)}>
                                        -
                                    </Button>
                                </Col>
                            </Row>
                        ))}
                    </Form.Group>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPrize">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="text" value={newPictureForm.prize} onChange={handleInputChange} name='prize' />
                        </Form.Group>
                    </Col>
                </Row>
                <ColorsForm newPictureForm={newPictureForm} setNewPictureForm={setNewPictureForm} />

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}
export default PicturesForm