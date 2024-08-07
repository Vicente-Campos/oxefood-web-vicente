import React, { useState, useEffect } from "react";
import axios from "axios";
import InputMask from "react-input-mask";
import {
  Button,
  Container,
  Divider,
  Form,
  Icon,
  FormSelect,
  FormGroup,
  FormRadio,
} from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";
import { Link, useLocation } from "react-router-dom";
import {
  mensagemErro,
  notifyError,
  notifySuccess,
} from "../../views/util/Util";

const options = [
  { key: "ac", value: "ac", text: "Acre" },
  { key: "al", value: "al", text: "Alagoas" },
  { key: "ap", value: "ap", text: "Amapá" },
  { key: "am", value: "am", text: "Amazonas" },
  { key: "ba", value: "ba", text: "Bahia" },
  { key: "ce", value: "ce", text: "Ceará" },
  { key: "df", value: "df", text: "Distrito Federal" },
  { key: "es", value: "es", text: "Espírito Santo" },
  { key: "go", value: "go", text: "Goiás" },
  { key: "ma", value: "ma", text: "Maranhão" },
  { key: "mt", value: "mt", text: "Mato Grosso" },
  { key: "ms", value: "ms", text: "Mato Grosso do Sul" },
  { key: "mg", value: "mg", text: "Minas Gerais" },
  { key: "pa", value: "pa", text: "Pará" },
  { key: "pb", value: "pb", text: "Paraíba" },
  { key: "pr", value: "pr", text: "Paraná" },
  { key: "pe", value: "pe", text: "Pernambuco" },
  { key: "pi", value: "pi", text: "Piauí" },
  { key: "rj", value: "rj", text: "Rio de Janeiro" },
  { key: "rn", value: "rn", text: "Rio Grande do Norte" },
  { key: "rs", value: "rs", text: "Rio Grande do Sul" },
  { key: "ro", value: "ro", text: "Rondônia" },
  { key: "rr", value: "rr", text: "Roraima" },
  { key: "sc", value: "sc", text: "Santa Catarina" },
  { key: "sp", value: "sp", text: "São Paulo" },
  { key: "se", value: "se", text: "Sergipe" },
  { key: "to", value: "to", text: "Tocantins" },
];

