import React from 'react';
import { FaEnvelope, FaFacebook, FaFacebookF, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostBy = ({data}) => {
    return (
        <Container>

            <Thumbnail>
                <span>
                    <img src="/img/user-1.jpg" alt="" />
                </span>
            </Thumbnail>

            <UserDetails>

                <DetailsHeader>
                    <h4>{data?.displayName}</h4>
                </DetailsHeader>

                <DetailsDescription>Hi ! I’m Mahmoud Adel Baghagho, Art Director, UI/UX Designer. I live in small town somewhere in the world & sometimes i’m writing about life and travel.</DetailsDescription>

                <DetailsFooter>

                    <p>Follow Me</p>
                    <span>
                        <IconWraper bg='#3B5997'>
                            <FaFacebookF />
                        </IconWraper>
                        <IconWraper bg="#00BAF0">
                            <FaTwitter />
                        </IconWraper>
                        <IconWraper bg='#006599'>
                            <FaLinkedinIn />
                        </IconWraper>
                        <IconWraper bg="black">
                            <FaEnvelope />
                        </IconWraper>
                    </span>

                </DetailsFooter>

            </UserDetails>
        </Container>
    );
};

export default PostBy;




const Container = styled.div`
    margin: 30px 0;
    padding: 20px;
    background: var(--background-secondary);
    box-shadow: 0 1px 5px -1px rgb(0 0 0 / 13%);

    display: flex;

    @media (max-width: 600px){
        flex-direction: column;
    }
`;
const Thumbnail = styled.div`

   margin-right: 30px;
    span img{
        padding: 2px;
        border: 2px solid #80808026;
        border-radius: 999px;
    }
`;
const UserDetails = styled.div`
    flex: 1;
`;
const DetailsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    h4{
        color: var(--theme-secondary);
        size: 16px;
        font-weight: 600;
    }


    @media (max-width: 992px){
        margin-bottom: 15px;

        h2{
            font-size: 22px;
        }

    }
    @media (max-width: 688px){
        margin-bottom: 10px;
        h4{
            font-size: 14px;
        }

    }
`;
const DetailsDescription = styled.p`
    font-size: 13px;
    line-height: 22px;
    color: var(--font-secondary);
    padding-bottom: 10px;
`;
const DetailsFooter = styled.div`
    display: flex;
    align-items: center;

    p{
        font-size: 13px;
        margin-right: 15px;
        color: var(--font-secondary);
    }

    span{
        display: flex;
    }
`;
const IconWraper = styled.div`
    margin-right: 10px;
    font-size: 18px;
    color: #fff;
    height: 30px;
    width: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.bg ? props.bg : 'var(--font-secondary)'};
`;