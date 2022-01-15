import { Container,Logo,List ,ListItem } from "./styles";
import { MdAccountCircle , MdDone , MdLogin ,MdShoppingCart
} from "react-icons/md";
import logo from './logo515.png'
export default function Navbar(){
    return(
        <Container>
            <Logo>
            <a href='/'>
            <img src={logo} alt='Book' />
        </a>
            </Logo>
            
                <List>
                    <li>
                        <a href='https://www.estantevirtual.com.br/'>
                            <MdAccountCircle/>
                            <span>Duvidas</span>
                        </a>
                    </li>
                    <li>
                        <a href='/login'>
                            <MdLogin/>
                            <span>Login</span>
                        </a>
                    </li> 
                    <li>
                        <a href='/register'>
                            <MdDone/>
                            <span>Criar Conta</span>
                        </a>
                    </li>
                    <li>
                        <a href=' https://www.amazon.com.br/LIVROS-Usado/s?k=LIVROS&rh=n%3A6740748011%2Cp_n_condition-type%3A13862763011'>
                            <MdShoppingCart/>
                            <span>Carrinho</span>
                        </a>
                    </li>           
                </List>
            
        </Container>
    )
}