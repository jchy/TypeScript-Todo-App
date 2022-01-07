import { Box, Flex, SimpleGrid, Heading, Input, VStack, Button, Checkbox, RadioGroup, Stack, Radio, Skeleton } from '@chakra-ui/react'
import React, { useState } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/action';
import { ReduxState, Status, TaskType } from '../redux/reducer';


interface Props {
    
}

export interface SubTaskProp {
    title:string;
    status: boolean
}



const AddTask = (props: Props) => {
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [taskText, setTaskText] = useState<string>("")
    const [subTasks, setSubTasks] = useState<SubTaskProp[]>([])
    const [status, setStatus] = useState<Status>("todo");
    const dispatch = useDispatch();
    const isLoading = useSelector<ReduxState>( state=>state.isLoading);
    
    const handleAddSubTask = () =>{
        const payload: SubTaskProp ={
            title: taskText,
            status: false
        }
        setSubTasks([...subTasks, payload])
        setTaskText("")
    }


    const createTask = () =>{
        const task : TaskType = {
            title: title,
            description: description,
            subTasks: subTasks,
            status: status
        }
        dispatch( addTodo(task) )
    }

    return (
        <Skeleton isLoaded={!isLoading}>
        <Box w="full">
            <SimpleGrid spacing={"1rem"} columns={[1,2,3]}>
                <VStack align="start" spacing="1rem">
                    <Box align="left">
                        <Heading as="h6">Title</Heading>
                        <Input value={title} onChange={e=>setTitle(e.target.value)} placeholder='Basic usage' />
                    </Box>
                    <Box align="left">
                        <Heading as="h6">Description</Heading>
                        <Input value={description} onChange={e=>setDescription(e.target.value)} placeholder='Basic usage' />
                    </Box>
                </VStack>
                <VStack>
                    <Box align="left">
                        <Heading as="h6">Sub Tasks</Heading>
                        <Flex >
                            <Input value={taskText} onChange={e=>setTaskText(e.target.value)} placeholder='Basic usage' />
                            <Button onClick={handleAddSubTask}>ADD</Button>
                        </Flex>
                    </Box>
                    <VStack align="start" gap="0.5rem" w="full">
                        { subTasks.map((item, index) => (
                            <Flex w="full" p="1rem" align="center" justify="space-between" borderRadius={"0.5rem"} gap="1rem" border="1px solid #cecece" key={item.title}>
                                <Checkbox isChecked={item.status}>{item.title}</Checkbox>
                                <DeleteIcon />
                            </Flex>
                        )) }
                    </VStack>
                </VStack>
                <Box  mt="5rem">
                    <Button onClick={createTask}>CREATE TASK</Button>
                </Box>
            </SimpleGrid>
            <Box align="left" mt="4rem">
                <Heading as="h6">Status</Heading>
                <RadioGroup onChange={(value)=>{
                    if( value === "in-progress" ) {
                        setStatus("in-progress")
                    }
                    else if( value === "todo" ){
                        setStatus("todo")
                    }
                    else if( value === "done" ){
                        setStatus("done")
                    }
                }} value={status}>
                <Stack direction='row'>
                    <Radio value='todo'>Todo</Radio>
                    <Radio value="in-progress">In-Progress</Radio>
                    <Radio value='done'>Done</Radio>
                </Stack>
                </RadioGroup>
            </Box>
        </Box>
        </Skeleton>
    )
}

export default AddTask
