import styled from 'styled-components';
import PageLayout from '../Navigation/PageLayout';
import { Header } from '../components/StyledComponents/commonComponents';

const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 50px;
    gap: 20px;

`;

const Bio = () => {
    return (
        <PageLayout>
            <Header>Details</Header>
            <GridLayout>
                <div>
                    <div>Address</div>
                    <div>Edinburgh, Scotland</div>
                </div>
                <div>
                    <div>Contact</div>
                    <div>Tel: 0782894101</div>
                    <div>Email: michaelforbez@hotmail.co.uk</div>
                </div>
                <div>
                    <div>Coding experience</div>
                    <p>After doing Codeclan in 2019 I got a job straight away at the company that would eventually become TrustFlight. Throughout my time there, I learnt all I know now about React, javascript, typescript and more. </p>
                </div>
            </GridLayout>
        </PageLayout>
    )
};

export default Bio;
