import React, { useState, useEffect} from 'react'
import appwriteService from "../appwrite/configure";
import { Container , PostCard} from "../components"; 

function AllPosts() {
    const [posts , setPosts] = useState([])
    
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })
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

export default AllPosts
