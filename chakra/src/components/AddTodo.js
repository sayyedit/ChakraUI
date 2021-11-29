import { Button, Input, HStack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { nanoid } from "nanoid";
import React from "react";

function AddTodo({ addTodo }) {
  const toast = useToast();
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(content);
    if (!content) {
      toast({
        title: "No Content",
        description: "Please add a todo to add into the List.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const todo = {
      id: nanoid(),
      body: content,
    };
    addTodo(todo);
    setContent("");
  }
  const [content, setContent] = useState("");
  return (
    <form onClick={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Add a todo..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
