import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToPostDetails } from '../../router/coordinator';
import { votePost } from '../../services/feed'
import { Heading, Text } from "@chakra-ui/react"
import { Arrow, ButtonsContainer, StyledBox, TextContainer } from './styled'
import greyDown from '../../assets/grey-down.svg'
import greyUp from '../../assets/grey-up.svg'
import coloredUp from '../../assets/colored-up.svg'
import coloredDown from '../../assets/colored-down.svg'

function PostCard(props) {
    const history = useHistory()

    const handleVote = (decision) => {
        const body = {
            direction: decision,
        }
        votePost(body, props.id, props.update)
    }

    const arrow = () => {
        if (props.direction === 0) {
            return (<>
                <Arrow src={greyUp} onClick={() => handleVote(1)} />
                <Heading size="md">{props.votesCount}</Heading>
                <Arrow src={greyDown} onClick={() => handleVote(-1)} />
            </>)
        } else if (props.direction === 1) {
            return (<>
                <Arrow src={coloredUp} onClick={() => handleVote(0)} />
                <Heading size="md">{props.votesCount}</Heading>
                <Arrow src={greyDown} onClick={() => handleVote(-1)} />
            </>)
        } else {
            return (<>
                <Arrow src={greyUp} onClick={() => handleVote(1)} />
                <Heading size="md">{props.votesCount}</Heading>
                <Arrow src={coloredDown} onClick={() => handleVote(0)} />
            </>)
        }
    }

    return (<StyledBox borderWidth="1px" borderRadius="lg" >
        <ButtonsContainer>
            {arrow()}
        </ButtonsContainer>
        <TextContainer onClick={() => goToPostDetails(history, props.id)}>
            <Text>u/{props.username}</Text>
            <Heading size="lg">{props.title} </Heading>
            <Text>{props.text}</Text>
        </TextContainer>

    </StyledBox>

    )
}

export default PostCard;