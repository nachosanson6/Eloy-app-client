import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProviderWrapper } from './contexts/auth.context.jsx'
import { ContactModalWrapper } from './contexts/contactModal.context.jsx'
import { ModalWrapper } from './contexts/modal.context.jsx'
import { ProductInformationWrapper } from './contexts/productInformation.context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AuthProviderWrapper>
      <ProductInformationWrapper>
        <ContactModalWrapper>
          <ModalWrapper>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </ModalWrapper>
        </ContactModalWrapper>
      </ProductInformationWrapper>
    </AuthProviderWrapper>
  </Router >
)
