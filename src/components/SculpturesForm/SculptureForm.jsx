import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import uploadServices from '../../services/upload.services'
import sculptureService from '../../services/sculpture.services'
import MaterialForm from '../SculptureMaterialsForm/SculptureMaterialsForm'


const SculptureForm = ({ closeLogin }) => {

    const navigate = useNavigate()


    const handleInputChange = e => {
        const { value, name } = e.target
        setNewSculptureForm({ ...newSculptureForm, [name]: value })
    }

    const handleFromSubmit = e => {
        e.preventDefault();
        sculptureService
            .createSculpture(newSculptureForm)
            .then(() => {
                closeLogin()
                navigate('/sculpturesGallery')
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
                setNewSculptureForm({ ...newSculptureForm, [name]: data.cloudinary_url })

            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h2>Nueva escultura</h2>

            <Form onSubmit={handleFromSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={newSculptureForm.name} onChange={handleInputChange} name='name' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image1">
                    <Form.Label>Foto 1</Form.Label>
                    <Form.Control type="file" name='photo' onChange={handleFileUpload} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image2">
                    <Form.Label>Foto 2</Form.Label>
                    <Form.Control type="file" name='photo2' onChange={handleFileUpload} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image3">
                    <Form.Label>Foto 3</Form.Label>
                    <Form.Control type="file" name='photo3' onChange={handleFileUpload} />
                </Form.Group>

                <Row>

                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicHeight">
                            <Form.Label>Alto</Form.Label>
                            <Form.Control type="text" value={newSculptureForm.height} onChange={handleInputChange} name='height' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicWidth">
                            <Form.Label>Ancho</Form.Label>
                            <Form.Control type="text" value={newSculptureForm.width} onChange={handleInputChange} name='width' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPrize">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="text" value={newSculptureForm.prize} onChange={handleInputChange} name='prize' />
                        </Form.Group>
                    </Col>
                </Row>
                <MaterialForm newSculptureForm={newSculptureForm} setNewSculptureForm={setNewSculptureForm} />

                <Form.Group className="mb-3" controlId="formBasicSold">
                    <Form.Check
                        type="checkbox"
                        label="¿Vendida?"
                        checked={newSculptureForm.sold}
                        onChange={(e) => setNewSculptureForm({ ...newSculptureForm, sold: e.target.checked })}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}
export default SculptureForm