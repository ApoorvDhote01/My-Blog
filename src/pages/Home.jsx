import React, { useState, useEffect } from 'react';
import appwriteService from '../appwrite/configure';
import { Container, PostCard } from '../components';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-12 mt-8 text-center bg-gray-300">
                <Container>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <div className="p-4 w-full md:w-1/2 lg:w-1/3">
                            <h1 className="text-4xl font-bold text-gray-900 hover:text-gray-600">
                                Welcome to Our Blog
                            </h1>
                            <p className="mt-4 text-lg text-gray-700">
                                Discover insightful articles, stories, and ideas. Our blog is your go-to source for the latest trends, tips, and inspiration.
                            </p>
                            <p className="mt-2 text-md text-gray-600">
                                Login or sign up to explore more exclusive content and join our community of passionate readers and writers.
                            </p>
                        </div>
                        <div className="p-4 w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLPXoxaKZfDnO6uhyNR-cYxPmmbqAaAW0Dg&s"
                                alt="Blogging"
                                className="rounded-lg shadow-md mx-auto"
                            />
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-12 bg-gray-300">
            <Container>
                <div className="flex flex-wrap justify-center">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
