import { BackgroundProps, Box, Button, Checkbox, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { updateTodo, getTodos } from '../redux/action';
import { TaskType } from '../redux/reducer';


interface Props {
    title: string;
    titleBGColor?: BackgroundProps["bg"],
    data: TaskType[]
}

const TaskCard = ({
    data
}: {
    data: TaskType
}) => {
    const dispatch = useDispatch();
    const handleUpdate = (index: number) => {
        if( !data.id ) return;

        const task = {
            ...data,
            subTasks: data.subTasks.map( (item,i)=> i === index? { ...item, status: !item.status }: item  )
        }
        
        const response = dispatch(updateTodo({ id: data.id, task })) as unknown as Promise<void>;
        response.then( ()=>{
            dispatch( getTodos() )
        } )
        // .then(()=>{
        //     dispatch( getTodos() )
        // })

    }
    return (
        <Box bgColor="cornsilk" p="1rem" borderRadius="0.5rem">
            <Text>{data.title}</Text>
            <Text>{data.description}</Text>
            <VStack align="center">
                <VStack align="left">   
                {data.subTasks.map( (item,index)=> 
                        <Checkbox onChange={ ()=>handleUpdate(index) } isChecked={item.status} >{item.title} </Checkbox>
                )}
                </VStack>
            </VStack>
        </Box>

    )
}

const ListTasks = (props: Props) => {
    return (
        <Stack pb="2rem" direction="column">
            <Box mb="1rem" bg={props.titleBGColor??"tomato"} w="full" minH="2rem">
                <Heading as="h3"> {props.title}</Heading>
            </Box>
            <Box p="2rem">
            { 
                props.data.map(item=>(
                    <TaskCard key={item.title} data={item} />
                ))
            }
            </Box>
        </Stack>
    )
}

export default ListTasks
