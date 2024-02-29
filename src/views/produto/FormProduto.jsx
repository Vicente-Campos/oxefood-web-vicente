import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, FormField, Icon, TextArea } from 'semantic-ui-react';

export default function FormProduto() {
    return (
        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    maxLength="100"
                                    placeholder='informe o titulo do produto'
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do produto'>
                                    <InputMask
                                        required
                                        placeholder='Informe o código do produto'
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>
                              
                            <FormField
                                label='Descrição'
                                control={TextArea}
                                placeholder='Informe a Descrição do Produto'
                                width={16}
                            />
                           
                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário'
                                    width={6}>
                                    <InputMask
                                        
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínimo em Minutos'
                                    width={6}>
                                    <InputMask
                                        maskChar={null}
                                        placeholder="30"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máxima em Minutos'
                                    width={6}
                                >
                                    <InputMask
                                        maskChar={null}
                                        placeholder="40"
                                    />
                                </Form.Input>

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Listar
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );
}
