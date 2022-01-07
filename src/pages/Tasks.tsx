import React, { useEffect } from 'react'
import {Box, Grid, Heading, Skeleton} from "@chakra-ui/react";
import ListTasks from '../components/ListTasks';
import {useDispatch, useSelector} from "react-redux";
import { ReduxState, TaskType } from '../redux/reducer';
import { getTodos } from '../redux/action';

interface Props {
    
}

const Tasks = (props: Props) => {
    const tasks = useSelector<ReduxState>((state)=>state.tasks) as TaskType[];
    const isLoading = useSelector<ReduxState>((state)=>state.isLoading) as boolean;
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch( getTodos() )
    },[])

    const todoTasks = tasks.filter( item => item.status === "todo" );
    const inProgressTasks = tasks.filter( item => item.status === "in-progress" );
    const doneTasks = tasks.filter( item => item.status === "done" );

    console.log( tasks, todoTasks, inProgressTasks, doneTasks)

    return (
        <Skeleton isLoaded={!isLoading}>
            <Box>
                    <Heading as="h3">Tasks</Heading>
                    <Grid templateColumns={{
                        base: "1fr",
                        lg: "repeat(3,1fr)",
                    }} gap="1rem">
                        <Box borderRadius="8px" boxShadow={"md"} >
                            <ListTasks data={todoTasks}  titleBGColor="brown" title="TODO"/>
                        </Box>
                        <Box borderRadius="8px" boxShadow={"md"} >
                            <ListTasks  data={inProgressTasks} title="IN PROGRESS"/>

                        </Box>
                        <Box borderRadius="8px" boxShadow={"md"} >
                            <ListTasks  data={doneTasks} title="DONE"/>

                        </Box>
                    </Grid>
            </Box>
        </Skeleton>
    )
}

export default Tasks
