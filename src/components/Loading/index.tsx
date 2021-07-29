import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { Container } from "./styles";
import { colors } from "../../styles";

function Loading() {
    return (
        <Container>
            <Loader
                type="TailSpin"
                color={colors.primary}
            />
        </Container>
    );
}

export default Loading;
