import { withRouter } from 'next/router';
import Layout from '../comps/MyLayouts';
import fetch from 'isomorphic-unfetch';
import Markdown from 'react-markdown';

import Container from '../comps/Container'

export default withRouter(props => (
    <Layout>
        <Container>
            <h1>{props.router.query.title}</h1>
            <div className="markDown">
                <Markdown source={`
                    This is our blog post.
                    Yes. We can have a [link](/link).
                    And we can have a title as well.
                    
                    ### This is a title
                    
                    And here's the content.
                `} />
            </div>
            <style jsx global>{`
                .markDown {
                    font-family: 'Arial';
                }

                .markDown a {
                    text-decoration: none;
                    color: blue;
                }

                .markDown a:hover {
                    opacity: 0.6;
                }

                .markDown h3 {
                    margin: 0;
                    padding: 0;
                    text-transform: uppercase;
                }
            `}</style>
        </Container>
    </Layout>
))