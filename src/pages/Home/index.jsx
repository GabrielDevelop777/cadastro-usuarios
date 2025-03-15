  import { useRef } from 'react'
  import api from '../../services/api'
  import { Title, 
    Container, 
    Form, 
    ContainerInputs, 
    Input, 
    InputLabel } from "./styles";
  import Button from '../../components/Button'
  import TopBackground from '../../components/TopBackground';
  import { useNavigate } from 'react-router-dom';



  function Home() {
    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()

    const navigate = useNavigate()

    async function registerNewUser() {
      try { // para captar erros
        const response = await api.post('/usuarios', {
          email: inputEmail.current.value,
          age: Number(inputAge.current.value),
          name: inputName.current.value
        });
    
        console.log('Usuário cadastrado:', response.data);
    
      
        navigate('/lista-de-usuarios');
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
      }
    }

    return (
      <Container>

        <TopBackground />

        <Form>
          <Title>Cadastrar Usuário</Title>

          <ContainerInputs>
            <div>
              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
              <Input type="text" placeholder="Nome do usuário" ref={inputName} />
            </div>

            <div>
              <InputLabel>
                Idade<span> *</span>
              </InputLabel>
              <Input type="number" placeholder="idade do usuario" ref={inputAge} />
            </div>

          </ContainerInputs>


          <div style={{ width: '100%' }}>
            <InputLabel>
              E-mail<span> *</span>
            </InputLabel>
            <Input type="email" placeholder="Email do usuário" ref={inputEmail} />
          </div>

          <Button type='button' onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>
        </Form>


        <Button type='button' theme='secundary' onClick={() => navigate('/lista-de-usuarios')}>Ver Lista de Usuário</Button>

      </Container>

    )
  }

  export default Home
