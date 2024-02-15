import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import uploadServices from '../../services/upload.services'
import jewelryService from '../../services/jewelry.services'
import { ModalContext } from '../../contexts/modal.context'
import { ProductInformationContext } from '../../contexts/productInformation.context'


const JewelryForm = () => {

    const { setShowModal, isEdition, showModal } = useContext(ModalContext)
    const { newJewelryForm, setNewJewelryForm } = useContext(ProductInformationContext)

    const navigate = useNavigate()


    const handleInputChange = e => {
        const { value, name } = e.target
        setNewJewelryForm({ ...newJewelryForm, [name]: value })
    }

    const handleMaterialAdd = () => {
        if (newJewelryForm.newMaterial.trim() !== "") {
            const updatedForm = {
                ...newJewelryForm,
                materials: [...newJewelryForm.materials, newJewelryForm.newMaterial],
                newMaterial: "",
            };
            setNewJewelryForm(updatedForm);
        }
    };

    const handleMaterialRemove = (index) => {
        const updatedMaterials = [...newJewelryForm.materials];
        updatedMaterials.splice(index, 1);
        setNewJewelryForm({ ...newJewelryForm, materials: updatedMaterials });
    };

    const handleFromSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isEdition) {
                await jewelryService.editJewelry(newJewelryForm);
                setShowModal(false);  // Cerrar la modal después de editar
                window.location.reload();

            } else {
                await jewelryService.createJewelry(newJewelryForm);
                setShowModal(false);  // Cerrar la modal después de crear
                console.log("cierra la modal!!!!")
                // Navegar a la galería después de la creación
                navigate('/jewelryGallery');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleFileUpload = (e) => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])
        const { name } = e.target

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setNewJewelryForm({ ...newJewelryForm, [name]: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h2>Nueva bisutería</h2>

            <Form onSubmit={handleFromSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={newJewelryForm.name} onChange={handleInputChange} name='name' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image1">
                    <Form.Label>Foto </Form.Label>
                    <Form.Control type="file" name='photo' onChange={handleFileUpload} />
                </Form.Group>

                <Row>

                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPrize">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="text" value={newJewelryForm.prize} onChange={handleInputChange} name='prize' />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicMaterials">
                    <Form.Label>Materiales</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                value={newJewelryForm.newMaterial}
                                onChange={(e) => setNewJewelryForm({ ...newJewelryForm, newMaterial: e.target.value })}
                            />
                        </Col>
                        <Col>
                            <Button variant="secondary" onClick={handleMaterialAdd}>
                                +
                            </Button>
                        </Col>
                    </Row>
                    {newJewelryForm.materials.map((material, index) => (
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

                <Form.Group className="mb-3" controlId="formBasicSold">
                    <Form.Check
                        type="checkbox"
                        label="¿Vendida?"
                        checked={newJewelryForm.sold}
                        onChange={(e) => setNewJewelryForm({ ...newJewelryForm, sold: e.target.checked })}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}
export default JewelryForm