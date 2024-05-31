import { Container } from "../../components/Container/Style";
import { HeaderHome } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import OndaHome from "../../components/OndaHome/OndaHome";

export const Home = () => {
    return(
        <Container>
            <OndaHome/>

            <HeaderHome/>

            <Input
                placeholder={"Pesquise"}
                icon="search"
            />
        </Container>
    )
}