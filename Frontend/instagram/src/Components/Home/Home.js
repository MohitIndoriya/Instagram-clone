import { Box } from '@chakra-ui/react'
import React from 'react'
import Post from '../Post/Post'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'

export default function Home() {
    return (<>

        <Box display="flex"  >
            <Sidebar />
            <Box ml="40px">
                <Topbar maxH="500px" />
                <Post /></Box>
        </Box></>
    )
}
