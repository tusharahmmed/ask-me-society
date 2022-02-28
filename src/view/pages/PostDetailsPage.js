import React from 'react';
import QuestionDetails from '../components/questionDetails/QuestionDetails';
import { Footer, Header, Search, Sidebar } from '../components/shared';
import { Container, LeftContent, RightContent, Wraper } from '../components/shared/BodyContentWraper/BodyContentWraper';

const PostDetailsPage = () => {
    return (
        <>
            <Header />
            <Search />

            <Container className='section-padding'>
                <Wraper>

                    <LeftContent>

                        <QuestionDetails />

                    </LeftContent>

                    <RightContent>

                        <Sidebar />

                    </RightContent>

                </Wraper>
            </Container>

            <Footer />
        </>
    );
};

export default PostDetailsPage;