export default function FormEntregador() {
  const { state } = useLocation();
  const [idEntregador, setIdEntregador] = useState();

  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [rg, setRg] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [foneCelular, setFoneCelular] = useState();
  const [foneFixo, setFoneFixo] = useState();
  const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
  const [valorFrete, setValorFrete] = useState();
  const [enderecoRua, setEnderecoRua] = useState();
  const [enderecoNumero, setEnderecoNumero] = useState();
  const [enderecoBairro, setEnderecoBairro] = useState();
  const [enderecoCidade, setEnderecoCidade] = useState();
  const [enderecoCep, setEnderecoCep] = useState();
  const [enderecoUf, setEnderecoUf] = useState();
  const [enderecoComplemento, setEnderecoComplemento] = useState();
  const [ativo, setAtivo] = useState(true);

  useEffect(() => {
    if (state != null && state.id != null) {
      axios
        .get("http://localhost:8081/api/entregador/" + state.id)
        .then((response) => {
          setIdEntregador(response.data.id);
          setNome(response.data.nome);
          setCpf(response.data.cpf);
          setRg(response.data.rg);
          setDataNascimento(formatarData(response.data.dataNascimento));
          setFoneCelular(response.data.foneCelular);
          setFoneFixo(response.data.foneFixo);
          setQtdEntregasRealizadas(response.data.qtdEntregasRealizadas);
          setValorFrete(response.data.valorFrete);
          setEnderecoRua(response.data.enderecoRua);
          setEnderecoNumero(response.data.enderecoNumero);
          setEnderecoBairro(response.data.enderecoBairro);
          setEnderecoCidade(response.data.enderecoCidade);
          setEnderecoCep(response.data.enderecoCep);
          setEnderecoUf(response.data.enderecoCep);
          setEnderecoComplemento(response.data.enderecoComplemento);
          setAtivo(response.data.ativo);
        });
    }
  }, [state]);

  function formatarData(dataParam) {
    if (dataParam === null || dataParam === "" || dataParam === undefined) {
      return "";
    }

    let arrayData = dataParam.split("-");
    return arrayData[2] + "/" + arrayData[1] + "/" + arrayData[0];
  }

  function salvar() {
    let entregadorRequest = {
      nome: nome,
      cpf: cpf,
      rg: rg,
      dataNascimento: dataNascimento,
      foneCelular: foneCelular,
      foneFixo: foneFixo,
      qtdEntregasRealizadas: qtdEntregasRealizadas,
      valorFrete: valorFrete,
      enderecoRua: enderecoRua,
      enderecoNumero: enderecoNumero,
      enderecoBairro: enderecoBairro,
      enderecoCidade: enderecoCidade,
      enderecoCep: enderecoCep,
      enderecoUf: enderecoUf,
      enderecoComplemento: enderecoComplemento,
      ativo: ativo,
    };

    if (idEntregador != null) {
      //Alteração:
      axios
        .put(
          "http://localhost:8081/api/entregador/" + idEntregador,
          entregadorRequest
        )
        .then((response) => {
          console.log("Entregador alterado com sucesso.");
        })
        .catch((error) => {
          console.log("Erro ao alter um entregador.");
        });
    } else {
      //Cadastro:
      axios
        .post("http://localhost:8081/api/entregador", entregadorRequest)
        .then((response) => {
          notifySuccess("Entregador cadastrado com sucesso.");
        })
        .catch((error) => {
          if (error.response) {

            console.log(error.response.data.errors[0].defaultMessage); // pegando do BeanValidation
            console.log(error.response.data.message); // pegando da exeçaõ
            notifyError(error.response.data.errors[0].defaultMessage);
          } else {
            notifyError(mensagemErro);
          }
        });
    }
  }

  return (
    <div>
      <MenuSistema />

      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          {idEntregador === undefined && (
            <h2>
              {" "}
              <span style={{ color: "darkgray" }}>
                {" "}
                Entregador &nbsp;
                <Icon name="angle double right" size="small" />{" "}
              </span>{" "}
              Cadastro
            </h2>
          )}
          {idEntregador != undefined && (
            <h2>
              {" "}
              <span style={{ color: "darkgray" }}>
                {" "}
                Entregador &nbsp;
                <Icon name="angle double right" size="small" />{" "}
              </span>{" "}
              Alteração
            </h2>
          )}

          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Form>
              <Form.Group>
                <Form.Input
                  required
                  fluid
                  label="Nome"
                  maxLength="100"
                  width={10}
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />

                <Form.Input required fluid label="CPF" width={5}>
                  <InputMask
                    required
                    mask="999.999.999-99"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </Form.Input>

                <Form.Input fluid label="RG" width={5}>
                  <InputMask
                    required
                    mask="99.999.999"
                    value={rg}
                    onChange={(e) => setRg(e.target.value)}
                  />
                </Form.Input>
              </Form.Group>

              <Form.Group>
                <Form.Input fluid label="DT Nascimento" width={6}>
                  <InputMask
                    placeholder="Ex: 20/03/1985"
                    mask="99/99/9999"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                  />
                </Form.Input>

                <Form.Input required fluid label="Fone Celular" width={6}>
                  <InputMask
                    mask="(99) 9999.9999"
                    value={foneCelular}
                    onChange={(e) => setFoneCelular(e.target.value)}
                  />
                </Form.Input>

                <Form.Input fluid label="Fone Fixo" width={6}>
                  <InputMask
                    mask="(99) 9999.9999"
                    value={foneFixo}
                    onChange={(e) => setFoneFixo(e.target.value)}
                  />
                </Form.Input>

                <Form.Input
                  fluid
                  label="QTD Entregas Realizadas"
                  width={6}
                  value={qtdEntregasRealizadas}
                  onChange={(e) => setQtdEntregasRealizadas(e.target.value)}
                ></Form.Input>
                <Form.Input
                  fluid
                  label="Valor Por Frete"
                  width={6}
                  value={valorFrete}
                  onChange={(e) => setValorFrete(e.target.value)}
                ></Form.Input>
              </Form.Group>

              <Form.Group>
                <Form.Input
                  fluid
                  label="Rua"
                  width={12}
                  value={enderecoRua}
                  onChange={(e) => setEnderecoRua(e.target.value)}
                />

                <Form.Input
                  fluid
                  label="Número"
                  width={5}
                  value={enderecoNumero}
                  onChange={(e) => setEnderecoNumero(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Input
                  fluid
                  label="Bairro"
                  width={9}
                  value={enderecoBairro}
                  onChange={(e) => setEnderecoBairro(e.target.value)}
                />

                <Form.Input
                  fluid
                  label="Cidade"
                  width={9}
                  value={enderecoCidade}
                  onChange={(e) => setEnderecoCidade(e.target.value)}
                />

                <Form.Input
                  fluid
                  label="CEP"
                  width={3}
                  value={enderecoCep}
                  onChange={(e) => setEnderecoCep(e.target.value)}
                />
              </Form.Group>

              <FormSelect
                fluid
                label="UF"
                options={options}
                placeholder="Selecione"
                value={enderecoUf}
                onChange={(e, { value }) => {
                  setEnderecoUf(value);
                }}
              />

              <Form.Input
                fluid
                label="Complemento"
                maxLength="100"
                value={enderecoComplemento}
                onChange={(e) => setEnderecoComplemento(e.target.value)}
              />

              <FormGroup inline>
                <label>Ativo</label>

                <FormRadio
                  label="Sim"
                  checked={ativo}
                  onChange={(e) => setAtivo(true)}
                />
                <FormRadio
                  label="Não"
                  checked={!ativo}
                  onChange={(e) => setAtivo(false)}
                />
              </FormGroup>
            </Form>

            <div style={{ marginTop: "4%" }}>
              <Link to={"/list-entregador"}>
                <Button
                  type="button"
                  inverted
                  circular
                  icon
                  labelPosition="left"
                  color="orange"
                >
                  Voltar
                  <Icon name="reply" />
                </Button>
              </Link>

              <Button
                inverted
                circular
                icon
                labelPosition="left"
                color="blue"
                floated="right"
                onClick={() => salvar()}
              >
                <Icon name="save" />
                Salvar
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
