import { useEffect, useState } from "react";
import api from "../../services/api";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import Swal from 'sweetalert2';
import {
	Container,
	Title,
	CardUsers,
	ContainerUsers,
	TrashIcon,
	AvatarUser,
} from "./styles";
import Trash from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";

function ListUsers() {
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		async function getUsers() {
			const { data } = await api.get("/usuarios");

			setUsers(data);
		}
		getUsers();
	}, []);

async function deleteUsers(id) {
	try {
		await api.delete(`/usuarios/${id}`);

		const updataUsers = users.filter((user) => user.id !== id);
		setUsers(updataUsers);

		Swal.fire({
			icon: 'success',
			title: 'Usuário deletado!',
			text: 'O usuário foi removido com sucesso.',
			showConfirmButton: true,
		});
	} catch (error) {
		Swal.fire({
			icon: 'error',
			title: 'Erro!',
			text: 'Não foi possível deletar o usuário.',
		});
	}
}

	return (
		<Container>
			<TopBackground />
			<Title>Lista de Usuários</Title>

			<ContainerUsers>
				{users.map((user) => (
					<CardUsers key={user.id}>
						<AvatarUser
							src={`https://avatar.iran.liara.run/public?username=${user.id}`}
						/>
						<div>
							<h3>{user.name}</h3>
							<p>Idade: {user.age}</p>
							<p>Email: {user.email}</p>
						</div>
						<TrashIcon
							onClick={() => deleteUsers(user.id)}
							src={Trash}
							alt="icone-lixo"
						/>
					</CardUsers>
				))}
			</ContainerUsers>

			<Button theme="terciario" type="button" onClick={() => navigate("/")}>
				Voltar
			</Button>
		</Container>
	);
}

export default ListUsers;
