"use client"
import { CartContext } from '@/context/cart/CartContext'
import React, { useContext } from 'react'
import {
    BackgroundOverlay,
    CheckoutButton,
    Empty,
    ItemsWrapper,
    Modal,
    ModalHeader,
    RemoveButton,
    TotalLabel,
    TotalPrice,
    TotalWrapper
} from './modalCartStyle'
import { Container } from '@/components/containers/page/pageContainerStyle'
import { createPortal } from 'react-dom'
import CartModalSVG from '@/components/svg/cart-modal/CartModalSVG'
import convertNumberToMoney from '@/helpers/NumberToMoney'
import ProductInCart from '@/components/product-cart/ProductInCart'

const ModalCart = () => {
    const {
        itemsList,
        isModalOpen,
        handleModalDisplay,
        totalPrice,
        removeCart
    } = useContext(CartContext)

    const handleCloseModal = (event: React.MouseEvent) => {
        event.stopPropagation()
        if (event.target === event.currentTarget) {
            handleModalDisplay()
        }
    }

    return (
        createPortal(
            <>
                {isModalOpen ?
                    <BackgroundOverlay onClick={(e) => handleCloseModal(e)}>
                        <Container>
                            <Modal>
                                {itemsList.length === 0 ?
                                    <>
                                        <CartModalSVG />
                                        <Empty>
                                            Your
                                            <strong>cart</strong>
                                            is empty 🧐
                                        </Empty>
                                    </>
                                    :
                                    <>
                                        <ModalHeader>
                                            <h6>
                                                CART({itemsList.length})
                                            </h6>
                                            <RemoveButton handleClick={removeCart}>
                                                Remove all
                                            </RemoveButton>
                                        </ModalHeader>
                                        <ItemsWrapper>
                                            {itemsList.map((item) => {
                                                return <ProductInCart key={item.productName} item={item} />
                                            })}
                                        </ItemsWrapper>
                                        <TotalWrapper>
                                            <TotalLabel>TOTAL</TotalLabel>
                                            <TotalPrice>{convertNumberToMoney(totalPrice)}</TotalPrice>
                                        </TotalWrapper>
                                        <CheckoutButton handleClick={() => { }} color='primary'>CHECKOUT</CheckoutButton>
                                    </>
                                }
                            </Modal>
                        </Container>
                    </BackgroundOverlay>
                    :
                    null
                }
            </>,
            document.body)
    )
}

export default ModalCart