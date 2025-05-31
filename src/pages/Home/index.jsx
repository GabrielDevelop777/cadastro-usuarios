import { useRef } from "react";
import api from "../../services/api";
import {
	Title,
	Container,
	Form,
	ContainerInputs,
	Input,
	InputLabel,
} from "./styles";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function Home() {
	const inputName = useRef();
	const inputAge = useRef();
	const inputEmail = useRef();

	const navigate = useNavigate();

async function registerNewUser() {
	try {
		const response = await api.post("/usuarios", {
			email: inputEmail.current.value,
			age: Number(inputAge.current.value),
			name: inputName.current.value,
		});

		await Swal.fire({
			icon: 'success',
			title: 'Usuário criado!',
			text: 'O usuário foi cadastrado com sucesso!',
			showConfirmButton: true,
			timer: null,
		});

		navigate("/lista-de-usuarios");

	} catch (error) {
		console.error("Erro ao cadastrar usuário:", error);

		if (error.response) {
			const status = error.response.status;
			const mensagem = error.response.data?.error || "Erro desconhecido";

			switch (status) {
				case 400:
					// Captura erros de validação (campos obrigatórios ou idade < 18)
					Swal.fire({
						icon: 'warning',
						title: 'Dados inválidos!',
						text: mensagem,
					});
					break;

				case 409:
					// Email já em uso
					Swal.fire({
						icon: 'warning',
						title: 'E-mail em uso!',
						text: mensagem,
					});
					break;

				case 500:
					// Erro interno do servidor
					Swal.fire({
						icon: 'error',
						title: 'Erro do servidor!',
						text: 'Ocorreu um erro interno. Tente novamente.',
					});
					break;

				default:
					// Outros erros
					Swal.fire({
						icon: 'error',
						title: 'Erro!',
						text: mensagem,
					});
			}
		} else {
			// Erro de rede ou outro tipo
			Swal.fire({
				icon: 'error',
				title: 'Erro de conexão!',
				text: 'Verifique sua conexão com a internet.',
			});
		}
	}

}

	return (
		<Container>
			<TopBackground />

			<Form>
				<Title>CADASTRAR USUÁRIO</Title>

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
						<Input
							type="number"
							placeholder="Idade do usuário"
							ref={inputAge}
						/>
					</div>
				</ContainerInputs>

				<div style={{ width: "100%" }}>
					<InputLabel>
						E-mail<span> *</span>
					</InputLabel>
					<Input type="email" placeholder="Email do usuário" ref={inputEmail} />
				</div>

				<Button type="button" onClick={registerNewUser} theme="primary">
					Cadastrar Usuário
				</Button>
			</Form>

			<Button
				type="button"
				theme="secundary"
				onClick={() => navigate("/lista-de-usuarios")}
			>
				Ver Lista de Usuário
			</Button>
		</Container>
	);
}

export default Home;
