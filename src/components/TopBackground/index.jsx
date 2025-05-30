import UsersImage from "../../assets/user.png";
import { Background } from "./styles";

function TopBackground() {
	return (
		<Background>
			<img src={UsersImage} alt="imagem-usuarios" />
		</Background>
	);
}

export default TopBackground;
