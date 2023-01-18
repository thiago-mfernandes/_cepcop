import { CardContainer } from '../../../components/Card/styles'
import { SegurancaDados } from './SegurancaDados'
import {
  BotaoFormNovoUsuario,
  Container,
  ContainerInput,
  ContainerOptionsSelect,
  ContainerTelefone,
  ListaTelefones,
  OpcoesSecao,
  SpanStatus,
  TituloSecao,
} from './styles'

import { ChangeEvent, FormEvent, useState } from 'react'
import { Phone, Trash } from 'phosphor-react'

import relacaoParentesco from '../../../data/inputRelacaoParentesco.json'
import escolaridade from '../../../data/inputEscolaridade.json'

export function CadastroUsuario() {
  const [listaTelefones, setListaTelefones] = useState<string[]>([])
  const [novoTelefone, setNovoTelefone] = useState('')

  function atualizarLista(event: FormEvent) {
    event.preventDefault()
    setListaTelefones([...listaTelefones, novoTelefone])
    setNovoTelefone('')
  }

  function handleAdicionarNovoTelefone(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setNovoTelefone(event.target.value)
  }

  function handleDeletarNumero(numeroDeletado: string) {
    const listaSemComentarioDeletado = listaTelefones.filter((telefone) => {
      return telefone !== numeroDeletado
    })
    setListaTelefones(listaSemComentarioDeletado)
  }

  return (
    <div>
      <SegurancaDados />
      <Container>
        <CardContainer>
          <form action="">
            <section>
              <TituloSecao>
                <h2>Dados Pessoais</h2>
              </TituloSecao>

              <OpcoesSecao>
                <ContainerInput>
                  <label htmlFor="nome-completo">
                    Nome Completo
                    <SpanStatus statusColor="obrigatorio"> *</SpanStatus>
                  </label>
                  <input
                    aria-describedby="nome-completo"
                    name="nome-completo"
                    placeholder="Informe seu nome"
                    type="text"
                    required
                  />
                  <p className="msg-adicional"></p>
                </ContainerInput>

                <ContainerInput>
                  <label htmlFor="email">
                    Email<SpanStatus statusColor="obrigatorio"> *</SpanStatus>
                  </label>
                  <input
                    type="email"
                    name="email"
                    aria-describedby="emailHelp"
                    required
                    placeholder="seunome@dominio.com"
                  />
                  <p className="msg-adicional"></p>
                </ContainerInput>

                <ContainerInput>
                  <label htmlFor="cpf">
                    CPF
                    <SpanStatus statusColor="opcional"> (opcional)</SpanStatus>
                  </label>
                  <input
                    type="text"
                    name="cpf"
                    aria-describedby="textHelp"
                    placeholder="000.000.000-00"
                  />
                  <p className="msg-adicional"></p>
                </ContainerInput>

                <ContainerTelefone>
                  <div>
                    <h2>
                      Telefones
                      <SpanStatus statusColor="obrigatorio"> *</SpanStatus>
                    </h2>
                    <ListaTelefones>
                      {listaTelefones.map((telefone, index) => (
                        <li key={index}>
                          <div>
                            <Phone size={16} />
                            {telefone}
                          </div>
                          <Trash
                            size={16}
                            onClick={(e) => handleDeletarNumero(telefone)}
                          />
                        </li>
                      ))}
                    </ListaTelefones>

                    <div>
                      <label>
                        Telefone
                        <SpanStatus statusColor="obrigatorio"> *</SpanStatus>
                      </label>
                      <input
                        id="inputTelefone"
                        type="text"
                        name="telefone[]"
                        aria-describedby="textHelp"
                        placeholder="(00)00000-00000"
                        value={novoTelefone}
                        onChange={handleAdicionarNovoTelefone}
                      />
                      <button type="button" onClick={atualizarLista}>
                        Adicionar
                      </button>
                    </div>
                  </div>
                </ContainerTelefone>

                <ContainerInput>
                  <label htmlFor="nome-pai">
                    Nome do pai
                    <SpanStatus statusColor="opcional"> (opcional)</SpanStatus>
                  </label>
                  <input
                    type="text"
                    name="nome-pai"
                    aria-describedby="textHelp"
                    placeholder="Nome Completo"
                  />
                  <p className="msg-adicional"></p>
                </ContainerInput>

                <ContainerInput>
                  <label htmlFor="profissao-pai">
                    Profissão do Pai
                    <SpanStatus statusColor="opcional"> (opcional)</SpanStatus>
                  </label>
                  <input
                    type="text"
                    name="profissao-pai"
                    aria-describedby="textHelp"
                    placeholder="Ex.: Motorista"
                  />
                  <p className="msg-adicional"></p>
                </ContainerInput>

                <ContainerInput>
                  <label htmlFor="nome-mae">
                    Nome da Mãe
                    <SpanStatus statusColor="opcional"> (opcional)</SpanStatus>
                  </label>
                  <input
                    type="text"
                    name="nome-mae"
                    aria-describedby="textHelp"
                    placeholder="Nome Completo"
                  />
                  <p className="msg-adicional"></p>
                </ContainerInput>

                <ContainerInput>
                  <label htmlFor="profissao-mae">
                    Profissão da Mãe
                    <SpanStatus statusColor="opcional"> (opcional)</SpanStatus>
                  </label>
                  <input
                    type="text"
                    name="profissao-mae"
                    aria-describedby="textHelp"
                    placeholder="Ex.:Advogada"
                  />
                  <p className="msg-adicional"></p>
                </ContainerInput>

                <ContainerOptionsSelect>
                  <label>
                    Data de Nascimento
                    <SpanStatus statusColor="obrigatorio"> *</SpanStatus>
                  </label>
                  <input type="date" name="data-nascimento" />
                </ContainerOptionsSelect>

                <ContainerInput>
                  <label htmlFor="profissao">
                    Responsável
                    <SpanStatus statusColor="opcional"> (opcional)</SpanStatus>
                  </label>
                  <input
                    type="text"
                    name="nomeresponsavel"
                    aria-describedby="textHelp"
                    placeholder="Ex.: Avó Materna"
                  />
                  <p className="msg-adicional"></p>
                </ContainerInput>

                <ContainerOptionsSelect>
                  <label>
                    Relação de Parentesco<span> (Responsável)</span>
                  </label>
                  <select>
                    {relacaoParentesco.map((relacao) => (
                      <option key={relacao.id} value={relacao.relacao}>
                        {relacao.relacao}
                      </option>
                    ))}
                  </select>
                  <p className="msg-adicional"></p>
                </ContainerOptionsSelect>

                <ContainerOptionsSelect>
                  <label htmlFor="escolaridade">
                    Escolaridade
                    <SpanStatus statusColor="opcional"> (opcional)</SpanStatus>
                  </label>
                  <select name="escolaridade">
                    {escolaridade.map((item) => (
                      <option key={item.id} value={item.option}>
                        {item.option}
                      </option>
                    ))}
                  </select>
                  <p className="msg-adicional"></p>
                </ContainerOptionsSelect>

                <ContainerInput>
                  <label htmlFor="profissao">
                    Profissão
                    <SpanStatus statusColor="opcional"> (opcional)</SpanStatus>
                  </label>
                  <input
                    type="text"
                    name="profissao"
                    aria-describedby="textHelp"
                    placeholder="Ex.: Estudante"
                  />
                  <p className="msg-adicional"></p>
                </ContainerInput>

                <ContainerInput>
                  <label htmlFor="ocupacao">
                    Ocupação Atual
                    <SpanStatus statusColor="opcional"> (opcional)</SpanStatus>
                  </label>
                  <input
                    type="text"
                    name="ocupacao"
                    aria-describedby="textHelp"
                    placeholder="Secretária"
                  />
                  <p className="msg-adicional"></p>
                </ContainerInput>
              </OpcoesSecao>
            </section>

            <OpcoesSecao>
              <TituloSecao>
                <h2>Endereço Residencial</h2>
              </TituloSecao>

              <ContainerInput>
                <label htmlFor="estado">
                  CEP
                  <SpanStatus statusColor="obrigatorio"> *</SpanStatus>
                </label>
                <input
                  type="text"
                  name="endpessoalcep"
                  aria-describedby="textHelp"
                  required
                  placeholder="XXXXX-XXX"
                />
                <p className="msg-adicional"></p>
              </ContainerInput>

              <ContainerInput>
                <label htmlFor="estado">
                  Estado
                  <SpanStatus statusColor="obrigatorio"> *</SpanStatus>
                </label>
                <input
                  type="text"
                  name="endpessoalestado"
                  aria-describedby="textHelp"
                  required
                  placeholder="Ex.: Rio de Janeiro"
                />
                <p className="msg-adicional"></p>
              </ContainerInput>

              <ContainerInput>
                <label htmlFor="cidade">
                  Cidade
                  <SpanStatus statusColor="obrigatorio"> *</SpanStatus>
                </label>
                <input
                  type="text"
                  name="endpessoalcidade"
                  aria-describedby="textHelp"
                  required
                  placeholder="São Paulo"
                />
                <p className="msg-adicional"></p>
              </ContainerInput>

              <ContainerInput>
                <label htmlFor="bairro">
                  Bairro
                  <SpanStatus statusColor="obrigatorio"> *</SpanStatus>
                </label>
                <input
                  type="text"
                  name="endpessoalbairro"
                  aria-describedby="textHelp"
                  required
                  placeholder="Santa Cecília"
                />
                <p className="msg-adicional"></p>
              </ContainerInput>

              <ContainerInput>
                <label htmlFor="logradouro">
                  Endereço
                  <SpanStatus statusColor="obrigatorio"> *</SpanStatus>
                </label>
                <input
                  type="text"
                  name="endpessoallogradouro"
                  aria-describedby="TextHelp"
                  required
                  placeholder="Ex.: Rua José da Silva, 123"
                />
                <p className="msg-adicional"></p>
              </ContainerInput>

              <ContainerInput>
                <label htmlFor="complemento">
                  Complemento
                  <SpanStatus statusColor="opcional"> (opcional)</SpanStatus>
                </label>
                <input
                  type="text"
                  name="endpessoalcomplemento"
                  aria-describedby="textHelp"
                  placeholder="Ex.: Bloco 01 Apartamento 01"
                />
                <p className="msg-adicional"></p>
              </ContainerInput>
            </OpcoesSecao>

            <OpcoesSecao>
              <TituloSecao>
                <h2>Endereço Comercial</h2>
              </TituloSecao>

              <ContainerInput>
                <label htmlFor="estado">
                  CEP
                  <SpanStatus statusColor="obrigatorio"> *</SpanStatus>
                </label>
                <input
                  type="text"
                  name="endpessoalcep"
                  aria-describedby="textHelp"
                  required
                  placeholder="XXXXX-XXX"
                />
                <p className="msg-adicional"></p>
              </ContainerInput>

              <ContainerInput>
                <label htmlFor="estado">
                  Estado
                  <SpanStatus statusColor="obrigatorio"> *</SpanStatus>
                </label>
                <input
                  type="text"
                  name="endpessoalestado"
                  aria-describedby="textHelp"
                  required
                  placeholder="Ex.: Rio de Janeiro"
                />
                <p className="msg-adicional"></p>
              </ContainerInput>

              <ContainerInput>
                <label htmlFor="cidade">
                  Cidade
                  <SpanStatus statusColor="obrigatorio"> *</SpanStatus>
                </label>
                <input
                  type="text"
                  name="endpessoalcidade"
                  aria-describedby="textHelp"
                  required
                  placeholder="São Paulo"
                />
                <p className="msg-adicional"></p>
              </ContainerInput>

              <ContainerInput>
                <label htmlFor="bairro">
                  Bairro
                  <SpanStatus statusColor="obrigatorio"> *</SpanStatus>
                </label>
                <input
                  type="text"
                  name="endpessoalbairro"
                  aria-describedby="textHelp"
                  required
                  placeholder="Santa Cecília"
                />
                <p className="msg-adicional"></p>
              </ContainerInput>

              <ContainerInput>
                <label htmlFor="logradouro">
                  Endereço
                  <SpanStatus statusColor="obrigatorio"> *</SpanStatus>
                </label>
                <input
                  type="text"
                  name="endpessoallogradouro"
                  aria-describedby="TextHelp"
                  required
                  placeholder="Ex.: Rua José da Silva, 123"
                />
                <p className="msg-adicional"></p>
              </ContainerInput>

              <ContainerInput>
                <label htmlFor="complemento">
                  Complemento
                  <SpanStatus statusColor="opcional"> (opcional)</SpanStatus>
                </label>
                <input
                  type="text"
                  name="endpessoalcomplemento"
                  aria-describedby="textHelp"
                  placeholder="Ex.: Bloco 01 Apartamento 01"
                />
                <p className="msg-adicional"></p>
              </ContainerInput>
            </OpcoesSecao>

            <OpcoesSecao>
              <TituloSecao>
                <h2>Outras Informações</h2>
              </TituloSecao>

              <ContainerInput>
                <label htmlFor="">Quem indicou a Clínica da USU?</label>
                <input
                  type="text"
                  name="quem indicou"
                  aria-describedby="textHelp"
                  required
                  placeholder="Ex.: Amigo da Faculdade - Professor Fulano de Tal"
                />
                <p className="msg-adicional"></p>
              </ContainerInput>

              <ContainerInput>
                <label htmlFor="">
                  Melhor horário para atendimento
                  <SpanStatus statusColor="obrigatorio"> *</SpanStatus>
                </label>
                <input
                  type="text"
                  name="horariodisponivel"
                  aria-describedby="textHelp"
                  required
                  placeholder="Ex.: Manhã - Tarde - Noite"
                />
                <p className="msg-adicional"></p>
              </ContainerInput>
            </OpcoesSecao>

            <BotaoFormNovoUsuario>
              <button type="submit">Cadastrar</button>
            </BotaoFormNovoUsuario>
          </form>
        </CardContainer>
      </Container>
    </div>
  )
}
