
import styled from 'styled-components';
import './HomePageSlide.css';

const Container = styled.div`
    display: flex;
    padding: 6em
    opacity: ${props => props.hiddenValue}
    justify-content: center;
    align-items: center;
`;

const Pane = styled.div`
    flex: ${props => props.weight};
    padding: 1em;
`;

export function HomePageSlide(props) {
    const [left, right] = props.children;

    return (
        <Container>
            <Pane weight={props.leftWeight}>
                <div className='homepage-slide-image'>
                    {left}
                </div>
            </Pane>
            <Pane weight={props.rightWeight}>
                <div className='homepage-slide-text'>
                    {right}
                </div>
            </Pane>
        </Container>
    )
}