import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

function Pedido() {
  const navigate = useNavigate()

  // Regras de validação
  const validationSchema = Yup.object({
    faixaEtaria: Yup.string()
      .required('Selecione sua faixa etária'),

    joga: Yup.string()
      .required('Selecione uma opção'),

    contatoSaudeMental: Yup.string()
      .required('Selecione uma opção'),

    importanciaJogos: Yup.string()
      .required('Escolha uma nota'),

    conscientizacao: Yup.string()
      .required('Selecione uma opção'),

    avaliacaoProposta: Yup.string()
      .required('Escolha uma nota'),

    temas: Yup.string()
      .required('Escolha uma nota'),

    experiencia: Yup.string()
      .min(5, 'Escreva um pouco mais sobre sua experiência')
      .required('Conte um pouco sobre sua experiência'),

    melhorias: Yup.string()
      .min(5, 'Escreva pelo menos algumas palavras')
      .required('Conte o que poderia ser melhorado')
  })

  return (
    <div className="formulario">

      <h1>Pesquisa — Projeto Castaway</h1>

      <p>
        Sua opinião é muito importante para o desenvolvimento
        do nosso Trabalho de Conclusão de Curso.
      </p>

      <p>
        Responda às perguntas abaixo com base na sua experiência
        e percepção sobre o projeto.
      </p>

      <Formik
        initialValues={{
          faixaEtaria: '',
          joga: '',
          contatoSaudeMental: '',
          importanciaJogos: '',
          conscientizacao: '',
          avaliacaoProposta: '',
          temas: '',
          experiencia: '',
          melhorias: ''
        }}

        validationSchema={validationSchema}

        onSubmit={(values) => {
          localStorage.setItem(
            'respostasCastaway',
            JSON.stringify(values)
          )

          navigate('/Sobre')
        }}
      >
        <Form>

          {/* 1 - FAIXA ETÁRIA */}

          <div className="pergunta">

            <label>
              1. Qual sua faixa etária?
            </label>

            <div>

              <label>
                <Field
                  type="radio"
                  name="faixaEtaria"
                  value="Menos de 18"
                />
                Menos de 18 anos
              </label>

              <br />

              <label>
                <Field
                  type="radio"
                  name="faixaEtaria"
                  value="18-24"
                />
                18 a 24 anos
              </label>

              <br />

              <label>
                <Field
                  type="radio"
                  name="faixaEtaria"
                  value="25-34"
                />
                25 a 34 anos
              </label>

              <br />

              <label>
                <Field
                  type="radio"
                  name="faixaEtaria"
                  value="35-44"
                />
                35 a 44 anos
              </label>

              <br />

              <label>
                <Field
                  type="radio"
                  name="faixaEtaria"
                  value="45+"
                />
                45 anos ou mais
              </label>

            </div>

            <ErrorMessage
              name="faixaEtaria"
              component="p"
              className="erro"
            />

          </div>


          {/* 2 - EXPERIÊNCIA COM JOGOS */}

          <div className="pergunta">

            <label>
              2. Você costuma jogar videogames?
            </label>

            <br />

            <label>
              <Field
                type="radio"
                name="joga"
                value="Sim"
              />
              Sim
            </label>

            <br />

            <label>
              <Field
                type="radio"
                name="joga"
                value="Não"
              />
              Não
            </label>

            <ErrorMessage
              name="joga"
              component="p"
              className="erro"
            />

          </div>


          {/* 3 - CONTATO COM JOGOS SOBRE SAÚDE MENTAL */}

          <div className="pergunta">

            <label>
              3. Você já teve contato com jogos que abordam
              temas relacionados à saúde mental?
            </label>

            <br />

            <label>
              <Field
                type="radio"
                name="contatoSaudeMental"
                value="Sim"
              />
              Sim
            </label>

            <br />

            <label>
              <Field
                type="radio"
                name="contatoSaudeMental"
                value="Não"
              />
              Não
            </label>

            <ErrorMessage
              name="contatoSaudeMental"
              component="p"
              className="erro"
            />

          </div>


          {/* 4 - IMPORTÂNCIA */}

          <div className="pergunta">

            <label>
              4. De 1 a 5, quanto você considera importante
              abordar temas relacionados à saúde mental
              através de jogos?
            </label>

            <div className="escala">

              {[1, 2, 3, 4, 5].map((numero) => (
                <label key={numero}>

                  <Field
                    type="radio"
                    name="importanciaJogos"
                    value={String(numero)}
                  />

                  <span>{numero}</span>

                </label>
              ))}

            </div>

            <small>
              1 = Pouco importante | 5 = Muito importante
            </small>

            <ErrorMessage
              name="importanciaJogos"
              component="p"
              className="erro"
            />

          </div>


          {/* 5 - CONSCIENTIZAÇÃO */}

          <div className="pergunta">

            <label>
              5. Você acredita que jogos podem contribuir
              para a conscientização sobre temas como
              ansiedade e depressão?
            </label>

            <br />

            <label>
              <Field
                type="radio"
                name="conscientizacao"
                value="Sim"
              />
              Sim
            </label>

            <br />

            <label>
              <Field
                type="radio"
                name="conscientizacao"
                value="Não"
              />
              Não
            </label>

            <br />

            <label>
              <Field
                type="radio"
                name="conscientizacao"
                value="Talvez"
              />
              Não tenho certeza
            </label>

            <ErrorMessage
              name="conscientizacao"
              component="p"
              className="erro"
            />

          </div>


          {/* 6 - AVALIAÇÃO DA PROPOSTA */}

          <div className="pergunta">

            <label>
              6. Depois de conhecer a proposta do Castaway,
              como você avalia a ideia do projeto?
            </label>

            <div className="escala">

              {[1, 2, 3, 4, 5].map((numero) => (
                <label key={numero}>

                  <Field
                    type="radio"
                    name="avaliacaoProposta"
                    value={String(numero)}
                  />

                  <span>{numero}</span>

                </label>
              ))}

            </div>

            <small>
              1 = Não gostei | 5 = Gostei muito
            </small>

            <ErrorMessage
              name="avaliacaoProposta"
              component="p"
              className="erro"
            />

          </div>


          {/* 7 - TRANSMISSÃO DOS TEMAS */}

          <div className="pergunta">

            <label>
              7. O quanto você acredita que o jogo consegue
              transmitir os temas relacionados à saúde mental?
            </label>

            <div className="escala">

              {[1, 2, 3, 4, 5].map((numero) => (
                <label key={numero}>

                  <Field
                    type="radio"
                    name="temas"
                    value={String(numero)}
                  />

                  <span>{numero}</span>

                </label>
              ))}

            </div>

            <small>
              1 = Não consegue transmitir |
              5 = Consegue transmitir muito bem
            </small>

            <ErrorMessage
              name="temas"
              component="p"
              className="erro"
            />

          </div>


          {/* 8 - EXPERIÊNCIA */}

          <div className="pergunta">

            <label>
              8. O que você achou da proposta e da experiência
              proporcionada pelo Castaway?
            </label>

            <br />

            <Field
              as="textarea"
              name="experiencia"
              rows="5"
              placeholder="Escreva sua opinião..."
            />

            <ErrorMessage
              name="experiencia"
              component="p"
              className="erro"
            />

          </div>


          {/* 9 - MELHORIAS */}

          <div className="pergunta">

            <label>
              9. O que você mudaria ou melhoraria no projeto?
            </label>

            <br />

            <Field
              as="textarea"
              name="melhorias"
              rows="5"
              placeholder="Conte para nós..."
            />

            <ErrorMessage
              name="melhorias"
              component="p"
              className="erro"
            />

          </div>


          {/* BOTÃO */}

          <button type="submit">
            Enviar pesquisa
          </button>

        </Form>
      </Formik>

    </div>
  )
}

export default Pedido
