import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Header, Search, Footer, PostItem, Sidebar } from '../components/shared';
import { Container, LeftContent, RightContent, Wraper } from '../components/shared/BodyContentWraper/BodyContentWraper';


const Home = () => {

    // ALL POSTS
    const [allPost, setAllPost] = useState([]);

    //load all post
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://boiling-mountain-38060.herokuapp.com/all-post'
        })
            .then(data => {
                setAllPost(data.data);
            })
    }, [])

    return (
        <>
            <Header />
            <Search />

            <Container className='section-padding'>
                <Wraper>

                    <LeftContent>
                        {/* selectedIndex={tabIndex} onSelect={index => setTabIndex(index)} */}
                        <Tabs>

                            <TabList>
                                <Tab>Recent Questions</Tab>
                                <Tab>Most Answered</Tab>
                                <Tab>Answeres</Tab>
                                <Tab>No Answeres</Tab>
                                <Tab>Most Voted</Tab>
                            </TabList>

                            <TabPanel>
                                {/* recent question  */}
                                {
                                    (allPost.length > 0) ? allPost.map(item => <PostItem key={item._id} data={item} />) : ''
                                }
                            </TabPanel>

                            <TabPanel>
                                {
                                    (allPost.length > 0) ? allPost.map(item => <PostItem key={item._id} data={item} />) : ''
                                }
                            </TabPanel>
                            <TabPanel>
                                {
                                    (allPost.length > 0) ? allPost.map(item => <PostItem key={item._id} data={item} />) : ''
                                }
                            </TabPanel>
                            <TabPanel>
                                {
                                    (allPost.length > 0) ? allPost.map(item => <PostItem key={item._id} data={item} />) : ''
                                }
                            </TabPanel>
                            <TabPanel>
                                {
                                    (allPost.length > 0) ? allPost.map(item => <PostItem key={item._id} data={item} />) : ''
                                }
                            </TabPanel>



                        </Tabs>

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

export default Home;