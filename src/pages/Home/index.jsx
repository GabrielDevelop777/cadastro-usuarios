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
			text: 'O usuário foi cadastrado com sucesso.',
			showConfirmButton: true,
			timer: null,
		});

		navigate("/lista-de-usuarios");

	} catch (error) {
	console.error("Erro ao cadastrar usuário:", error);

	if (error.response && error.response.status === 409) {
		const mensagem = error.response.data?.error || "E-mail já cadastrado.";
		Swal.fire({
			icon: 'warning',
			title: 'E-mail em uso!',
			text: mensagem,
		});
	} else {
		Swal.fire({
			icon: 'error',
			title: 'Erro!',
			text: 'Email já cadastrado.',
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
							placeholder="idade do usuario"
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
