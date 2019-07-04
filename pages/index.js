import Link from 'next/link';
import Head from 'next/head';
import link from 'next/dist/client/link';

import fetch from 'isomorphic-unfetch';

import Layout from '../comps/MyLayouts';
import Container from '../comps/Container';


const getPost = () => {
    return [
        { id: 'hello-next.js', title: 'Hello Next.js' },
        { id: 'learn-next.js', title: 'Learn Next.js' },
        { id: 'deploy-next.js', title: 'Deploy Next.js' }
    ]
}

const Post = ({ post }) => (
    <li key={post.id}>
        <Link as={`/p/${post.id}`} href={`/post?id=${post.title}`}>
            <a>{post.title}</a>
        </Link>
    </li>
)

export default function Blog() {
    return (
        <Layout>
            <Container>
                <h1>My Blog</h1>
                <ul>
                    {getPost().map(post => (
                        <Post key={post.id} post={post} />
                    ))}
                </ul>
                <style jsx global>{`
                    h1, a {
                        font - family: 'Arial';
                    }

                    ul {
                        padding: 0;
                    }

                    li {
                        list - style: none;
                        margin: 5px 0;
                    }

                    a {
                        text - decoration: none;
                        color: blue;
                    }

                    a:hover {
                        opacity: 0.6;
                    }  
                `}</style>
            </Container>
        </Layout>
    )
};